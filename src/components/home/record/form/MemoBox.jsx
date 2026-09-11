const MEMO_VARIANT = {
  card: {
    wrapper: "h-[146px] gap-[8px] rounded-[24px] bg-white p-[18px]",
    title: "text-[14px] font-semibold leading-[1.6]",
    input: "flex-1 text-[14px] leading-[21px]",
  },
  box: {
    wrapper: "gap-[6px] rounded-[8px] bg-[#F3F4F6] p-[12px]",
    title: "text-[13px] font-bold leading-[20px]",
    input: "min-h-[36px] text-[12px] leading-[18px]",
  },
};

export default function MemoBox({
  title,
  placeholder,
  value = "",
  onChange,
  variant = "box",
}) {
  const style = MEMO_VARIANT[variant];

  return (
    <div className={`flex w-full flex-col overflow-hidden ${style.wrapper}`}>
      <p className={`w-full text-[#191F28] ${style.title}`}>{title}</p>
      <textarea
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        placeholder={placeholder}
        className={`w-full resize-none border-0 bg-transparent text-[#191F28] outline-none placeholder:text-[#8B95A1] ${style.input}`}
      />
    </div>
  );
}
