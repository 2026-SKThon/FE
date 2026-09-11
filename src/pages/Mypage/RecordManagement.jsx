import MypageHeader from "../../components/mypage/MypageHeader";
import { useState } from "react";
import ToggleSwitch from "../../components/mypage/ToggleSwitch";
import Button from "../../components/common/Button";
import { useNavigate } from "react-router-dom";
import useChildStore from "../../store/useChildStore";

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

export default function RecordManagement() {
  const [term, setTerm] = useState("2026.09.04 ㅡ 2026.09.10");
  const [state, setState] = useState("최근 7일");
  const [option, setOption] = useState("PDF 요약");
  const [temperature, setTemperature] = useState(true);
  const [record, setRecord] = useState(true);
  const [result, setResult] = useState(true);

  const child = useChildStore((state) => state.child);

  const navigate = useNavigate();

  return (
    <div className="w-full h-full bg-[#F9FAFB]">
      <MypageHeader title="기록 관리" onClick={() => navigate(-1)} />
      <main className="w-[393px] h-[728px] px-5 pt-2 pb-5 flex flex-col justify-start items-start gap-2.5">
        <p className="text-[#191F28] text-xl font-bold leading-8">
          필요한 기록을 모아 저장해요
        </p>
        {/* 내보낼 기록 선택 */}
        <section className="w-[353px] h-[196px] p-4 bg-white rounded-3xl flex flex-col justify-start items-start gap-2.5">
          {/* 아이 */}
          <div className="w-[321px] h-[39px] py-2 flex justify-start items-center gap-2">
            <div className="w-[281px] h-[21px] text-[#191F28] text-sm font-bold leading-5">
              아이
            </div>
            <p className="text-[#8B95A1] text-xs font-normal leading-4">
              {child.name} ›
            </p>
          </div>
          {/* 기간 */}
          <div className="w-[321px] h-[71px] flex flex-col justify-start items-start gap-1.5">
            <p className="text-[#4E5968] text-xs font-bold leading-5">기간</p>
            <input
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              className="w-[321px] h-[45px] p-3 bg-[#F3F4F6] rounded-lg"
            />
          </div>
          {/* 기간 선택 */}
          <div className="w-[321px] h-[34px] flex gap-2">
            <OptionButton
              title="최근 7일"
              selected={state === "최근 7일"}
              onClick={() => setState("최근 7일")}
            />

            <OptionButton
              title="최근 30일"
              selected={state === "최근 30일"}
              onClick={() => setState("최근 30일")}
            />

            <OptionButton
              title="직접 선택"
              selected={state === "직접 선택"}
              onClick={() => setState("직접 선택")}
            />
          </div>
        </section>
        {/* 포함할 내용 */}
        <section className="w-[353px] h-[178px] p-4 bg-white rounded-3xl flex flex-col justify-start items-start gap-2">
          <div className="w-[321px] h-[42px] py-2 flex justify-start items-center gap-2">
            <div className="w-[271px] h-[21px] text-[#191F28] text-sm font-bold leading-5">
              체온 기록
            </div>
            <ToggleSwitch checked={temperature} onChange={setTemperature} />
          </div>
          <div className="w-[321px] h-[42px] py-2 flex justify-start items-center gap-2">
            <div className="w-[271px] h-[21px] text-[#191F28] text-sm font-bold leading-5">
              복약·증상 기록
            </div>
            <ToggleSwitch checked={record} onChange={setRecord} />
          </div>
          <div className="w-[321px] h-[42px] py-2 flex justify-start items-center gap-2">
            <div className="w-[271px] h-[21px] text-[#191F28] text-sm font-bold leading-5">
              당시 안내 결과
            </div>
            <ToggleSwitch checked={result} onChange={setResult} />
          </div>
        </section>
        {/* 파일 형식 */}
        <section className="w-[353px] h-[125px] p-4 bg-white rounded-3xl flex flex-col justify-start items-start gap-2.5">
          <p className="text-[#191F28] text-sm font-bold leading-5">
            파일 형식
          </p>
          {/* 옵션 선택 */}
          <div className="w-[321px] h-[34px] flex justify-start items-center gap-2">
            <OptionButton
              title="PDF 요약"
              selected={option === "PDF 요약"}
              onClick={() => setOption("PDF 요약")}
            />
            <OptionButton
              title="CSV 원본"
              selected={option === "CSV 원본"}
              onClick={() => setOption("CSV 원본")}
            />
          </div>
          <p className="text-[#6B7684] text-xs font-normal leading-4">
            병원에 보여줄 때는 PDF 요약이 편리해요.
          </p>
        </section>
        <Button label="선택한 기록 내보내기" />
        <div className="w-[353px] h-[60px] py-2 flex justify-start items-center gap-2">
          <div className="w-[341px] h-[42px] flex flex-col justify-start items-start gap-[3px]">
            <p className="text-[#191F28] text-sm font-bold leading-5">
              잘못 입력한 기록 수정
            </p>
            <p className="text-[#6B7684] text-xs font-normal leading-4">
              기록 상세에서 원래 입력을 확인해요
            </p>
          </div>
          <div className="text-[#8B95A1] text-xs font-normal leading-4">›</div>
        </div>
      </main>
    </div>
  );
}
