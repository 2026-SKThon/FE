import arrowLeft from "../../../assets/icons/arrow_left.svg";
import arrowRight from "../../../assets/icons/arrow_right.svg";

export default function DateNavigator({ label, onPrev, onNext }) {
  return (
    <div className="flex items-center justify-center gap-[12px]">
      <button
        type="button"
        onClick={onPrev}
        aria-label="이전 날짜"
        className="size-[20px] shrink-0 cursor-pointer"
      >
        <img src={arrowLeft} alt="" className="size-full" />
      </button>
      <p className="text-[14px] font-bold leading-[20px] text-[#191F28]">
        {label}
      </p>
      <button
        type="button"
        onClick={onNext}
        aria-label="다음 날짜"
        className="size-[20px] shrink-0 cursor-pointer"
      >
        <img src={arrowRight} alt="" className="size-full" />
      </button>
    </div>
  );
}
