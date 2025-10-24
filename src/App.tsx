import { Route, Routes } from "react-router";
import Home from "./routes/Home/index";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
};

export default App;
