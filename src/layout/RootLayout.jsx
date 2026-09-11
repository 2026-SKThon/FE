import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="flex justify-center">
      <div className="w-[393px] h-[852px] bg-[#FBFBFB]">
        <Outlet />
      </div>
    </div>
  );
}