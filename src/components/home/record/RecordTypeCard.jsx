import Card from "../../common/Card";

export default function RecordTypeCard({ title, description, onClick }) {
  return (
    <button type="button" onClick={onClick} className="w-full cursor-pointer text-left">
      <Card className="flex flex-col gap-[8px] p-[18px]">
        <div className="flex items-center gap-[8px]">
          <p className="text-[18px] font-bold leading-[27px] text-[#191F28]">
            {title}
          </p>
          <span className="text-[18px] leading-[27px] text-[#191F28]">›</span>
        </div>
        <p className="text-[14px] leading-[21px] text-[#6B7684]">{description}</p>
      </Card>
    </button>
  );
}
