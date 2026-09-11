import Card from "../../common/Card";

export default function NoticeCard({ title, descriptions }) {
  return (
    <Card className="flex flex-col gap-[8px] p-[18px]">
      <p className="text-[14px] font-semibold leading-[1.6] text-[#191F28]">
        {title}
      </p>
      <div>
        {descriptions.map((description) => (
          <p
            key={description}
            className="text-[12px] font-medium leading-[20px] text-[#B0B8C1]"
          >
            {description}
          </p>
        ))}
      </div>
    </Card>
  );
}
