import Card from "../common/Card";
import ChartTimeAxis from "../common/ChartTimeAxis";
import SectionHeader from "../common/SectionHeader";
import TemperatureChart from "../common/TemperatureChart";
import { buildTimeAxisLabels } from "../../utils/datetime";

export default function TrendCard({
  title,
  trend,
  color,
  showEndDot,
  onViewRecords,
}) {
  return (
    <Card className="flex flex-col gap-[8px]">
      <SectionHeader
        title={title}
        actionLabel="기록 보기"
        onAction={onViewRecords}
      />
      <TemperatureChart
        points={trend.points}
        size="mini"
        color={color}
        showEndDot={showEndDot}
      />
      <ChartTimeAxis labels={buildTimeAxisLabels(trend.points)} />
    </Card>
  );
}
