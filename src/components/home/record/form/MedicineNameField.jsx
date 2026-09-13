export default function MedicineNameField({ value, actionLabel, onClick }) {
  return (
    <div className="flex w-full items-center gap-[8px] rounded-[8px] border border-[#E5E8EB] bg-[#F9FAFB] p-[12px]">
      <p className="flex-1 text-[14px] font-bold leading-[21px] text-[#191F28]">
        {value}
      </p>
      <button
        type="button"
        onClick={onClick}
        className="text-[12px] leading-[18px] text-[#8B95A1]"
      >
        {actionLabel}
      </button>
    </div>
  );
}
