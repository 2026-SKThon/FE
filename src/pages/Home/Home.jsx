import FeverStatusCard from "../../components/home/FeverStatusCard";
import HomeTopBar from "../../components/home/HomeTopBar";
import QuickActions from "../../components/home/QuickActions";
import TrendCard from "../../components/home/TrendCard";
import { childStatus } from "../../constants/childStatus";
import { FEVER_LEVEL } from "../../constants/fever";
import { recentTemperatureTrend } from "../../constants/temperatureTrend";
import { buildMeasureCaption } from "../../utils/fever";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col gap-[12px] bg-[#FBFBFB] px-[20px] pb-[117px]">
      <HomeTopBar deviceConnected={childStatus.deviceConnected} />
      <FeverStatusCard
        childName={childStatus.childName}
        temperature={childStatus.currentTemperature}
        statusMessage={FEVER_LEVEL[childStatus.feverLevel].message}
        caption={buildMeasureCaption(childStatus)}
      />
      <TrendCard title="최근 6시간" trend={recentTemperatureTrend} />
      <QuickActions
        recordLabel="아이 상태 기록하기"
        hospitalLabel="가까운 병원·약국 찾기"
      />
    </div>
  );
}
