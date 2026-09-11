import { useNavigate } from "react-router-dom";

import Header from "../../components/header/header";
import Card from "../../components/common/Card";
import NoticeCard from "../../components/home/record/NoticeCard";
import RecordTypeCard from "../../components/home/record/RecordTypeCard";
import { childStatus } from "../../constants/childStatus";
import { RECORD_MENUS, RECORD_NOTICE } from "../../constants/record";

export default function RecordAdd() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-1 flex-col bg-[#FBFBFB]">
      <Header title="기록 추가" />
      <div className="flex flex-1 flex-col gap-[14px] px-[20px] pt-[20px] pb-[117px]">
        <Card className="flex flex-col gap-[14px] rounded-[12px] px-[16px] py-[20px]">
          <div className="flex flex-col gap-[4px] text-center">
            <p className="text-[24px] font-bold leading-[36px] text-[#FF4F37]">
              어떤 기록을 남길까요?
            </p>
            <p className="text-[14px] font-medium leading-[21px] text-[#6B7684]">
              {`${childStatus.childName} · 필요한 기록만 골라 남겨요.`}
            </p>
          </div>
          <div className="flex flex-col gap-[8px]">
            {RECORD_MENUS.map((menu) => (
              <RecordTypeCard
                key={menu.type}
                icon={menu.icon}
                title={menu.title}
                description={menu.description}
                onClick={() => navigate(menu.path)}
              />
            ))}
          </div>
        </Card>
        <NoticeCard
          title={RECORD_NOTICE.title}
          descriptions={RECORD_NOTICE.descriptions}
        />
      </div>
    </div>
  );
}
