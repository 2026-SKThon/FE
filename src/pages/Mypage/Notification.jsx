import MypageHeader from "../../components/mypage/MypageHeader";
import InfoBadge from "../../components/mypage/InfoBadge";
import ToggleSwitch from "../../components/mypage/ToggleSwitch";
import InfoNotice from "../../components/mypage/InfoNotice";
import Button from "../../components/common/Button";
import useChildStore from "../../store/useChildStore";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Notification() {
  const [temperature, setTemperature] = useState(true);
  const [connect, setConnect] = useState(true);
  const [share, setShare] = useState(false);

  const navigate = useNavigate();
  const child = useChildStore((state) => state.child);

  return (
    <div className="w-full h-full bg-[#F9FAFB]">
      <MypageHeader title="알림 설정" onClick={() => navigate(-1)} />
      <main className="w-[393px] h-[728px] px-5 pt-2 pb-5 flex flex-col justify-start items-start gap-2.5">
        <p className="text-[#191F28] text-xl font-bold leading-8">
          받을 알림을 설정해요
        </p>
        {/* 휴대폰 알림 */}
        <section className="w-[353px] h-[117px] p-4 bg-white rounded-3xl flex flex-col justify-start itemst-start gap-2.5">
          <div className="w-[321px] h-[39px] py-2 flex justify-start items-start gap-2">
            <div className="w-[270px] h-[21px] text-[#191F28] text-sm font-bold leading-5">
              휴대폰 알림 권한
            </div>
            <p className="text-[#8B95A1] text-xs font-normal leading-4">
              허용됨 ›
            </p>
          </div>
          <p className="text-[#6B7684] text-xs font-normal leading-4">
            휴대폰 설정에서 알림을 차단하면
            <br />
            앱에서 켜 두어도 알림을 받을 수 없어요.
          </p>
        </section>
        {/* 알림 종류 */}
        <section className="w-[353px] h-[270px] p-4 bg-white rounded-3xl flex flex-col justify-start items-start gap-2.5">
          <InfoBadge text={`${child.name}`} />
          {/* 체온 변화 알림 */}
          <div className="w-[321px] h-[58px] py-2 flex justify-start items-center gap-2">
            <div className="w-[271px] h-[42px] flex flex-col justify-start items-start gap-[3px]">
              <p className="text-[#191F28] text-sm font-bold leading-5">
                체온 변화 알림
              </p>
              <p className="text-[#6B7684] text-xs font-normal leading-4">
                측정값에 변화가 감지됐을 때
              </p>
            </div>
            <ToggleSwitch checked={temperature} onChange={setTemperature} />
          </div>
          {/* 기기 연결 알림 */}
          <div className="w-[321px] h-[58px] py-2 flex justify-start items-center gap-2">
            <div className="w-[271px] h-[42px] flex flex-col justify-start items-start gap-[3px]">
              <p className="text-[#191F28] text-sm font-bold leading-5">
                기기 연결 알림
              </p>
              <p className="text-[#6B7684] text-xs font-normal leading-4">
                연결이 끊기거나 다시 연결됐을 때
              </p>
            </div>
            <ToggleSwitch checked={connect} onChange={setConnect} />
          </div>
          {/* 공유 기록 알림 */}
          <div className="w-[321px] h-[58px] py-2 flex justify-start items-center gap-2">
            <div className="w-[271px] h-[42px] flex flex-col justify-start items-start gap-[3px]">
              <p className="text-[#191F28] text-sm font-bold leading-5">
                공유 기록 알림
              </p>
              <p className="text-[#6B7684] text-xs font-normal leading-4">
                다른 보호자가 상태·복약을 기록했을 때
              </p>
            </div>
            <ToggleSwitch checked={share} onChange={setShare} />
          </div>
        </section>
        {/* 알림 점검 */}
        <section className="w-[353px] h-[99px] p-4 bg-white rounded-3xl flex flex-col justify-start items-start gap-2.5">
          <div className="w-[321px] h-[39px] py-2 flex justify-start items-center gap-2">
            <div className="w-[309px] h-[21px] text-[#191F28] text-sm font-bold leading-5">
              테스트 알림 보내기
            </div>
            <p className="text-[#8B95A1] text-xs font-normal leading-4">›</p>
          </div>
          <p className="text-[#6B7684] text-xs font-normal leading-4">
            실제로 알림을 받을 수 있는지 확인해요.
          </p>
        </section>
        <InfoNotice>
          이 설정은 내 수신 설정에만 적용돼요.
          <br />
          다른 보호자의 알림 설정은 바뀌지 않아요.
        </InfoNotice>
        <Button label="설정 저장하기" />
      </main>
    </div>
  );
}
