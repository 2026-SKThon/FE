import arrowRightMid from "../../../assets/icons/arrow_right_mid.svg";
import Card from "../../common/Card";

export default function RecordTypeCard({ icon, title, description, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full cursor-pointer text-left"
    >
      <Card className="rounded-[16px] px-[18px] py-[24px]">
        <div className="flex items-center gap-[8px]">
          <span className="size-[40px] shrink-0">
            <img src={icon} alt="" className="size-full" />
          </span>
          <div className="flex min-w-0 flex-1 flex-col">
            <p className="text-[18px] font-semibold leading-[1.6] text-[#191F28]">
              {title}
            </p>
            <p className="text-[13px] font-medium leading-[1.6] text-[#6B7684]">
              {description}
            </p>
          </div>
          <span className="size-[24px] shrink-0">
            <img src={arrowRightMid} alt="" className="size-full" />
          </span>
        </div>
      </Card>
    </button>
  );
}
