import arrowLeft from "../../../assets/icons/arrow_left.svg";
import arrowRight from "../../../assets/icons/arrow_right.svg";

function ArrowButton({ icon, label, onClick, visible }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`size-[20px] shrink-0 cursor-pointer ${visible ? "" : "invisible"}`}
    >
      <img src={icon} alt="" className="size-full" />
    </button>
  );
}

export default function DateNavigator({
  label,
  onPrev,
  onNext,
  showPrev = true,
  showNext = true,
}) {
  return (
    <div className="flex items-center justify-center gap-[12px]">
      <ArrowButton
        icon={arrowLeft}
        label="이전 기간"
        onClick={onPrev}
        visible={showPrev}
      />
      <p className="text-[14px] font-bold leading-[20px] text-[#191F28]">
        {label}
      </p>
      <ArrowButton
        icon={arrowRight}
        label="다음 기간"
        onClick={onNext}
        visible={showNext}
      />
    </div>
  );
}
