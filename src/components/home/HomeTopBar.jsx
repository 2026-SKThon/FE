import logo from "../../assets/images/logo.svg";
import Tag from "../common/Tag";

export default function HomeTopBar({ deviceConnected }) {
  return (
    <div className="flex h-[56px] items-center justify-between">
      <img src={logo} alt="ON-e" className="h-[39px] w-[81px]" />
      {deviceConnected && <Tag label="기기 연결" showDot />}
    </div>
  );
}
