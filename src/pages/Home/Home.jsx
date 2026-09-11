import { useState } from "react";
import { useNavigate } from "react-router-dom";

import FeverStatusCard from "../../components/home/FeverStatusCard";
import HomeTopBar from "../../components/home/HomeTopBar";
import QuickActions from "../../components/home/QuickActions";
import StatusNoticeCard from "../../components/home/StatusNoticeCard";
import TrendCard from "../../components/home/TrendCard";
import {
  getLatestTemperature,
  getTemperatureHistory,
} from "../../api/temperatures";
import { CHILD_ID, POLL_INTERVAL_MS } from "../../constants/api";
import { usePolling } from "../../hooks/usePolling";
import { childStatus } from "../../constants/childStatus";
import { FEVER_LEVEL, RECORDS_PATH } from "../../constants/fever";
import { recentTemperatureTrend } from "../../constants/temperatureTrend";
import { buildMeasureCaption, resolveFeverLevel } from "../../utils/fever";
import { downsamplePoints } from "../../utils/trend";

export default function Home() {
  const navigate = useNavigate();
  // 서버 응답이 오기 전 · 실패 시에는 목데이터로 그린다
  const [status, setStatus] = useState(childStatus);
  const [trend, setTrend] = useState(recentTemperatureTrend);

  usePolling(async () => {
    const [latest, history] = await Promise.allSettled([
      getLatestTemperature(CHILD_ID),
      getTemperatureHistory(CHILD_ID),
    ]);

    if (latest.status === "fulfilled" && latest.value?.currentTemperature != null) {
      setStatus({
        ...childStatus,
        currentTemperature: latest.value.currentTemperature,
        measuredAt: latest.value.lastMeasuredAt,
        caption: buildMeasureCaption(latest.value),
      });
    }

    if (history.status === "fulfilled" && history.value?.points?.length) {
      setTrend({ points: downsamplePoints(history.value.points) });
    }
  }, POLL_INTERVAL_MS);

  const levelKey = resolveFeverLevel(status);
  const level = FEVER_LEVEL[levelKey];

  return (
    <div className="flex flex-1 flex-col gap-[12px] bg-[#FBFBFB] px-[20px] pb-[117px]">
      <HomeTopBar tag={level.tag} onTagClick={() => navigate(level.tag.path)} />
      <FeverStatusCard
        childName={status.childName}
        temperature={status.currentTemperature}
        caption={status.caption}
        levelKey={levelKey}
        level={level}
      />
      <div className="flex flex-col gap-[16px]">
        <TrendCard
          title="최근 6시간"
          trend={trend}
          color={level.chartColor}
          showEndDot={level.showEndDot}
          onViewRecords={() => navigate(RECORDS_PATH)}
        />
        <StatusNoticeCard {...level.notice} />
        <QuickActions
          recordLabel={level.primaryAction}
          hospitalLabel={level.secondaryAction}
          onRecord={() => navigate(level.primaryPath)}
          onFindHospital={() => navigate("/hospital")}
        />
      </div>
    </div>
  );
}
