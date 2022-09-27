import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
};
export default App;
