const VARIANT = {
  filled: "bg-[#FF4F37] text-white",
  soft: "bg-[#FFEBE9] text-[#FF4F37]",
};

const SIZE = {
  lg: "px-[16px] py-[12px] text-[18px] font-semibold",
  md: "p-[14px] text-[16px] font-bold",
};

export default function Button({
  label,
  variant = "filled",
  size = "lg",
  onClick,
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full cursor-pointer rounded-[8px] text-center leading-[1.6] ${SIZE[size]} ${VARIANT[variant]}`}
    >
      {label}
    </button>
  );
}
