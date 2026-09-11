export default function SummaryItem({ label, value, highlight = false }) {
  return (
    <div className="flex flex-1 flex-col gap-[4px]">
      <p className="text-[12px] font-medium leading-[17px] text-[#8B95A1]">
        {label}
      </p>
      <p
        className={`text-[20px] font-bold leading-[29px] ${
          highlight ? "text-[#FF4F37]" : "text-[#4E5968]"
        }`}
      >
        {value}
      </p>
    </div>
  );
}
