import logo from "../../assets/images/logo.svg";
import Tag from "../common/Tag";

export default function HomeTopBar({ tag }) {
  return (
    <div className="flex h-[56px] items-center justify-between">
      <img src={logo} alt="ON-e" className="h-[39px] w-[81px]" />
      <Tag
        label={tag.label}
        showDot
        background={tag.background}
        color={tag.color}
      />
    </div>
  );
}
