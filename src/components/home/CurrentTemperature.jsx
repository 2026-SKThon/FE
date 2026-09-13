import { formatTemperature } from "../../utils/fever";

export default function CurrentTemperature({
  childName,
  temperature,
  color,
  showChildLabel = true,
}) {
  return (
    <div className="flex w-[115px] flex-col items-end gap-[8px]">
      {showChildLabel && (
        <p className="w-full text-right text-[13px] font-medium text-[#B0B8C1]">
          {`${childName}는 현재`}
        </p>
      )}
      <p
        className="w-full text-right text-[28px] font-black tracking-[-0.5px]"
        style={{ color }}
      >
        {formatTemperature(temperature)}
      </p>
    </div>
  );
}
