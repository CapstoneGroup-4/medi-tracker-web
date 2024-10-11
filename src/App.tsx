import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<Login />} path="/login" />
      <Route element={<Register />} path="/register" />
    </Routes>
  );
}

export default App;
