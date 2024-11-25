import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "./pages/Login";
import { NewQuery } from "./pages/NewQuery";
import { ViewQuery } from "./pages/ViewQuery";
import { ViewQueryResult } from "./pages/ViewQueryResult";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/newQuery" element={<NewQuery />} />
        <Route path="/viewQuery" element={<ViewQuery />} />

        <Route path="/viewQueryResult" element={<ViewQueryResult />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
