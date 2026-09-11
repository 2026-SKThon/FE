import Card from "../../common/Card";

export default function NoticeCard({ title, descriptions }) {
  return (
    <Card className="flex flex-col gap-[8px] p-[18px]">
      <p className="text-[14px] font-bold leading-[21px] text-[#191F28]">
        {title}
      </p>
      <div>
        {descriptions.map((description) => (
          <p
            key={description}
            className="text-[13px] leading-[20px] text-[#6B7684]"
          >
            {description}
          </p>
        ))}
      </div>
    </Card>
  );
}
