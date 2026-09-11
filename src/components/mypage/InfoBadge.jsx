export default function InfoBadge({
  text,
  width = "w-auto",
  bgColor = "bg-[#FFEBE9]",
  textColor = "text-[#FF4F37]",
}) {
  return (
    <div className={`${width} h-[34px] p-2 ${bgColor} rounded-lg`}>
      <p className={`${textColor} text-xs font-bold leading-4`}>
        {text}
      </p>
    </div>
  );
}