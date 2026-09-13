import Button from "../../../common/Button";
import ChoiceChip from "../../../common/ChoiceChip";

export default function MedicationLinkSection({
  title,
  badgeLabel,
  buttonLabel,
  onClick,
}) {
  return (
    <div className="flex w-full flex-col gap-[4px]">
      <div className="flex w-full items-center gap-[8px]">
        <p className="flex-1 text-[14px] font-bold leading-[21px] text-[#191F28]">
          {title}
        </p>
        {badgeLabel && <ChoiceChip label={badgeLabel} size="plain" />}
      </div>
      <Button label={buttonLabel} variant="soft" onClick={onClick} />
    </div>
  );
}
