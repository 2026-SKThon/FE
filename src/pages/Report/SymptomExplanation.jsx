import { useRef, useState } from "react";
import styled from "styled-components";
import html2canvas from "html2canvas";
import Header from "../../components/header/header";
import Button from "../../components/common/Button";
import Toast from "../../components/common/Toast";
import { symptomExplanationInfo } from "../../constants/symptomExplanation";
import { dailyTemperatureTrend } from "../../constants/temperatureTrend";
import { useRecordStore } from "../../store/useRecordStore";
import { buildSymptomDescription } from "../../utils/record";

/* 페이지 전체 래퍼 - 고정 Footer(97px)에 마지막 콘텐츠가 가리지 않도록 하단 여백 */
const PageWrapper = styled.div`
  padding-bottom: 117px;
`;

/* 안내 문구 박스 - 좌우 32px 여백 */
const NoticeBox = styled.div`
  margin: 0 32px;
  border: #ffffff;
  text-align: center;
`;

/* 안내 문구 텍스트 "의료진에게 이 화면을 보여 주세요." */
const NoticeText = styled.p`
  font-size: 14px;
  color: #B0B8C1;
`;

/* 가장 바깥 카드 박스 - Report.jsx의 Card와 동일한 둥근 블럭 스타일, 양옆 20px만 */
const Card = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 9px;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 12px;
  box-shadow: 0px -1px 7px -2px rgba(0, 0, 0, 0.25);
`;

/* 기본정보/체온변화/복약기록/동반증상 묶음 - 내부 패딩 18px, 항목 간 gap 14px */
const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  font-size: 14px;
  padding: 18px;
`;

/* 항목 한 개 - 타이틀/설명 텍스트 절반씩 */
const InfoRow = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  color: #6B7684;
  gap: 4px;
`;

/* 항목 타이틀 (예: "기본 정보") */
const InfoRowTitle = styled.p`
  font-size: 13px;
  font-weight: 600;
  line-height: 20.8px;
  word-wrap: break-word;
  color: ${({ theme }) => theme.colors.red};
`;

/* 항목 설명 텍스트 */
const InfoRowDesc = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 22.4px;
  word-wrap: break-word;
  color: #6b7684;
`;

/* 체온 변화 그래프 섹션 - 내부 패딩 16px, gap 8px */
const ChartSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
`;

/* 그래프 타이틀 행 - "체온 변화" + 최고 온도, 양끝 정렬 */
const ChartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

/* "체온 변화" 타이틀 */
const ChartTitle = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray900};
`;

/* 최고 온도 표시 (예: "최고 38.6°C") */
const ChartPeak = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #B0B8C1;
`;

/* 그래프 하단 캡션 "점선은 복약 시각을 나타내요." */
const ChartCaption = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray500};
`;

/* 추가 전달 사항 박스 - 패딩 12px */
const AdditionalBox = styled.div`
  padding: 20px;
  border-radius: 8px;
  background: #f7f7f8;
`;

/* "추가로 전달하고 싶은 내용" 타이틀 */
const AdditionalTitle = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray900};
`;

/* 보호자가 직접 입력하는 추가 전달 내용 - 클릭하면 키보드로 입력 가능 */
const AdditionalTextarea = styled.textarea`
  margin-top: 12px;
  width: 100%;
  border: none;
  background: transparent;
  outline: none;
  resize: none;
  font-family: inherit;
  font-size: 13px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.gray900};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray500};
  }
`;

/* 복사하기/공유하기 버튼 행 - gap 12px, 절반씩 */
const ButtonRow = styled.div`
  display: flex;
  gap: 12px;

  > * {
    flex: 1;
  }
`;

/* 더미 데이터 - temperatureTrend.js의 dailyTemperatureTrend.points로 그래프 좌표 계산 */
const CHART_WIDTH = 300;
const CHART_HEIGHT = 96;

function buildChartData() {
  const { points } = dailyTemperatureTrend;
  const times = points.map((p) => new Date(p.measuredAt).getTime());
  const temps = points.map((p) => p.temperature);
  const minTime = times[0];
  const maxTime = times[times.length - 1];
  const minTemp = Math.min(...temps);
  const maxTemp = Math.max(...temps);
  const tempRange = maxTemp - minTemp || 1;

  const xForTime = (t) =>
    ((t - minTime) / (maxTime - minTime)) * CHART_WIDTH;
  const yForTemp = (temp) =>
    CHART_HEIGHT - ((temp - minTemp) / tempRange) * CHART_HEIGHT;

  const linePoints = points
    .map(
      (p) =>
        `${xForTime(new Date(p.measuredAt).getTime())},${yForTemp(p.temperature)}`,
    )
    .join(" ");
  const areaPoints = `0,${CHART_HEIGHT} ${linePoints} ${CHART_WIDTH},${CHART_HEIGHT}`;

  // 복약 시각(19:10) 표시용 점선 위치
  const medicationTime = new Date("2026-08-20T19:10:00+09:00").getTime();
  const medicationX = xForTime(medicationTime);

  return { linePoints, areaPoints, medicationX };
}

/* 복사하기/공유하기 공용 - 증상 설명문 요약 텍스트 */
function buildSummaryText(infoRows) {
  return infoRows
    .map((info) => `${info.title}\n${info.description.replace(/\n/g, " ")}`)
    .join("\n\n");
}

export default function SymptomExplanation() {
  const { linePoints, areaPoints, medicationX } = buildChartData();
  const records = useRecordStore((state) => state.records);
  const latestCondition = records.find(
    (record) => record.recordType === "CONDITION",
  );
  const infoRows = symptomExplanationInfo.map((info) =>
    info.id === "symptom" && latestCondition
      ? { ...info, description: buildSymptomDescription(latestCondition) }
      : info,
  );
  const [toastMessage, setToastMessage] = useState("");
  const cardRef = useRef(null);

  const showToastMessage = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(""), 2000);
  };

  // 카드(둥근 테두리 포함) 전체를 이미지로 캡처
  async function captureCardImage() {
    const canvas = await html2canvas(cardRef.current, {
      backgroundColor: "#ffffff",
      scale: 2,
      onclone: (clonedDoc) => {
        // html2canvas가 textarea의 값/placeholder를 그리지 못해서 텍스트 요소로 대체
        const original = cardRef.current.querySelector("textarea");
        const cloned = clonedDoc.querySelector("textarea");
        if (!original || !cloned) return;

        const hasValue = Boolean(original.value);
        const textNode = clonedDoc.createElement("div");
        textNode.textContent = hasValue
          ? original.value
          : original.placeholder;
        textNode.style.marginTop = "12px";
        textNode.style.fontSize = "13px";
        textNode.style.lineHeight = "1.5";
        textNode.style.whiteSpace = "pre-wrap";
        textNode.style.color = hasValue ? "#191F28" : "#8B95A1";
        cloned.replaceWith(textNode);
      },
    });
    return new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
  }

  const handleCopy = async () => {
    try {
      const blob = await captureCardImage();
      await navigator.clipboard.write([
        new ClipboardItem({ "image/png": blob }),
      ]);
      showToastMessage("이미지가 복사되었습니다");
      return;
    } catch {
      // 이미지 클립보드 API 미지원 환경 - 텍스트로 대체
    }

    try {
      await navigator.clipboard.writeText(buildSummaryText(infoRows));
      showToastMessage("클립보드에 복사되었습니다");
    } catch {
      showToastMessage("복사에 실패했어요");
    }
  };

  const handleShare = async () => {
    let blob;
    try {
      blob = await captureCardImage();
    } catch {
      // 캡처 실패 시 텍스트 공유로 대체
    }

    if (blob) {
      const file = new File([blob], "증상설명문.png", { type: "image/png" });

      if (navigator.canShare?.({ files: [file] })) {
        try {
          await navigator.share({ title: "증상 설명문", files: [file] });
          return;
        } catch (err) {
          if (err?.name === "AbortError") return; // 사용자가 공유 취소
        }
      }

      // 파일 공유 미지원 환경 - 이미지 클립보드 복사로 대체
      try {
        await navigator.clipboard.write([
          new ClipboardItem({ "image/png": blob }),
        ]);
        showToastMessage("이미지가 복사되었습니다");
        return;
      } catch {
        // 이미지 클립보드도 안 되면 텍스트로 대체
      }
    }

    const text = buildSummaryText(infoRows);
    if (navigator.share) {
      try {
        await navigator.share({ title: "증상 설명문", text });
        return;
      } catch (err) {
        if (err?.name === "AbortError") return;
      }
    }

    try {
      await navigator.clipboard.writeText(text);
      showToastMessage("클립보드에 복사되었습니다");
    } catch {
      showToastMessage("공유에 실패했어요");
    }
  };

  return (
    <PageWrapper>
      <Header title="증상 설명문" />
      <NoticeBox>
        <NoticeText>의료진에게 이 화면을 보여 주세요.</NoticeText>
      </NoticeBox>
      <Card ref={cardRef}>
        <InfoBox>
          {infoRows.map((info) => (
            <InfoRow key={info.id}>
              <InfoRowTitle>{info.title}</InfoRowTitle>
              <InfoRowDesc>
                {info.description.split("\n").map((line, i, arr) => (
                  <span key={i}>
                    {line}
                    {i < arr.length - 1 && <br />}
                  </span>
                ))}
              </InfoRowDesc>
            </InfoRow>
          ))}
        </InfoBox>

        <ChartSection>
          <ChartHeader>
            <ChartTitle>체온 변화</ChartTitle>
            <ChartPeak>
              최고 {dailyTemperatureTrend.summary.highest}°C
            </ChartPeak>
          </ChartHeader>
          <svg
            viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
            width="100%"
            height="96"
            preserveAspectRatio="none"
          >
            <polygon points={areaPoints} fill="#FFEDE9" />
            <polyline
              points={linePoints}
              fill="none"
              stroke="#FF4F37"
              strokeWidth="2"
            />
            <line
              x1={medicationX}
              y1="0"
              x2={medicationX}
              y2={CHART_HEIGHT}
              stroke="#D1D6DB"
              strokeWidth="1"
              strokeDasharray="4 3"
            />
          </svg>
          <ChartCaption>점선은 복약 시각을 나타내요.</ChartCaption>
        </ChartSection>

        <AdditionalBox>
          <AdditionalTitle>추가로 전달하고 싶은 내용</AdditionalTitle>
          <AdditionalTextarea
            rows={2}
            placeholder="예: 평소보다 축 처져 보이고 잘 안 먹어요."
          />
        </AdditionalBox>

        <ButtonRow>
          <Button label="복사하기" variant="soft" onClick={handleCopy} />
          <Button label="공유하기" variant="filled" onClick={handleShare} />
        </ButtonRow>
      </Card>

      <Toast message={toastMessage} visible={!!toastMessage} />
    </PageWrapper>
  );
}
