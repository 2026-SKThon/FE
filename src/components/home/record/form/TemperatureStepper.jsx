import arrowRight from "../../../../assets/icons/arrow_right.svg";
import FilledField from "./FilledField";

const STEP_DIRECTION = {
  up: "-rotate-90",
  down: "rotate-90",
};

function StepButton({ direction, label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex size-[24px] items-center justify-center rounded-[2px] border border-[#F3F4F6] bg-[#F3F4F6]"
    >
      <img
        src={arrowRight}
        alt=""
        className={`size-[20px] ${STEP_DIRECTION[direction]}`}
      />
    </button>
  );
}

export default function TemperatureStepper({
  label,
  value,
  unit = "°C",
  onIncrease,
  onDecrease,
}) {
  return (
    <FilledField label={label}>
      <p className="text-[28px] font-semibold leading-[1.6] text-[#333D4B]">
        {`${value} ${unit}`}
      </p>
      <div className="flex flex-col gap-[8px]">
        <StepButton direction="up" label="체온 올리기" onClick={onIncrease} />
        <StepButton direction="down" label="체온 내리기" onClick={onDecrease} />
      </div>
    </FilledField>
  );
}
