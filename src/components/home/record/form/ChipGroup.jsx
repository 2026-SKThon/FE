import ChoiceChip from "../../../common/ChoiceChip";
import FieldLabel from "./FieldLabel";

export default function ChipGroup({ label, options, value = null, onChange }) {
  return (
    <div className="flex w-full flex-col gap-[8px]">
      <FieldLabel label={label} />
      <div className="flex flex-wrap gap-[8px]">
        {options.map((option) => (
          <ChoiceChip
            key={option.value}
            label={option.label}
            selected={option.value === value}
            onClick={onChange && (() => onChange(option.value))}
          />
        ))}
      </div>
    </div>
  );
}
