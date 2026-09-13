import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/header/header";
import Card from "../../components/common/Card";
import Tag from "../../components/common/Tag";
import RecordList from "../../components/home/record/RecordList";
import { getTodayRecords } from "../../api/records";
import { CHILD_ID } from "../../constants/api";
import { useRecordStore } from "../../store/useRecordStore";
import { mergeRecords } from "../../utils/record";

const PAGE_SIZE = 20;

export default function RecordsAll() {
  const navigate = useNavigate();
  const localRecords = useRecordStore((state) => state.records);

  const [serverRecords, setServerRecords] = useState([]);
  const [cursor, setCursor] = useState(null);
  const [hasNext, setHasNext] = useState(true);
  const loadingRef = useRef(false);
  const sentinelRef = useRef(null);

  const loadMore = useCallback(async () => {
    if (loadingRef.current || !hasNext) return;
    loadingRef.current = true;

    try {
      const page = await getTodayRecords(CHILD_ID, {
        size: PAGE_SIZE,
        cursorId: cursor?.cursorId,
        cursor: cursor?.cursor,
      });

      setServerRecords((prev) => [...prev, ...(page?.dailyRecords ?? [])]);
      setHasNext(Boolean(page?.hasNext));
      setCursor({
        cursorId: page?.nextCursorId,
        cursor: page?.nextCursorCreatedAt,
      });
    } catch {
      setHasNext(false);
    } finally {
      loadingRef.current = false;
    }
  }, [cursor, hasNext]);

  useEffect(() => {
    const target = sentinelRef.current;
    if (!target || !hasNext) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) loadMore();
    });

    observer.observe(target);
    return () => observer.disconnect();
  }, [loadMore, hasNext]);

  // 서버는 체온만 갖고 있어 로컬 복약·상태 기록과 합친다
  const allRecords = mergeRecords(serverRecords, localRecords);

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
          <RecordList records={allRecords} />
        </Card>
        <div ref={sentinelRef} className="h-[1px]" />
      </div>
    </div>
  );
}
