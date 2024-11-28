import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "./pages/Login";
import { NewConsult } from "./pages/NewConsult";
import { ViewConsult } from "./pages/ViewConsult";
import { ViewConsultConfirm } from "./pages/ViewConsultConfirm";
import { NewQueryScheduled } from "./pages/NewConsultScheduled";

import { LoginDash } from "./pages/LoginDash";
import { Dashboard } from "./pages/Dashboard";
import { ResetPassword } from "./pages/ResetPassword";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/newConsult" element={<NewConsult />} />
        <Route path="/viewConsult" element={<ViewConsult />} />

        <Route path="/viewConsultConfirm" element={<ViewConsultConfirm />} />
        <Route path="/newQueryScheduled" element={<NewQueryScheduled />} />

        <Route path="/loginDash" element={<LoginDash />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
