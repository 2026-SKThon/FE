import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home/Home";
import Hospital from "./pages/Hospital/Hospital";
import Report from "./pages/Report/Report";
import Analysis from "./pages/Report/Analysis";
import SymptomExplanation from "./pages/Report/SymptomExplanation";
import Mypage from "./pages/Mypage/Mypage";
import ChildProfile from "./pages/Mypage/ChildProfile";
import DeviceManagement from "./pages/Mypage/DeviceManagement";
import Guardian from "./pages/Mypage/Guardian";
import Notification from "./pages/Mypage/Notification";
import RecordManagement from "./pages/Mypage/RecordManagement";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/hospital" element={<Hospital />} />
          <Route path="/report" element={<Report />} />
          <Route path="/report/analysis" element={<Analysis />} />
          <Route
            path="/report/analysis/symptom"
            element={<SymptomExplanation />}
          />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/mypage/profile" element={<ChildProfile />} />
          <Route path="/mypage/device" element={<DeviceManagement />} />
          <Route path="/mypage/guardian" element={<Guardian />} />
          <Route path="/mypage/notification" element={<Notification />} />
          <Route
            path="/mypage/record-management"
            element={<RecordManagement />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
