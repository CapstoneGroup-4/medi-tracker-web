import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Workspace from "./pages/Workspace";
import WorkspaceLayout from "./layouts/Workspace/App";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Reminder from "./pages/Reminder";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<Login />} path="/login" />
      <Route element={<Register />} path="/register" />
      <Route element={<WorkspaceLayout />} path="/workspace">
        <Route element={<Workspace />} path="dashboard" />
        <Route element={<Reports />} path="reports" />
        <Route element={<Reminder />} path="reminders" />
        <Route element={<Settings />} path="settings" />
      </Route>
    </Routes>
  );
}

export default App;
