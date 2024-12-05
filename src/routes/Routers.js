import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "../views/main/MainPage";

const Routers = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
    </Routes>
  </BrowserRouter>
)

export default Routers