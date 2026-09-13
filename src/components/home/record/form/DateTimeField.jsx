import ChoiceChip from "../../../common/ChoiceChip";
import FilledField from "./FilledField";

export default function DateTimeField({ label, value, badgeLabel }) {
  return (
    <FilledField label={label}>
      <p className="text-[16px] font-medium leading-[1.6] text-[#4E5968]">
        {value}
      </p>
      {badgeLabel && (
        <ChoiceChip label={badgeLabel} className="border border-[#D1D6DB]" />
      )}
    </FilledField>
  );
}
