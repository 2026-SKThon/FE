import { useNavigate } from "react-router-dom";

import FeverStatusCard from "../../components/home/FeverStatusCard";
import HomeTopBar from "../../components/home/HomeTopBar";
import QuickActions from "../../components/home/QuickActions";
import StatusNoticeCard from "../../components/home/StatusNoticeCard";
import TrendCard from "../../components/home/TrendCard";
import { childStatus } from "../../constants/childStatus";
import { FEVER_LEVEL } from "../../constants/fever";
import { recentTemperatureTrend } from "../../constants/temperatureTrend";
import { resolveFeverLevel } from "../../utils/fever";

export default function Home() {
  const navigate = useNavigate();
  const levelKey = resolveFeverLevel(childStatus);
  const level = FEVER_LEVEL[levelKey];

  return (
    <div className="flex flex-1 flex-col gap-[12px] bg-[#FBFBFB] px-[20px] pb-[117px]">
      <HomeTopBar tag={level.tag} />
      <FeverStatusCard
        childName={childStatus.childName}
        temperature={childStatus.currentTemperature}
        caption={childStatus.caption}
        levelKey={levelKey}
        level={level}
      />
      <div className="flex flex-col gap-[16px]">
        <TrendCard
          title="최근 6시간"
          trend={recentTemperatureTrend}
          color={level.chartColor}
          showEndDot={level.showEndDot}
          onViewRecords={() => navigate("/records")}
        />
        <StatusNoticeCard {...level.notice} />
        <QuickActions
          recordLabel={level.primaryAction}
          hospitalLabel={level.secondaryAction}
          onFindHospital={() => navigate("/hospital")}
        />
      </div>
    </div>
  );
}
