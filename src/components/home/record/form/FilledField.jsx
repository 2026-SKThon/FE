import FieldLabel from "./FieldLabel";

export default function FilledField({ label, children }) {
  return (
    <div className="flex w-full flex-col gap-[8px]">
      <FieldLabel label={label} />
      <div className="flex w-full items-center justify-between rounded-[12px] bg-[#F9FAFB] p-[14px]">
        {children}
      </div>
    </div>
  );
}
