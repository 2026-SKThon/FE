import pill from "../../../assets/icons/pill.svg";

const TYPE_ICON = {
  MEDICATION: pill,
};

export default function RecordItem({ time, title, description, type }) {
  const icon = TYPE_ICON[type];

  return (
    <div className="flex items-center gap-[8px]">
      <p className="w-[45px] shrink-0 text-[12px] font-medium leading-[17px] text-[#8B95A1]">
        {time}
      </p>
      <div className="flex flex-1 flex-col gap-[3px]">
        <div className="flex items-center gap-[3px]">
          {icon && (
            <span className="size-[20px] shrink-0">
              <img src={icon} alt="" className="size-full" />
            </span>
          )}
          <p className="text-[14px] font-semibold leading-[1.6] text-[#191F28]">
            {title}
          </p>
        </div>
        <p className="text-[12px] font-medium leading-[1.6] text-[#B0B8C1]">
          {description}
        </p>
      </div>
    </div>
  );
}
