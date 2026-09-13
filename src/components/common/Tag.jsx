export default function Tag({
  label,
  showDot = false,
  className = "",
  onClick,
  background = "#FFEBE9",
  color = "#FF4F37",
}) {
  const Element = onClick ? "button" : "div";

  return (
    <Element
      type={onClick ? "button" : undefined}
      onClick={onClick}
      style={{ backgroundColor: background, color }}
      className={`inline-flex items-center gap-[4px] rounded-[12px] px-[12px] py-[4px] text-[13px] font-semibold leading-[1.6] ${onClick ? "cursor-pointer" : ""} ${className}`}
    >
      {showDot && (
        <span
          className="size-[4px] shrink-0 rounded-full"
          style={{ backgroundColor: color }}
        />
      )}
      {label}
    </Element>
  );
}
