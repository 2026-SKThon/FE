import Header from "../../components/header/header";
import dropDown from "../../assets/icons/drop_down.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HospitalCard from "../../components/hospital/HospitalCard";
import { HOSPITALS } from "../../constants/hospitals";

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

export default function HospitalList() {
  const navigate = useNavigate();
  const [option, setOption] = useState("지금 운영 중");

  return (
    <div className="w-full h-full bg-[#FBFBFB]">
      <Header title="병원 목록" />
      <main className="w-[393px] h-[663px] px-5 pt-2 pb-5 flex flex-col justify-start items-start gap-4">
        <div className="w-[353px] h-[31px] flex justify-between items-start">
          <div className="justify-start text-[#FF4F37] text-lg font-semibold leading-7">
            주변 병원 11곳
          </div>
          <div className="w-[88px] h-[31px] flex items-center bg-[#F9FAFB] rounded-[5px] border border-[#E5E8EB] pl-[14px] gap-[7px]">
            <p className="text-[#B0B8C1] text-base font-semibold">거리순</p>
            <img src={dropDown} />
          </div>
        </div>
        {/* 검색 조건 */}
        <div className="w-[353px] h-[37px] flex justify-start items-center gap-1.5">
          <OptionButton
            title="지금 운영 중"
            selected={option === "지금 운영 중"}
            onClick={() => setOption("지금 운영 중")}
          />
          <OptionButton
            title="소아 진료"
            selected={option === "소아 진료"}
            onClick={() => setOption("소아 진료")}
          />
          <OptionButton
            title="3km 이내"
            selected={option === "3km 이내"}
            onClick={() => setOption("3km 이내")}
          />
        </div>
        {HOSPITALS.map((hospital) => (
          <HospitalCard
            key={hospital.id}
            name={hospital.name}
            distance={hospital.distance}
            first={hospital.first}
            second={hospital.second}
            onClick={() => navigate(`/hospital/detail/${hospital.id}`)}
          />
        ))}
        <div className="w-[353px] h-[45px] p-3 bg-[#F3F4F6] rounded-xl flex flex-col justify-start items-start">
          <p className="text-[#8B95A1] text-xs font-medium leading-5">
            진료 시간과 접수 가능 여부는 전화로 확인해 주세요.
          </p>
        </div>
      </main>
    </div>
  );
}
