export default function Tag({ label, showDot = false, className = "" }) {
  return (
    <div
      className={`inline-flex items-center gap-[4px] rounded-[12px] bg-[#FFEBE9] px-[12px] py-[4px] text-[13px] font-semibold leading-[1.6] text-[#FF4F37] ${className}`}
    >
      {showDot && <span className="size-[4px] shrink-0 rounded-full bg-[#FF4F37]" />}
      {label}
    </div>
  );
}
