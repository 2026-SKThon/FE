import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/header/header";
import Button from "../../components/common/Button";
import Card from "../../components/common/Card";
import SectionHeader from "../../components/common/SectionHeader";
import DailyTrendCard from "../../components/home/record/DailyTrendCard";
import PeriodTabs from "../../components/home/record/PeriodTabs";
import RecordList from "../../components/home/record/RecordList";
import { PERIOD_OPTIONS } from "../../constants/period";
import { PERIOD_TREND_MOCKS } from "../../constants/temperatureTrend";
import { getTodayRecordsTop3 } from "../../api/records";
import { getTemperatureHistory } from "../../api/temperatures";
import { CHILD_ID, POLL_INTERVAL_MS } from "../../constants/api";
import { usePolling } from "../../hooks/usePolling";
import { useRecordStore } from "../../store/useRecordStore";
import { mergeRecords } from "../../utils/record";
import { downsamplePoints, mergeTrendWithRecords } from "../../utils/trend";

const PREVIEW_COUNT = 3;

export default function Records() {
  const navigate = useNavigate();
  const [period, setPeriod] = useState(PERIOD_OPTIONS[0].value);
  const [index, setIndex] = useState(PERIOD_TREND_MOCKS[period].length - 1);
  const records = useRecordStore((state) => state.records);

  const [serverTrend, setServerTrend] = useState(null);
  const [serverRecords, setServerRecords] = useState(null);

  usePolling(async () => {
    const [history, top3] = await Promise.allSettled([
      getTemperatureHistory(CHILD_ID),
      getTodayRecordsTop3(CHILD_ID),
    ]);

    if (history.status === "fulfilled" && history.value?.points?.length) {
      setServerTrend({
        points: downsamplePoints(history.value.points),
        summary: {
          current: history.value.currentTemperature,
          highest: history.value.maxTemperature,
          lowest: history.value.minTemperature,
        },
      });
    }

    if (top3.status === "fulfilled") setServerRecords(top3.value);
  }, POLL_INTERVAL_MS);

  const periodTrends = PERIOD_TREND_MOCKS[period];
  const lastIndex = periodTrends.length - 1;
  const isLatest = index === lastIndex;
  const latestTrend = periodTrends[lastIndex];

  // 일(日) 최신 화면만 서버 데이터로 대체한다
  const useServer = isLatest && period === "DAY" && serverTrend;
  const trend = useServer
    ? { ...latestTrend, ...serverTrend, axisLabels: undefined }
    : isLatest
      ? mergeTrendWithRecords(periodTrends[index], records)
      : periodTrends[index];

  // 서버는 체온만 갖고 있어 로컬 복약·상태 기록과 합친다
  const previewRecords = mergeRecords(serverRecords ?? [], records).slice(
    0,
    PREVIEW_COUNT,
  );

  // 기간을 바꾸면 항상 가장 최근으로
  const changePeriod = (value) => {
    setPeriod(value);
    setIndex(PERIOD_TREND_MOCKS[value].length - 1);
  };

  return (
    <div className="flex flex-1 flex-col bg-[#FBFBFB]">
      <Header title="체온 기록" />
      <div className="flex flex-1 flex-col gap-[12px] px-[20px] pb-[117px]">
        <PeriodTabs
          options={PERIOD_OPTIONS}
          value={period}
          onChange={changePeriod}
        />
        <DailyTrendCard
          trend={trend}
          dateLabel={trend.dateLabel}
          showPrev={index > 0}
          showNext={!isLatest}
          onPrevDate={() => setIndex((prev) => prev - 1)}
          onNextDate={() => setIndex((prev) => prev + 1)}
        />
        <Card className="flex flex-col gap-[14px]">
          <SectionHeader
            title="오늘의 기록"
            actionLabel="전체 보기"
            onAction={() => navigate("/records/today")}
          />
          <RecordList records={previewRecords} />
        </Card>
        <Button
          label="+ 기록 추가하기"
          variant="soft"
          onClick={() => navigate("/records/new")}
        />
      </div>
    </div>
  );
}
