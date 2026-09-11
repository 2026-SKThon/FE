export default function FeverStatusPill({ message }) {
  return (
    <div className="w-full rounded-[12px] bg-linear-to-r from-[#FFEBE9] via-white to-[#FFEBE9] px-[12px] py-[8px]">
      <p className="text-center text-[13px] font-medium leading-[1.6] text-[#FF4F37]">
        {message}
      </p>
    </div>
  );
}
