const MEMO_VARIANT = {
  card: {
    wrapper: "h-[146px] gap-[8px] rounded-[24px] bg-white p-[18px]",
    title: "text-[14px] font-semibold leading-[1.6]",
    placeholder: "text-[14px] leading-[21px]",
  },
  box: {
    wrapper: "gap-[6px] rounded-[8px] bg-[#F3F4F6] p-[12px]",
    title: "text-[13px] font-bold leading-[20px]",
    placeholder: "text-[12px] leading-[18px]",
  },
};

export default function MemoBox({ title, placeholder, variant = "box" }) {
  const style = MEMO_VARIANT[variant];

  return (
    <div className={`flex w-full flex-col overflow-hidden ${style.wrapper}`}>
      <p className={`w-full text-[#191F28] ${style.title}`}>{title}</p>
      <p className={`w-full text-[#8B95A1] ${style.placeholder}`}>
        {placeholder}
      </p>
    </div>
  );
}
