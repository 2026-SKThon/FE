import homeActive from "../../assets/icons/home_active.svg";
import homeInactive from "../../assets/icons/home_inactive.svg";
import hospitalActive from "../../assets/icons/hospital_active.svg";
import hospitalInactive from "../../assets/icons/hospital_inactive.svg";
import reportActive from "../../assets/icons/report_active.svg";
import reportInactive from "../../assets/icons/report_inactive.svg";
import mypageActive from "../../assets/icons/mypage_active.svg";
import mypageInactive from "../../assets/icons/mypage_inactive.svg";
import { useLocation, useNavigate } from "react-router-dom";

const menus = [
  {
    label: "홈",
    path: "/",
    activeIcon: homeActive,
    inactiveIcon: homeInactive,
  },
  {
    label: "병원",
    path: "/hospital",
    activeIcon: hospitalActive,
    inactiveIcon: hospitalInactive,
  },
  {
    label: "리포트",
    path: "/report",
    activeIcon: reportActive,
    inactiveIcon: reportInactive,
  },
  {
    label: "마이",
    path: "/mypage",
    activeIcon: mypageActive,
    inactiveIcon: mypageInactive,
  },
];

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-1/2 z-50 h-[97px] w-full max-w-[393px] -translate-x-1/2 rounded-tl-[30px] rounded-tr-[30px] bg-white shadow-[0px_-1px_7px_-2px_rgba(0,0,0,0.25)]">
      <div className="flex h-full w-full items-center justify-center">
        {menus.map((menu) => {
          const isActive =
            menu.path === "/"
              ? location.pathname === "/"
              : location.pathname.startsWith(menu.path);

          return (
            <button
              key={menu.path}
              type="button"
              onClick={() => navigate(menu.path)}
              className="flex h-full flex-1 flex-col items-center justify-center cursor-pointer"
            >
              <img src={isActive ? menu.activeIcon : menu.inactiveIcon} />
              <p
                className={`text-sm font-medium leading-6 ${
                  isActive ? "text-[#FF4F37]" : "text-[#D1D6DB]"
                }`}
              >
                {menu.label}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
