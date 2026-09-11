import { useNavigate } from "react-router-dom";

import FeverStatusCard from "../../components/home/FeverStatusCard";
import HomeTopBar from "../../components/home/HomeTopBar";
import QuickActions from "../../components/home/QuickActions";
import TrendCard from "../../components/home/TrendCard";
import { childStatus } from "../../constants/childStatus";
import { FEVER_LEVEL } from "../../constants/fever";
import { recentTemperatureTrend } from "../../constants/temperatureTrend";
import { resolveFeverLevel } from "../../utils/fever";

export default function Home() {
  const navigate = useNavigate();
  const level = FEVER_LEVEL[resolveFeverLevel(childStatus)];

  return (
    <div className="flex flex-1 flex-col gap-[12px] bg-[#FBFBFB] px-[20px] pb-[117px]">
      <HomeTopBar deviceConnected={childStatus.deviceConnected} />
      <FeverStatusCard
        childName={childStatus.childName}
        temperature={childStatus.currentTemperature}
        temperatureColor={level.temperatureColor}
        showChildLabel={level.showChildLabel}
        statusMessage={level.pill.message}
        caption={childStatus.caption}
      />
      <TrendCard
        title="최근 6시간"
        trend={recentTemperatureTrend}
        color={level.chartColor}
        showEndDot={level.showEndDot}
        onViewRecords={() => navigate("/records")}
      />
      <QuickActions
        recordLabel={level.primaryAction}
        hospitalLabel={level.secondaryAction}
      />
    </div>
  );
}
