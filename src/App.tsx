import {
  Route,
  Routes,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";

import IndexPage from "@/pages/index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Workspace from "./pages/Workspace";
import WorkspaceLayout from "./layouts/Workspace/App";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Reminder from "./pages/Reminder";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { GlobalUserAtom } from "./global";
import { usePathname } from "./hooks/route";
import { OpenAPI } from "./api";

function App() {
  const [_, setGlobalUser] = useAtom(GlobalUserAtom);

  const pathname = usePathname();
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (token) {
      OpenAPI.TOKEN = token;
    }
    if (pathname.includes("/login") || pathname.includes("/register")) {
      return;
    } else if (pathname.includes("/workspace")) {
      if (user) {
        setGlobalUser(JSON.parse(user));
        // navigate("/workspace/dashboard");
      } else {
        navigate("/login");
      }
    }
  }, []);
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<Login />} path="/login" />
      <Route element={<WorkspaceLayout />} path="/workspace">
        <Route element={<Navigate to="/workspace/dashboard" />} index />
        <Route element={<Workspace />} path="dashboard" />
        <Route element={<Workspace />} path="reports" />
        <Route element={<Reports />} path="reports/:id" />
        <Route element={<Reminder />} path="reminders" />
        <Route element={<Settings />} path="settings" />
      </Route>
      <Route element={<Register />} path="/register" />
    </Routes>
  );
}

export default App;
