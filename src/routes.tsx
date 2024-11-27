import { BrowserRouter, Routes, Route } from "react-router-dom";

//import { Login } from "./pages/Login";
import { NewQuery } from "./pages/NewQuery";
import { ViewQuery } from "./pages/ViewQuery";
import { ViewQueryResult } from "./pages/ViewQueryResult";

import { LoginDash } from "./pages/LoginDash";
import { Dashboard } from "./pages/Dashboard";
import { ResetPassword } from "./pages/ResetPassword";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginDash />} />
        <Route path="/newQuery" element={<NewQuery />} />
        <Route path="/viewQuery" element={<ViewQuery />} />

        <Route path="/viewQueryResult" element={<ViewQueryResult />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
