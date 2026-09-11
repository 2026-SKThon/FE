const TAB_STYLE = {
  selected: "bg-[#F9FAFB] font-semibold text-[#191F28]",
  unselected: "font-medium text-[#8B95A1]",
};

export default function PeriodTabs({ options, value, onChange }) {
  return (
    <div className="flex h-[46px] items-center gap-[8px] rounded-[14px] bg-[#E5E8EB] p-[4px]">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          className={`flex-1 cursor-pointer rounded-[10px] p-[8px] text-center text-[14px] leading-[1.6] ${
            option.value === value ? TAB_STYLE.selected : TAB_STYLE.unselected
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
