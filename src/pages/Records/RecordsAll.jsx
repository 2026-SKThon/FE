import { useNavigate } from "react-router-dom";

import Header from "../../components/header/header";
import Card from "../../components/common/Card";
import Tag from "../../components/common/Tag";
import RecordList from "../../components/home/record/RecordList";
import { useRecordStore } from "../../store/useRecordStore";

export default function RecordsAll() {
  const navigate = useNavigate();
  const records = useRecordStore((state) => state.records);

  return (
    <div className="flex flex-1 flex-col bg-[#FBFBFB]">
      <Header title="오늘의 기록" />
      <div className="flex flex-1 flex-col gap-[12px] px-[20px] pb-[117px]">
        <div className="flex justify-end">
          <Tag
            label="+ 기록 추가하기"
            className="rounded-[8px]"
            onClick={() => navigate("/records/new")}
          />
        </div>
        <Card>
          <RecordList records={records} />
        </Card>
      </div>
    </div>
  );
}
