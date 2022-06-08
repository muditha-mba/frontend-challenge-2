import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import ButtonPanel from "./components/buttonPanel/ButtonPanel";
import Navbar from "./components/navbar/Navbar";
import View1 from "./pages/view1/View1";
import View2 from "./pages/view2/View2";
import View3 from "./pages/view3/View3";
import View4 from "./pages/view4/View4";
import View5 from "./pages/view5/View5";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ButtonPanel />
      <Routes>
        <Route path={"/"} element={<Navigate to={"/onboarding/1"} />} />
        <Route path="/onboarding/1" element={<View1 />} />
        <Route path="/onboarding/2" element={<View2 />} />
        <Route path="/onboarding/3" element={<View3 />} />
        <Route path="/onboarding/4" element={<View4 />} />
        <Route path="/onboarding/5" element={<View5 />} />
      </Routes>
    </div>
  );
}

export default App;
