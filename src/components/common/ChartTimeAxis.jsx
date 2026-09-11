export default function ChartTimeAxis({ labels }) {
  return (
    <div className="flex w-full items-center gap-[8px]">
      {labels.map((label, index) => (
        <p
          key={`${label}-${index}`}
          className="flex-1 text-[12px] font-medium leading-[17px] text-[#8B95A1]"
        >
          {label}
        </p>
      ))}
    </div>
  );
}
