export default function FeverStatusPill({
  message,
  variant = "gradient",
  background,
  color,
  fontSize,
}) {
  const style =
    variant === "gradient"
      ? {
          background: `linear-gradient(to right, ${background} 0%, #FFFFFF 48.6%, ${background} 100%)`,
        }
      : { backgroundColor: background };

  return (
    <div className="w-full rounded-[12px] px-[12px] py-[8px]" style={style}>
      <p
        className="text-center font-bold leading-[1.6]"
        style={{ color, fontSize }}
      >
        {message}
      </p>
    </div>
  );
}
