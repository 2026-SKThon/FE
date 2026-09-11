import arrowRight from "../../assets/icons/arrow_right.svg";

const SIZE = {
  sm: "text-[12px] font-medium leading-[1.6]",
  md: "text-[13px] font-semibold leading-[19px]",
};

export default function TextButton({ label, onClick, size = "sm" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex cursor-pointer items-center py-[8px] text-[#B0B8C1] ${SIZE[size]}`}
    >
      {label}
      <span className="size-[16px] shrink-0 overflow-hidden">
        <img src={arrowRight} alt="" className="size-full" />
      </span>
    </button>
  );
}
