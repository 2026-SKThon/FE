export default function MypageHeader({ title, onClick }) {
  return (
    <div className="w-[393px] h-[51px] px-5 py-3 flex items-center gap-3">
      <div
        className="self-stretch justify-start text-[#191F28] text-lg font-bold leading-7 cursor-pointer"
        onClick={onClick}
      >
        ‹
      </div>
      <p className="text-[#191F28] text-lg font-bold leading-7">{title}</p>
    </div>
  );
}
