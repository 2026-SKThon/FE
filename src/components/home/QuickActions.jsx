import Button from "../common/Button";
import TextButton from "../common/TextButton";

export default function QuickActions({
  recordLabel,
  hospitalLabel,
  onRecord,
  onFindHospital,
}) {
  return (
    <div className="flex flex-col gap-[8px]">
      <Button label={recordLabel} onClick={onRecord} />
      <div className="flex justify-center">
        <TextButton label={hospitalLabel} size="md" onClick={onFindHospital} />
      </div>
    </div>
  );
}
