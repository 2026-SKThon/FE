import Card from "../common/Card";
import CurrentTemperature from "./CurrentTemperature";
import FeverIllustration from "./FeverIllustration";
import FeverStatusPill from "./FeverStatusPill";

export default function FeverStatusCard({
  childName,
  temperature,
  caption,
  levelKey,
  level,
}) {
  return (
    <Card className="relative flex h-[360px] flex-col justify-end">
      <FeverIllustration level={levelKey} />
      <div className="relative flex flex-col items-end gap-[8px]">
        <CurrentTemperature
          childName={childName}
          temperature={temperature}
          color={level.temperatureColor}
          showChildLabel={level.showChildLabel}
        />
        <div className="flex w-full flex-col gap-[7px]">
          <FeverStatusPill {...level.pill} />
          <p className="text-center text-[12px] leading-[17px] text-[#8B95A1]">
            {caption}
          </p>
        </div>
      </div>
    </Card>
  );
}
