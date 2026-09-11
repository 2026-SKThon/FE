export default function ToggleSwitch({ checked, onChange }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`relative h-[26px] w-[42px] rounded-full ${
        checked ? "bg-[#FF4F37]" : "bg-[#D1D6DB]"
      }`}
    >
      <span
        className={`absolute top-[3px] h-[20px] w-[20px] rounded-full bg-white transition-all ${
          checked ? "left-[20px]" : "left-[3px]"
        }`}
      />
    </button>
  );
}
