const VARIANT = {
  filled: "bg-[#FF4F37] text-white",
  soft: "bg-[#FFEBE9] text-[#FF4F37]",
};

export default function Button({
  label,
  variant = "filled",
  onClick,
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full cursor-pointer rounded-[8px] px-[16px] py-[12px] text-center text-[18px] font-semibold leading-[1.6] ${VARIANT[variant]}`}
    >
      {label}
    </button>
  );
}
