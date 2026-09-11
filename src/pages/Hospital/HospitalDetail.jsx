import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/header";
import { HOSPITALS } from "../../constants/hospitals";
import { childStatus } from "../../constants/childStatus";
import { callHospital, openDirections } from "../../utils/hospital";

function Tag({ active, children }) {
  return (
    <span
      className={`h-[34px] flex items-center rounded-lg px-2 text-xs font-bold leading-4 ${
        active ? "bg-[#FFEBE9] text-[#FF4F37]" : "bg-[#F3F4F6] text-[#6B7684]"
      }`}
    >
      {children}
    </span>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex items-center justify-between">
      <p className="text-[#6B7684] text-sm font-medium">{label}</p>
      <p className="text-[#191F28] text-sm font-semibold">{value}</p>
    </div>
  );
}

export default function HospitalDetail() {
  const { hospitalId } = useParams();
  const hospital =
    HOSPITALS.find((item) => String(item.id) === hospitalId) ?? HOSPITALS[0];
  const mapElementRef = useRef(null);

  useEffect(() => {
    if (!window.naver?.maps || !mapElementRef.current) return;

    const center = new window.naver.maps.LatLng(
      hospital.latitude,
      hospital.longitude,
    );
    const map = new window.naver.maps.Map(mapElementRef.current, {
      center,
      zoom: 16,
    });
    new window.naver.maps.Marker({ position: center, map });
  }, [hospital]);

  return (
    <div className="w-full bg-[#FBFBFB] pb-[117px]">
      <Header title="병원 상세" />

      <div className="flex flex-col gap-4 px-5 pt-2">
        {/* 지도 353x195, 병원 위치 중심 */}
        <div ref={mapElementRef} className="h-[195px] w-full" />

        {/* 병원 기본 정보 - 패딩 20px, 항목 gap 12px */}
        <div className="flex w-full flex-col gap-3 rounded-3xl bg-white p-5">
          <p className="text-[#191F28] text-lg font-semibold leading-7">
            {hospital.name}
          </p>
          <div className="flex items-center gap-2">
            <Tag active>운영 중</Tag>
            <Tag>{hospital.second}</Tag>
            <Tag>{hospital.first}</Tag>
          </div>
          {/* 더미 데이터 - 아이 정보는 childStatus.js에서 가져옴 */}
          <p className="text-[#6B7684] text-sm font-medium leading-6">
            {childStatus.childName}({childStatus.ageLabel})의 진료 가능
            여부를
            <br />
            방문 전 전화로 확인해 주세요.
          </p>
        </div>

        {/* 위치 및 연락처 - 패딩 20px, 항목 gap 16px */}
        <div className="flex w-full flex-col gap-4 rounded-3xl bg-white p-5">
          <InfoRow label="주소" value={hospital.address} />
          <InfoRow label="전화" value={hospital.phone} />
          <InfoRow
            label="거리"
            value={`${hospital.distance} · ${hospital.travelTime}`}
          />
        </div>

        {/* 안내 문구 - 패딩 12px */}
        <div className="flex w-full flex-col rounded-xl bg-[#F3F4F6] p-3">
          <p className="text-[#8B95A1] text-xs font-medium leading-5">
            야간 소아 진료와 응급실 접수 가능 여부는
            <br />
            방문 전 전화로 확인해 주세요.
          </p>
        </div>
      </div>

      {/* 안내 문구 블록에서 33px 떨어진 버튼 행 */}
      <div className="mt-[33px] flex gap-3 px-5">
        <button
          type="button"
          onClick={() => callHospital(hospital.phone)}
          className="flex-1 cursor-pointer rounded-lg bg-[#FF4F37] py-3.5 text-base font-bold text-white"
        >
          전화걸기
        </button>
        <button
          type="button"
          onClick={() => openDirections(hospital)}
          className="flex-1 cursor-pointer rounded-lg bg-[#FFEBE9] py-3.5 text-base font-bold text-[#FF4F37]"
        >
          길찾기
        </button>
      </div>
    </div>
  );
}
