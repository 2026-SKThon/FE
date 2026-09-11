import arrowRight from "../../../../assets/icons/arrow_right.svg";

export default function EmergencyBanner({ message, actionLabel, onAction }) {
  return (
    <div className="flex w-full items-center justify-between rounded-[12px] bg-[#F9FAFB] p-[12px]">
      <p className="text-[12px] font-medium leading-[20px] text-[#B0B8C1]">
        {message}
      </p>
      <button
        type="button"
        onClick={onAction}
        className="flex cursor-pointer items-center"
      >
        <span className="text-[13px] font-semibold leading-[1.6] text-[#FF4F37]">
          {actionLabel}
        </span>
        <span className="size-[16px] shrink-0">
          <img src={arrowRight} alt="" className="size-full" />
        </span>
      </button>
    </div>
  );
}
