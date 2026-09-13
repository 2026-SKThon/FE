import { useState } from "react";

function OptionButton({ title, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`h-[34px] w-auto rounded-lg p-2 text-xs font-bold leading-4 cursor-pointer ${
        selected ? "bg-[#FFEBE9] text-[#FF4F37]" : "bg-[#F3F4F6] text-[#6B7684]"
      }`}
    >
      {title}
    </button>
  );
}

export default function HospitalCard({ name, distance, first, second, onClick }) {
  const [option, setOption] = useState("운영 중");
  return (
    <div
      onClick={onClick}
      className="w-[353px] h-[129px] p-4 bg-white rounded-3xl flex flex-col justify-start items-start gap-2 cursor-pointer"
    >
      <div className="w-[321px] h-[26px] flex justify-start items-center gap-2">
        <div className="w-[281px] h-[26px] text-[#191F28] text-base font-semibold leading-6">
          {name}
        </div>
        <p className="text-[#D1D6DB] text-xs font-medium leading-5">
          {distance}
        </p>
      </div>
      <div className="w-[321px] h-[18px] text-[#6B7684] text-xs font-medium leading-4">
        {first} · {second}
      </div>
      <div className="w-[138px] h-[37px] flex justify-start items-start gap-2">
        <OptionButton
          title="운영 중"
          selected={option === "운영 중"}
          onClick={(e) => {
            e.stopPropagation();
            setOption("운영 중");
          }}
        />
        <OptionButton
          title="소아 진료"
          selected={option === "소아 진료"}
          onClick={(e) => {
            e.stopPropagation();
            setOption("소아 진료");
          }}
        />
      </div>
    </div>
  );
}
