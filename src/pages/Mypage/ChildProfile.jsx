import MypageHeader from "../../components/mypage/MypageHeader";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import InfoBadge from "../../components/mypage/InfoBadge";
import Button from "../../components/common/Button";
import useChildStore from "../../store/useChildStore";
import { getChildProfile } from "../../api/getChildProfile";
import { updateChildProfile } from "../../api/updateChildProfile";

function OptionButton({ title, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`h-[34px] w-auto rounded-lg p-2 text-xs font-bold leading-4 cursor-pointer ${
        selected
          ? "bg-[#FFEBE9] text-[#FF4F37]"
          : "bg-[#F3F4F6] text-[#6B7684]"
      }`}
    >
      {title}
    </button>
  );
}

export default function ChildProfile() {
  const navigate = useNavigate();

  const child = useChildStore((state) => state.child);
  const setChild = useChildStore((state) => state.setChild);

  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [weight, setWeight] = useState("");
  const [allergy, setAllergy] = useState("미입력");

  useEffect(() => {
    const fetchChildProfile = async () => {
      try {
        const data = await getChildProfile(1);
        setChild(data);
      } catch (error) {
        console.error(
          "아이 프로필 조회 실패:",
          error.response?.data ?? error,
        );
      }
    };

    if (!child) {
      fetchChildProfile();
    }
  }, [child, setChild]);

  useEffect(() => {
    if (!child) return;

    setName(child.name ?? "");
    setBirthDate(child.birthDate ?? "");
    setWeight(child.weight ?? "");

    setAllergy(
      child.allergyStatus === "NONE"
        ? "없음"
        : child.allergyStatus === "EXISTS"
          ? "있음"
          : "미입력",
    );
  }, [child]);

  const handleSave = async () => {
    if (!child) return;

    const payload = {
      name,
      birthDate,
      weight: Number(weight),
      weightRecordedAt: child.weightRecordedAt,
      allergyStatus:
        allergy === "없음"
          ? "NONE"
          : allergy === "있음"
            ? "EXISTS"
            : "UNKNOWN",
      allergyDetail: child.allergyDetail ?? "",
      regularMedication: child.regularMedication ?? "",
    };

    try {
      console.log("아이 프로필 수정 요청:", payload);

      const updatedChild = await updateChildProfile(
        child.childId,
        payload,
      );

      setChild(updatedChild);
      navigate(-1);
    } catch (error) {
      console.error(
        "아이 프로필 수정 실패:",
        error.response?.data ?? error,
      );
    }
  };

  if (!child) {
    return (
      <div className="w-full h-full bg-[#F9FAFB] flex items-center justify-center">
        <p className="text-[#8B95A1] text-sm">
          아이 정보를 불러오는 중...
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[#F9FAFB]">
      <MypageHeader
        title="아이 프로필"
        onClick={() => navigate(-1)}
      />

      <main className="w-[393px] h-[728px] px-5 pt-2 pb-5 gap-3.5 flex flex-col justify-start items-start">
        <InfoBadge text={`${child.name}의 기본 정보`} />

        {/* 기본 정보 */}
        <section className="w-[353px] h-[313px] p-4 bg-white rounded-3xl gap-[10px] flex flex-col">
          {/* 이름 */}
          <div className="w-[321px] h-[71px] flex flex-col gap-1.5 justify-start items-start">
            <p className="text-[#4E5968] text-xs font-bold leading-5">
              이름
            </p>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-[321px] h-[45px] p-3 bg-[#F3F4F6] rounded-lg"
            />
          </div>

          {/* 생년월일 */}
          <div className="w-[321px] h-[95px] flex flex-col gap-1.5 justify-start items-start">
            <p className="text-[#4E5968] text-xs font-bold leading-5">
              생년월일
            </p>

            <input
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="w-[321px] h-[45px] p-3 bg-[#F3F4F6] rounded-lg"
            />

            <p className="text-[#8B95A1] text-xs font-normal leading-4">
              생년월일로 월령을 계산해요.
            </p>
          </div>

          {/* 최근 체중 */}
          <div className="w-[321px] h-[95px] flex flex-col gap-1.5 justify-start items-start">
            <p className="text-[#4E5968] text-xs font-bold leading-5">
              최근 체중
            </p>

            <input
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-[321px] h-[45px] p-3 bg-[#F3F4F6] rounded-lg"
            />

            <p className="text-[#8B95A1] text-xs font-normal leading-4">
              기록일 · {child.weightRecordedAt}
            </p>
          </div>
        </section>

        {/* 추가 건강 정보 */}
        <section className="w-[353px] h-[174px] p-4 bg-white rounded-3xl flex flex-col justify-start items-start gap-2.5 mb-[70px]">
          <p className="text-[#191F28] text-sm font-bold leading-5">
            알레르기
          </p>

          {/* 알레르기 상태 */}
          <div className="w-[321px] h-[34px] flex gap-2">
            <OptionButton
              title="미입력"
              selected={allergy === "미입력"}
              onClick={() => setAllergy("미입력")}
            />

            <OptionButton
              title="없음"
              selected={allergy === "없음"}
              onClick={() => setAllergy("없음")}
            />

            <OptionButton
              title="있음"
              selected={allergy === "있음"}
              onClick={() => setAllergy("있음")}
            />
          </div>

          {/* 평소 복용하는 약 */}
          <div className="w-[321px] h-[39px] flex gap-2 py-2">
            <div className="w-[270px] h-[21px] text-[#191F28] text-sm font-bold leading-5">
              평소 복용하는 약
            </div>

            <div className="justify-start text-[#8B95A1] text-xs font-normal leading-4">
              {child.regularMedication || "미입력"} ›
            </div>
          </div>

          <p className="text-[#8B95A1] text-xs font-normal leading-4">
            모르는 정보는 비워 두어도 괜찮아요.
          </p>
        </section>

        <Button label="저장하기" onClick={handleSave} />
      </main>
    </div>
  );
}