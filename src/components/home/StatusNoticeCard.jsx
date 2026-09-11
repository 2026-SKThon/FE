const NOTICE_VARIANT = {
  plain: {
    wrapper: "rounded-[24px] bg-[#F9FAFB]",
    title: "text-[14px] font-semibold text-[#191F28]",
  },
  alert: {
    wrapper: "rounded-[20px] bg-[#FFEBE9]",
    title: "text-[16px] font-bold text-[#FF4F37]",
  },
};

export default function StatusNoticeCard({
  title,
  description,
  variant = "plain",
}) {
  const style = NOTICE_VARIANT[variant];

  return (
    <div
      className={`flex w-full flex-col gap-[4px] overflow-hidden p-[14px] ${style.wrapper}`}
    >
      <p className={`w-full leading-[1.6] ${style.title}`}>{title}</p>
      <p className="w-full text-[12px] leading-[1.6] text-[#6B7684]">
        {description}
      </p>
    </div>
  );
}
