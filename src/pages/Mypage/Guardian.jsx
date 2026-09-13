import MypageHeader from "../../components/mypage/MypageHeader";
import { useNavigate } from "react-router-dom";
import InfoBadge from "../../components/mypage/InfoBadge";
import InfoNotice from "../../components/mypage/InfoNotice";
import Button from "../../components/common/Button";
import useChildStore from "../../store/useChildStore";

export default function Guardian() {
  const navigate = useNavigate();
  const child = useChildStore((state) => state.child);

  return (
    <div className="w-full h-full bg-[#F9FAFB]">
      <MypageHeader title="함께 돌보는 보호자" onClick={() => navigate(-1)} />
      <main className="w-[393px] h-[728px] px-5 pt-2 pb-5 flex flex-col justify-start items-start gap-3.5">
        <InfoBadge text={`${child.name}의 기록 공유`} />
        <p className="text-[#191F28] text-2xl font-bold leading-9">
          함께 돌보는 사람과
          <br />
          기록을 공유해요
        </p>
        {/* 관리 보호자 */}
        <section className="w-[353px] h-[96px] p-4 bg-white rounded-3xl flex flex-col justify-start items-start gap-2.5">
          <div className="w-[321px] h-[34px] flex justify-start items-center gap-2">
            <div className="w-[239px] h-[27px] text-[#191F28] text-lg font-bold leading-7">
              나
            </div>
            <InfoBadge text="관리 보호자" />
          </div>
          <p className="text-[#6B7684] text-xs font-normal leading-5">
            아이 정보·기기·공유 권한을 관리해요.
          </p>
        </section>
        {/* 공동 보호자 */}
        <section className="w-[353px] h-[165px] p-4 bg-white rounded-3xl flex flex-col justify-start items-start gap-2.5">
          <div className="w-[321px] h-[34px] flex gap-2">
            <div className="w-[239px] h-[27px] text-[#191F28] text-lg font-bold leading-7">
              보호자 2
            </div>
            <InfoBadge
              text="공동 보호자"
              bgColor="bg-[#F3F4F6]"
              textColor="text-[#6B7684]"
            />
          </div>
          <p className="text-[#6B7684] text-xs font-normal leading-5">
            {child.name}의 기록을 보고, 상태 · 복약 기록을
            <br />
            추가할 수 있어요.
          </p>
          {/* 공유 권한 관리 */}
          <div className="w-[321px] h-[39px] py-2 flex justify-start items-start gap-2">
            <div className="w-[309px] h-[21px] text-[#191F28] text-sm font-bold leading-5">
              공유 권한 관리
            </div>
            <div className="text-[#8B95A1] text-xs font-normal leading-4">
              ›
            </div>
          </div>
        </section>
        {/* 공유 범위 */}
        <section className="w-[353px] h-[106px] p-4 bg-white rounded-3xl flex flex-col justify-start items-start gap-2.5">
          <p className="text-[#191F28] text-base font-bold leading-6">
            {child.name}의 기록만 공유돼요
          </p>
          <p className="text-[#6B7684] text-xs font-normal leading-5">
            체온·증상·복약 기록과 진료 설명문을 공유해요. 다른 아이
            <br />의 기록은 공유되지 않아요.
          </p>
        </section>
        <InfoNotice>
          초대받은 사람이 수락해야 공유가 시작돼요.
          <br />
          공유를 해제하면 이후 접근이 중단돼요.
        </InfoNotice>
        <Button label="보호자 초대하기" />
      </main>
    </div>
  );
}
