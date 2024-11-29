import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "./pages/Login";
import { NewConsult } from "./pages/NewConsult";
import { ViewConsult } from "./pages/ViewConsult";
import { ViewConsultConfirm } from "./pages/ViewConsultConfirm";
import { NewQueryScheduled } from "./pages/NewConsultScheduled";

import { LoginDash } from "./pages/LoginDash";
import { Dashboard } from "./pages/Dashboard";
import { ResetPassword } from "./pages/ResetPassword";
import Patient from "./pages/Patient";
import Doctor from "./pages/Doctor";
import Agenda from "./pages/Agenda";
import Settings from "./pages/Settings";
import Help from "./pages/Help";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas das páginas Paciente */}
        <Route path="/" element={<Login />} />
        <Route path="/newConsult" element={<NewConsult />} />
        <Route path="/viewConsult" element={<ViewConsult />} />
        <Route path="/viewConsultConfirm" element={<ViewConsultConfirm />} />
        <Route path="/newQueryScheduled" element={<NewQueryScheduled />} />

        {/* Rotas das páginas Dashboard Usuário */}
        <Route path="/loginDash" element={<LoginDash />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/help" element={<Help />} />

        <Route path="/resetPassword" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
