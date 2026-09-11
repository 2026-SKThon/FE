const CHIP_SIZE = {
  sm: {
    base: "px-[12px] py-[4px] text-[13px] font-semibold",
    idle: "text-[#B0B8C1]",
  },
  md: {
    base: "px-[12px] py-[8px] text-[12px] font-bold",
    idle: "text-[#6B7684]",
  },
  plain: {
    base: "p-[8px] text-[12px] font-normal",
    idle: "text-[#6B7684]",
  },
};

export default function ChoiceChip({
  label,
  selected = false,
  size = "sm",
  onClick,
  className = "",
}) {
  const Element = onClick ? "button" : "div";
  const { base, idle } = CHIP_SIZE[size];
  const state = selected ? "bg-[#FFEBE9] text-[#FF4F37]" : `bg-[#F3F4F6] ${idle}`;

  return (
    <Element
      type={onClick ? "button" : undefined}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-[8px] leading-[1.6] ${base} ${state} ${onClick ? "cursor-pointer" : ""} ${className}`}
    >
      {label}
    </Element>
  );
}
