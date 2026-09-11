import Header from "../../components/header/header";
import NoticeCard from "../../components/home/record/NoticeCard";
import RecordTypeCard from "../../components/home/record/RecordTypeCard";
import { childStatus } from "../../constants/childStatus";
import { RECORD_MENUS, RECORD_NOTICE } from "../../constants/record";

export default function RecordAdd() {
  return (
    <div className="flex flex-1 flex-col bg-[#FBFBFB]">
      <Header title="기록 추가" />
      <div className="flex flex-1 flex-col gap-[14px] px-[20px] pt-[20px] pb-[117px]">
        <p className="text-[24px] font-bold leading-[36px] text-[#191F28]">
          어떤 기록을 남길까요?
        </p>
        <p className="text-[14px] leading-[21px] text-[#6B7684]">
          {`${childStatus.childName} · 필요한 기록만 골라 남겨요.`}
        </p>
        {RECORD_MENUS.map((menu) => (
          <RecordTypeCard
            key={menu.type}
            title={menu.title}
            description={menu.description}
          />
        ))}
        <NoticeCard
          title={RECORD_NOTICE.title}
          descriptions={RECORD_NOTICE.descriptions}
        />
      </div>
    </div>
  );
}
