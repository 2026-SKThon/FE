import Card from "../../common/Card";
import ChartTimeAxis from "../../common/ChartTimeAxis";
import TemperatureChart from "../../common/TemperatureChart";
import DateNavigator from "./DateNavigator";
import TemperatureSummary from "./TemperatureSummary";
import { buildTimeAxisLabels } from "../../../utils/datetime";

export default function DailyTrendCard({
  trend,
  dateLabel,
  onPrevDate,
  onNextDate,
}) {
  return (
    <Card className="flex flex-col gap-[14px]">
      <DateNavigator
        label={dateLabel}
        onPrev={onPrevDate}
        onNext={onNextDate}
      />
      <TemperatureSummary summary={trend.summary} />
      <TemperatureChart
        points={trend.points}
        size="full"
        referenceTemperatures={trend.referenceTemperatures}
      />
      <ChartTimeAxis labels={buildTimeAxisLabels(trend.points)} />
    </Card>
  );
}
