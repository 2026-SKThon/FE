import SummaryItem from "./SummaryItem";

export default function TemperatureSummary({ summary }) {
  const items = [
    { label: "현재", value: summary.current, highlight: true },
    { label: "최고", value: summary.highest, highlight: false },
    { label: "최저", value: summary.lowest, highlight: false },
  ];

  return (
    <div className="flex items-center gap-[8px]">
      {items.map((item) => (
        <SummaryItem
          key={item.label}
          label={item.label}
          value={`${item.value}°C`}
          highlight={item.highlight}
        />
      ))}
    </div>
  );
}
