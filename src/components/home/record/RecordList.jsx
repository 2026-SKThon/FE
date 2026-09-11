import RecordItem from "./RecordItem";
import { formatRecord } from "../../../utils/record";

export default function RecordList({ records }) {
  return (
    <div className="flex flex-col gap-[8px]">
      {records.map((record) => {
        const { time, title, description, type } = formatRecord(record);

        return (
          <RecordItem
            key={record.id}
            time={time}
            title={title}
            description={description}
            type={type}
          />
        );
      })}
    </div>
  );
}
