import { Outlet, useLocation } from "react-router-dom";

import Footer from "../components/footer/footer";

export default function RootLayout() {
  const location = useLocation();
  const hideFooter =
    location.pathname === "/mypage/profile" ||
    location.pathname === "/mypage/device" ||
    location.pathname === "/mypage/guardian" ||
    location.pathname === "/mypage/notification" ||
    location.pathname === "/mypage/record-management";
  return (
    <div className="flex min-h-screen justify-center bg-[#F7F7F7]">
      <div className="flex min-h-screen w-full max-w-[393px] flex-col bg-white">
        <Outlet />
        {!hideFooter && <Footer />}
      </div>
    </div>
  );
}
