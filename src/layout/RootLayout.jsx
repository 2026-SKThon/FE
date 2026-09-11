import { Outlet } from "react-router-dom";

import Footer from "../components/footer/footer";

export default function RootLayout() {
  return (
    <div className="flex min-h-screen justify-center bg-[#F7F7F7]">
      <div className="flex min-h-screen w-full max-w-[393px] flex-col bg-white">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
