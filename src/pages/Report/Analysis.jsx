import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/header";
import Button from "../../components/common/Button";
import nextArrow from "../../assets/icons/next_arrow.svg";
import { checkedInfoList } from "../../constants/checkedInfo";
import { reportSummary } from "../../constants/reportSummary";
import { dailyTemperatureTrend } from "../../constants/temperatureTrend";

/* 페이지 콘텐츠 영역 - 좌우 20px, 위 8px, 블럭 사이 gap 14px */
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 8px 20px 117px;
`;

/* 블럭 공통 - 내부 패딩 18px */
const Block = styled.div`
  padding: 18px;
  border-radius: 16px;
`;

/* "기록 확인" 뱃지 */
const RecordBadge = styled.span`
  display: inline-flex;
  align-self: flex-start;
  padding: 8px 12px;
  border-radius: 8px;
  background: #ffede9;
  color: ${({ theme }) => theme.colors.red};
  font-size: 13px;
  font-weight: 600;
`;

/* 상단 카드 - 뱃지/타이틀/메타 정보 gap 12px */
const TopCard = styled(Block)`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

/* 상단 카드 타이틀 "지금 기록을 정리해 의료진에게 상담해 주세요" */
const TopTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.35;
  color: ${({ theme }) => theme.colors.gray900};
`;

/* 상단 카드 메타 정보 (이름 · 개월수 · 기준 시각) */
const TopMeta = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.gray500};
`;

/* "지금까지 확인된 정보" 카드 - 타이틀/항목 사이 gap 16px */
const InfoCard = styled(Block)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InfoCardTitle = styled.h3`
  font-size: 17px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray900};
`;

/* 확인된 정보 항목 한 줄 - 번호 + 내용 */
const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const InfoItemNumber = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.red};
`;

const InfoItemBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const InfoItemTitle = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray900};
`;

const InfoItemDesc = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.gray500};
`;

/* 안내 문구 박스 */
const DisclaimerBox = styled(Block)`
  background: #f7f7f8;
`;

const DisclaimerText = styled.p`
  font-size: 12px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.gray500};
`;

/* 버튼 + 하단 링크 묶음 - gap 6px */
const ConsultGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

/* 하단 "진료 가능한 병원 보기" 링크 */
const HospitalLink = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  width: 100%;
  background: none;
  border: none;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.gray500};
  cursor: pointer;
`;

const NextArrowIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export default function Analysis() {
  const navigate = useNavigate();

  // 더미 데이터 - src/constants/reportSummary.js에서 관리, 추후 API 연동 예정
  const referenceDate = new Date(reportSummary.referenceDate);
  const referenceLabel = referenceDate.toLocaleDateString("ko-KR", {
    month: "long",
    day: "numeric",
  });
  const referenceTime = referenceDate.toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  // 더미 데이터 - 체온 항목 설명은 temperatureTrend.js에서 계산
  const temperatureDescription = `현재 ${dailyTemperatureTrend.summary.current}°C · 오늘 최고 ${dailyTemperatureTrend.summary.highest}°C`;

  return (
    <div>
      <Header title="AI 분석 결과" />

      <ContentWrapper>
        <TopCard>
          <RecordBadge>기록 확인</RecordBadge>
          <TopTitle>
            지금 기록을 정리해
            <br />
            의료진에게 상담해 주세요
          </TopTitle>
          <TopMeta>
            {reportSummary.childName} · {reportSummary.ageInMonths}개월 ·{" "}
            {referenceLabel} {referenceTime} 기준
          </TopMeta>
        </TopCard>

        <InfoCard>
          <InfoCardTitle>지금까지 확인된 정보</InfoCardTitle>

          {checkedInfoList.map((info, index) => (
            <InfoItem key={info.id}>
              <InfoItemNumber>
                {String(index + 1).padStart(2, "0")}
              </InfoItemNumber>
              <InfoItemBody>
                <InfoItemTitle>{info.title}</InfoItemTitle>
                <InfoItemDesc>
                  {info.id === "temperature"
                    ? temperatureDescription
                    : info.description}
                </InfoItemDesc>
              </InfoItemBody>
            </InfoItem>
          ))}
        </InfoCard>

        <DisclaimerBox>
          <DisclaimerText>
            입력·측정한 기록을 정리한 참고 정보이며 의료 진단이 아니에요.
            <br />
            진료 시 의료진에게 기록을 보여 주세요.
          </DisclaimerText>
        </DisclaimerBox>

        <Button
          label="증상 설명문 보기"
          variant="filled"
          onClick={() => navigate("/report/analysis/symptom")}
        />
        <ConsultGroup>
          <Button
            label="아e안심톡 상담 신청"
            variant="soft"
            onClick={() =>
              window.open(
                "https://icaretok.nemc.or.kr/pec/",
                "_blank",
                "noopener,noreferrer",
              )
            }
          />
          <HospitalLink type="button" onClick={() => navigate("/hospital")}>
            진료 가능한 병원 보기
            <NextArrowIcon src={nextArrow} alt="" />
          </HospitalLink>
        </ConsultGroup>
      </ContentWrapper>
    </div>
  );
}
