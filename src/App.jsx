import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home/Home";
import Hospital from "./pages/Hospital/Hospital";
import Report from "./pages/Report/Report";
import Analysis from "./pages/Report/Analysis";
import Mypage from "./pages/Mypage/Mypage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/hospital" element={<Hospital />} />
          <Route path="/report" element={<Report />} />
          <Route path="/report/analysis" element={<Analysis />} />
          <Route path="/mypage" element={<Mypage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
