export default function ValueRow({ label, value, onClick }) {
  return (
    <div className="flex w-full items-center gap-[8px]">
      <p className="flex-1 text-[13px] leading-[20px] text-[#6B7684]">
        {label}
      </p>
      <button
        type="button"
        onClick={onClick}
        className="flex items-center gap-[4px]"
      >
        <span className="text-[14px] font-bold leading-[21px] text-[#191F28]">
          {value}
        </span>
        <span className="text-[14px] leading-[21px] text-[#191F28]">›</span>
      </button>
    </div>
  );
}
