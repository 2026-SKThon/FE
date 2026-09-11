import { useState } from "react";

import Header from "../../components/header/header";
import Button from "../../components/common/Button";
import Card from "../../components/common/Card";
import SectionHeader from "../../components/common/SectionHeader";
import DailyTrendCard from "../../components/home/record/DailyTrendCard";
import PeriodTabs from "../../components/home/record/PeriodTabs";
import RecordList from "../../components/home/record/RecordList";
import { PERIOD_OPTIONS } from "../../constants/period";
import { dailyTemperatureTrend } from "../../constants/temperatureTrend";
import { useRecordStore } from "../../store/useRecordStore";
import { formatDateLabel } from "../../utils/datetime";

const PREVIEW_COUNT = 3;

export default function Records() {
  const [period, setPeriod] = useState(PERIOD_OPTIONS[0].value);
  const records = useRecordStore((state) => state.records);

  return (
    <div className="flex flex-1 flex-col bg-[#FBFBFB]">
      <Header title="체온 기록" />
      <div className="flex flex-1 flex-col gap-[12px] px-[20px] pb-[117px]">
        <PeriodTabs
          options={PERIOD_OPTIONS}
          value={period}
          onChange={setPeriod}
        />
        <DailyTrendCard
          trend={dailyTemperatureTrend}
          dateLabel={formatDateLabel(dailyTemperatureTrend.date)}
        />
        <Card className="flex flex-col gap-[14px]">
          <SectionHeader title="오늘의 기록" actionLabel="전체 보기" />
          <RecordList records={records.slice(0, PREVIEW_COUNT)} />
        </Card>
        <Button label="+ 기록 추가하기" variant="soft" />
      </div>
    </div>
  );
}
