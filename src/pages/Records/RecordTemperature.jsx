import decoThermometer from "../../assets/images/deco_thermometer.svg";
import Button from "../../components/common/Button";
import Card from "../../components/common/Card";
import Header from "../../components/header/header";
import ChipGroup from "../../components/home/record/form/ChipGroup";
import CornerIllustration from "../../components/home/record/form/CornerIllustration";
import DateTimeField from "../../components/home/record/form/DateTimeField";
import MemoBox from "../../components/home/record/form/MemoBox";
import TemperatureStepper from "../../components/home/record/form/TemperatureStepper";
import { childStatus } from "../../constants/childStatus";
import {
  BODY_PART_OPTIONS,
  TEMPERATURE_FORM_DEFAULT,
} from "../../constants/recordForm";
import { formatDateTimeLabel } from "../../utils/datetime";

export default function RecordTemperature() {
  return (
    <div className="relative flex flex-1 flex-col bg-[#FBFBFB]">
      <Header title="체온 기록" />
      <CornerIllustration
        src={decoThermometer}
        width={168}
        height={170}
        left={225}
        top={24}
      />
      <div className="relative flex flex-1 flex-col gap-[14px] px-[20px] pt-[20px] pb-[117px]">
        <div className="flex flex-col">
          <p className="text-[24px] font-semibold leading-[36px] text-[#191F28]">
            직접 잰 체온을 남겨요
          </p>
          <p className="text-[14px] font-medium leading-[1.6] text-[#6B7684]">
            {`${childStatus.childName}의 기록에 저장돼요`}
          </p>
        </div>

        <Card className="flex flex-col gap-[12px] p-[18px]">
          <TemperatureStepper
            label="측정한 체온"
            value={TEMPERATURE_FORM_DEFAULT.temperature}
          />
          <DateTimeField
            label="측정 일시"
            value={formatDateTimeLabel(TEMPERATURE_FORM_DEFAULT.measuredAt)}
            badgeLabel="현재"
          />
          <ChipGroup
            label="측정 부위"
            options={BODY_PART_OPTIONS}
            value={TEMPERATURE_FORM_DEFAULT.bodyPart}
          />
        </Card>

        <MemoBox
          title="메모 · 선택"
          placeholder="측정할 때 아이의 상태를 적어주세요"
          variant="card"
        />

        <p className="text-[12px] font-medium leading-[20px] text-[#B0B8C1]">
          직접 입력한 체온은 기기 측정값과 구분해서 표시해요.
        </p>

        <Button label="기록 저장하기" />
      </div>
    </div>
  );
}
