export default function CurrentTemperature({ childName, temperature }) {
  return (
    <div className="flex w-[115px] flex-col items-end gap-[8px]">
      <p className="w-full text-right text-[13px] font-medium text-[#B0B8C1]">
        {`${childName}는 현재`}
      </p>
      <p className="w-full text-right text-[28px] font-black tracking-[-0.5px] text-[#FF4F37]">
        {`${temperature}°C`}
      </p>
    </div>
  );
}
