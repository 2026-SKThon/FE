import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import calendarIcon from "../../assets/icons/calender.svg";
import slashDivider from "../../assets/icons/slash_divider.svg";
import nextArrow from "../../assets/icons/next_arrow.svg";
import { dailyTemperatureTrend } from "../../constants/temperatureTrend";

/* 페이지 좌우 공통 여백 20px */
const Wrapper = styled.div`
  padding: 0 20px 117px;
`;

/* 상단 헤더 영역 - 타이틀 + 날짜 뱃지 */
const HeaderBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 19.5px 0;
`;

/* 헤더 타이틀 "민호의 리포트" */
const Title = styled.h1`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray900};
`;

/* 날짜 뱃지(알약 모양) 컨테이너 */
const DateBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  border-radius: 8px;
  background: #f3f4f6;
  padding: 6px 12px;
`;

/* 날짜 뱃지 캘린더 아이콘 */
const DateIcon = styled.img`
  width: 20px;
  height: 20px;
`;

/* 날짜 뱃지 텍스트 "8월 20일" */
const DateText = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray500};
`;

/* 리포트 카드 영역 - 틀만 구성, 실제 데이터 연동 예정 */
const Card = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 12px;
  box-shadow: 0px -1px 7px -2px rgba(0, 0, 0, 0.25);
`;

/* 카드 내 섹션 구분용 점선 */
const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 0.5px dashed #8B95A1;
`;

/* 카드 상단 메인 타이틀 "기록을 모아, 진료할 때 쉽게 전달해요" */
const CardHeading = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.375;
  padding-left: 10px;
  color: ${({ theme }) => theme.colors.gray900};
`;

/* 카드 상단 서브 텍스트 (설명 문구 공용) */
const CardSubText = styled.p`
  margin-top: 2.625px;
  font-size: 12px;
  padding-left: 10px;
  color: ${({ theme }) => theme.colors.gray500};
`;

/* 각 섹션 소제목 (오늘 체온 흐름 / 함께 남긴 기록 / 의료진에게 보여줄 요약) */
const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  line-height: 28.80px;
  word-wrap: break-word;

  color: ${({ theme }) => theme.colors.gray900};
`;

/* 섹션 공통 레이아웃 - 세로 정렬, 내부 20px 패딩 */
const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px 20px;
  text-align: left;
`;

/* 더미 데이터 - 오늘 체온 흐름 전부 API로 받아올 예정 */
/* "최근/최고" 온도 표시 줄 */
const TempRow = styled.p`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray500};
`;

/* "최근/최고" 사이 구분 아이콘 - 양쪽 12px 간격 */
const SlashDivider = styled.img`
  width: 9px;
  height: 20px;
  margin: 0 12px;
`;

/* 온도 강조 값 (기본 색상, "최근" 온도) */
const TempValue = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray500};
`;

/* 온도 강조 값 (포인트 색상, "최고" 온도) */
const TempValueAccent = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.red};
`;

/* 부가 설명용 흐린 텍스트 (측정 시각, 안내문구 등 공용) */
const NoteText = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray500};
`;

/* 더미 데이터 - 함께 남긴 기록도 API로 받아올 예정 */
/* 복약 정보 텍스트 묶음 - 내부 gap 0 */
const MedInfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

/* 복약 정보 강조 텍스트 */
const MedRow = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.red};
`;

/* "아이 상태" 행 - 좌우 양끝 정렬 */
const ChildStatusRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

/* "아이 상태 기록이 없어요" - 한 블럭, 최대 너비 124px, 줄바꿈 없이 한 줄 */
const ChildStatusText = styled.p`
  max-width: 124px;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray900};
`;

/* 텍스트 내 흐린 인라인 강조 (예: "기록이 없어요") */
const MutedInline = styled.span`
  color: ${({ theme }) => theme.colors.gray900};
`;

/* 포인트 컬러 텍스트 버튼 (예: "아이 상태 남기기") */
const LinkButton = styled.button`
  display: flex;
  align-items: center;
  gap: 2px;
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.red};
  background: none;
  border: none;
  cursor: pointer;
`;

/* 더미 데이터 - AI 분석 결과 연결 링크는 추후 실제 라우팅/API 연동 예정 */
/* 요약 섹션 레이아웃 - 내부 20px 패딩 */
const SummaryBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
  text-align: left;
`;

/* "AI 분석 결과 확인하러 가기" CTA 버튼 */
const AiButton = styled.button`
  border-radius: 12px;
  background: #ffede9;
  padding: 12px 0;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.red};
  border: none;
  cursor: pointer;
`;

/* 카드 하단 흐린 텍스트 버튼 (예: "요약에 사용한 기록 보기") */
const FooterLink = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  width: 100%;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray500};
  background: none;
  border: none;
  cursor: pointer;
`;

/* LinkButton / FooterLink 끝에 붙는 다음 화살표 아이콘 */
const NextArrowIcon = styled.img`
  width: 16px;
  height: 16px;
`;

//현재 날짜 받아옴
export default function Report() {
  const navigate = useNavigate();

  const todayLabel = new Date().toLocaleDateString("ko-KR", {
    month: "long",
    day: "numeric",
  });

  // 더미 데이터 - 체온 관련 값은 전부 temperatureTrend.js에서 가져옴 (디자인은 그대로 유지)
  const { current: currentTemp, highest: highestTemp } =
    dailyTemperatureTrend.summary;
  const latestPoint =
    dailyTemperatureTrend.points[dailyTemperatureTrend.points.length - 1];
  const measuredTime = new Date(latestPoint.measuredAt).toLocaleTimeString(
    "ko-KR",
    { hour: "2-digit", minute: "2-digit", hour12: false },
  );
  // temperatureTrend.js에 별도 peak 필드가 없어서 points 중 최고 온도 지점을 직접 찾음
  const peakPoint = dailyTemperatureTrend.points.reduce((max, point) =>
    point.temperature > max.temperature ? point : max,
  );
  const peakTime = new Date(peakPoint.measuredAt).toLocaleTimeString(
    "ko-KR",
    { hour: "2-digit", minute: "2-digit", hour12: false },
  );
  const tempDiff = (highestTemp - currentTemp).toFixed(1);

  return (
    <Wrapper>
      <HeaderBar>
        <Title>민호의 리포트</Title>
        <DateBadge>
          <DateIcon src={calendarIcon} alt="" />
          <DateText>{todayLabel}</DateText>
        </DateBadge>
      </HeaderBar>


      <Card>
        <div>
          <CardHeading>
            기록을 모아,
            <br />
            진료할 때 쉽게 전달해요
          </CardHeading>
          <CardSubText>체온과 복약 기록을 한곳에 정리했어요.</CardSubText>
        </div>

        <Divider />

        <Section>
          <SectionTitle>오늘 체온 흐름</SectionTitle>
          <TempRow>
            최근 <TempValue>{currentTemp}°C</TempValue>
            <SlashDivider src={slashDivider} alt="" />
            최고 <TempValueAccent>{highestTemp}°C</TempValueAccent>
          </TempRow>
          <NoteText>
            {measuredTime} 측정 · {peakTime} 최고 기록보다 {tempDiff}°C
            낮아요
            <br />
            관측된 측정값 기준 · 기록 없는 구간은 제외
          </NoteText>
        </Section>

        <Divider />

        <Section>
          <SectionTitle>함께 남긴 기록</SectionTitle>
          <MedInfoGroup>
            <MedRow>복약 1회 · 마지막 19:10</MedRow>
            <NoteText>챔프 시럽 5mL · 보호자 입력</NoteText>
          </MedInfoGroup>
          <ChildStatusRow>
            <ChildStatusText>
              아이 상태 <MutedInline>기록이 없어요</MutedInline>
            </ChildStatusText>
            <LinkButton type="button">
              아이 상태 남기기
              <NextArrowIcon src={nextArrow} alt="" />
            </LinkButton>
          </ChildStatusRow>
        </Section>

        <Divider />

        <SummaryBlock>
          <div>
            <SectionTitle>의료진에게 보여줄 요약</SectionTitle>
            <CardSubText>체온 · 복약 · 증상을 시간순으로 정리해요.</CardSubText>
          </div>
          <AiButton type="button" onClick={() => navigate("/report/analysis")}>
            AI 분석 결과 확인하러 가기
          </AiButton>
        </SummaryBlock>

        {/* <FooterLink type="button">
          요약에 사용한 기록 보기
          <NextArrowIcon src={nextArrow} alt="" />
        </FooterLink> */}
      </Card>
    </Wrapper>
  );
}
