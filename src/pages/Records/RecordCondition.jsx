import { useState } from "react";
import { useNavigate } from "react-router-dom";

import decoBaby from "../../assets/images/deco_baby.svg";
import Button from "../../components/common/Button";
import Card from "../../components/common/Card";
import Header from "../../components/header/header";
import ChipGroup from "../../components/home/record/form/ChipGroup";
import CornerIllustration from "../../components/home/record/form/CornerIllustration";
import EmergencyBanner from "../../components/home/record/form/EmergencyBanner";
import MedicationLinkSection from "../../components/home/record/form/MedicationLinkSection";
import MemoBox from "../../components/home/record/form/MemoBox";
import { CONDITION_QUESTIONS } from "../../constants/recordForm";

export default function RecordCondition() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [memo, setMemo] = useState("");

  return (
    <div className="relative flex flex-1 flex-col bg-[#FBFBFB]">
      <Header title="상태 기록" />
      <CornerIllustration
        src={decoBaby}
        width={120}
        height={120}
        left={250}
        top={74}
      />
      <div className="relative flex flex-1 flex-col justify-between px-[20px] pt-[20px] pb-[117px]">
        <div className="flex flex-col gap-[11px]">
          <p className="text-[24px] font-bold leading-[36px] text-[#191F28]">
            지금 아이의 모습을
            <br />
            알려 주세요
          </p>

          <div className="flex flex-col gap-[14px]">
            <Card className="flex flex-col gap-[12px] p-[18px]">
              {CONDITION_QUESTIONS.map((item) => (
                <ChipGroup
                  key={item.key}
                  label={item.question}
                  options={item.options}
                  value={answers[item.key] ?? null}
                  onChange={(value) =>
                    setAnswers((prev) => ({ ...prev, [item.key]: value }))
                  }
                />
              ))}
            </Card>

            <MedicationLinkSection
              title="복약 기록"
              badgeLabel="선택 사항"
              buttonLabel="복약 기록 추가하러 가기"
              onClick={() => navigate("/records/new/medication")}
            />

            <EmergencyBanner
              message="깨우기 어렵거나 숨쉬기 힘들어요"
              actionLabel="긴급 도움 요청"
            />
          </div>
        </div>

        <div className="flex flex-col gap-[8px]">
          <MemoBox
            title="추가 메모"
            placeholder="평소와 다른 모습이 있다면 적어 주세요."
            value={memo}
            onChange={setMemo}
          />
          <Button label="기록 저장하기" />
        </div>
      </div>
    </div>
  );
}
