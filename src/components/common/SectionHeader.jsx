import TextButton from "./TextButton";

export default function SectionHeader({ title, actionLabel, onAction }) {
  return (
    <div className="flex w-full items-center gap-[8px]">
      <p className="flex-1 text-[18px] font-bold leading-[1.6] text-[#191F28]">
        {title}
      </p>
      {actionLabel && <TextButton label={actionLabel} onClick={onAction} />}
    </div>
  );
}
