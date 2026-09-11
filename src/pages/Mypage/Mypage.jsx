import { useNavigate } from "react-router-dom";
import useChildStore from "../../store/useChildStore";
import { useEffect } from "react";
import { getChildProfile } from "../../api/getChildProfile";

export default function Mypage() {
  const navigate = useNavigate();

  const child = useChildStore((state) => state.child);
  const setChild = useChildStore((state) => state.setChild);

  useEffect(() => {
    const fetchChildProfile = async () => {
      try {
        const data = await getChildProfile(1);
        console.log("받아온 data:", data);
        setChild(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchChildProfile();
  }, []);

  if (!child) {
    return (
      <div className="bg-[#F9FAFB] w-full h-full flex items-center justify-center">
        <p className="text-[#8B95A1] text-sm">아이 정보를 불러오는 중...</p>
      </div>
    );
  }

  return (
    <div className="bg-[#F9FAFB] w-full h-full">
      <header className="w-full h-[51px] px-5 py-3">
        <p className="text-[#191F28] text-lg font-bold leading-7">마이</p>
      </header>

      <main className="flex flex-col px-5 pt-2 pb-[117px] gap-3.5">
        <p className="text-[#191F28] text-2xl font-bold leading-9">
          {child.name}의 돌봄 설정
        </p>

        {/* 현재 아이 */}
        <section className="w-[353px] h-[166px] bg-white rounded-3xl p-4 flex flex-col gap-2.5">
          {/* 프로필 */}
          <div className="flex gap-2">
            <div className="w-[47px] h-[60px] rounded-2xl p-3 bg-[#FFEBE9]">
              <p className="text-[#FF4F37] text-2xl font-bold leading-9">
                {child.name?.[0]}
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-[#191F28] text-xl font-bold leading-8">
                {child.name}
              </p>

              <p className="text-[#6B7684] text-xs font-normal leading-5">
                생후 {child.ageInMonths}개월 · {child.weight}kg
              </p>
            </div>
          </div>

          <div
            className="w-[317px] h-[60px] flex py-2 gap-2 items-center cursor-pointer"
            onClick={() => navigate("/mypage/profile")}
          >
            <div className="w-[305px] h-[42px] gap-[3px] flex flex-col">
              <p className="text-[#191F28] text-sm font-bold leading-5">
                아이 프로필 관리
              </p>

              <p className="text-[#6B7684] text-xs font-normal leading-4">
                알레르기·체중 정보를 확인해요
              </p>
            </div>

            <div className="justify-start text-[#8B95A1] text-xs font-normal leading-4">
              ›
            </div>
          </div>
        </section>

        {/* 돌봄 관리 */}
        <section className="w-[353px] h-[218px] p-4 bg-white rounded-3xl flex flex-col gap-2.5">
          {/* 기기 연결 관리 */}
          <div className="w-[321px] h-[39px] flex py-2 gap-2 justify-between">
            <div className="w-[270px] h-[21px]">
              <p className="text-[#191F28] text-sm font-bold leading-5">
                기기 연결 관리
              </p>
            </div>

            <div
              className="text-[#8B95A1] text-xs font-normal leading-4 cursor-pointer"
              onClick={() => navigate("/mypage/device")}
            >
              연결됨 ›
            </div>
          </div>

          {/* 함께 돌보는 보호자 */}
          <div className="w-[321px] h-[39px] flex py-2 gap-2 justify-between">
            <div className="w-[270px] h-[21px]">
              <p className="text-[#191F28] text-sm font-bold leading-5">
                함께 돌보는 보호자
              </p>
            </div>

            <div
              className="text-[#8B95A1] text-xs font-normal leading-4 cursor-pointer"
              onClick={() => navigate("/mypage/guardian")}
            >
              2명 ›
            </div>
          </div>

          {/* 알림 설정 */}
          <div className="w-[321px] h-[39px] flex py-2 gap-2 justify-between">
            <div className="w-[270px] h-[21px]">
              <p className="text-[#191F28] text-sm font-bold leading-5">
                알림 설정
              </p>
            </div>

            <div
              className="text-[#8B95A1] text-xs font-normal leading-4 cursor-pointer"
              onClick={() => navigate("/mypage/notification")}
            >
              ›
            </div>
          </div>

          {/* 기록 관리 */}
          <div className="w-[321px] h-[39px] flex py-2 gap-2 justify-between">
            <div className="w-[270px] h-[21px]">
              <p className="text-[#191F28] text-sm font-bold leading-5">
                기록 관리
              </p>
            </div>

            <div
              className="text-[#8B95A1] text-xs font-normal leading-4 cursor-pointer"
              onClick={() => navigate("/mypage/record-management")}
            >
              ›
            </div>
          </div>
        </section>

        {/* 서비스 */}
        <section className="w-[353px] h-[169px] bg-white rounded-3xl p-4 flex flex-col gap-[10px]">
          <div className="w-[321px] h-[39px] flex py-2 gap-2 justify-between">
            <div className="w-[270px] h-[21px]">
              <p className="text-[#191F28] text-sm font-bold leading-5">
                내 계정
              </p>
            </div>
            <div className="text-[#8B95A1] text-xs font-normal leading-4">
              ›
            </div>
          </div>

          <div className="w-[321px] h-[39px] flex py-2 gap-2 justify-between">
            <div className="w-[270px] h-[21px]">
              <p className="text-[#191F28] text-sm font-bold leading-5">
                도움말·문의
              </p>
            </div>
            <div className="text-[#8B95A1] text-xs font-normal leading-4">
              ›
            </div>
          </div>

          <div className="w-[321px] h-[39px] flex py-2 gap-2 justify-between">
            <div className="w-[270px] h-[21px]">
              <p className="text-[#191F28] text-sm font-bold leading-5">
                약관·개인정보 안내
              </p>
            </div>
            <div className="text-[#8B95A1] text-xs font-normal leading-4">
              ›
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
