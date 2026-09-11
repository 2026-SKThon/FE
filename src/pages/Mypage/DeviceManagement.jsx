import MypageHeader from "../../components/mypage/MypageHeader";
import InfoBadge from "../../components/mypage/InfoBadge";
import Button from "../../components/common/Button";

function CheckButton() {
  return (
    <button className="w-[321px] h-[52px] p-3.5 bg-[#FFEBE9] rounded-lg text-[#FF4F37] text-base font-bold leading-6">
      연결 상태 다시 확인
    </button>
  );
}

export default function DeviceManagement() {
  return (
    <div className="w-full h-full bg-[#F9FAFB]">
      <MypageHeader title="기기 연결 관리" />
      <main className="w-[393px] h-[728px] px-5 pt-2 pb-5 flex flex-col justify-start items-start gap-2.5">
        <p className="text-[#191F28] text-xl font-bold leading-8">
          기기 연결 상태를 확인해요
        </p>
        {/* 연결된 기기 */}
        <section className="w-[353px] h-[287px] p-4 bg-white rounded-3xl flex flex-col justify-start items-start gap-2.5">
          <InfoBadge text="● 연결됨" />
          <p className="text-[#191F28] text-xl font-bold leading-8">
            온이 센서 A21
          </p>
          <p className="text-[#6B7684] text-xs font-normal leading-5">
            민호에게 연결된 측정 기기예요.
          </p>
          {/* 마지막 데이터 수신 */}
          <div className="w-[317px] h-[39px] py-2 items-center flex justify-between gap-2">
            <div className="w-[268px] h-[21px] text-[#191F28] text-sm font-bold leading-5">
              마지막 데이터 수신
            </div>
            <p className="text-[#8B95A1] text-xs font-normal leading-4">
              2분 전 ›
            </p>
          </div>
          {/* 배터리 */}
          <div className="w-[317px] h-[39px] py-2 items-center flex justify-between gap-2">
            <div className="w-[253px] h-[21px] text-[#191F28] text-sm font-bold leading-5">
              배터리
            </div>
            <p className="text-[#8B95A1] text-xs font-normal leading-4">
              정보 없음 ›
            </p>
          </div>
          {/* 최근 측정 값 */}
          <div className="w-[317px] h-[39px] py-2 items-center flex justify-between gap-2">
            <div className="w-[253px] h-[21px] text-[#191F28] text-sm font-bold leading-5">
              최근 측정 값
            </div>
            <p className="text-[#8B95A1] text-xs font-normal leading-4">
              37.7°C ›
            </p>
          </div>
        </section>
        {/* 새 측정값이 들어오지 않나요? */}
        <section className="w-[353px] h-[168px] p-4 bg-white rounded-3xl flex flex-col justify-start items-start gap-2.5">
          <div className="text-[#191F28] text-base font-bold leading-6">
            새 측정값이 들어오지 않나요?
          </div>
          <div className="text-[#6B7684] text-xs font-normal leading-5">
            센서 전원과 연결 상태를 확인한 뒤<br />
            다시 연결해 주세요.
          </div>
          <CheckButton />
        </section>
        {/* 안내 */}
        <section className="w-[353px] h-[60px] p-3 bg-[#F3F4F6] rounded-xl flex flex-col justify-start items-start mb-[20px]">
          <div className="text-[#6B7684] text-xs font-normal leading-4">
            기기를 연결 해제해도 이미 저장한 기록은 유지돼요. 새 측정값은 더
            <br />
            이상 수신하지 않아요.
          </div>
        </section>
        <Button label="다른 기기 연결" />
        <div className="w-full text-[#6B7684] text-xs font-normal leading-5 flex justify-center">
          현재 기기 연결 해제
        </div>
      </main>
    </div>
  );
}
