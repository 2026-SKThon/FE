import { useNavigate } from "react-router-dom";
import backIcon from "../../assets/icons/backicon.svg";

export default function Header({ title }) {
  const navigate = useNavigate();

  return (
    <header className="flex h-14 items-center px-5">
      <button
        type="button"
        onClick={() => navigate(-1)}
        aria-label="뒤로가기"
        className="flex h-11 w-11 shrink-0 items-center justify-center"
      >
        <img src={backIcon} alt="" className="h-11 w-11" />
      </button>
      <div className="flex h-[21px] flex-1 items-center justify-center">
        <h1 className="text-lg font-bold leading-[21px]">{title}</h1>
      </div>
    </header>
  );
}
