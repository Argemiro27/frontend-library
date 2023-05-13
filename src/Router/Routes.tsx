import React, { Suspense } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import { Home, Estante, HomeDashboard } from "../pages";
import Loading from "../components/Loading";
import Auth from "../pages/Auth/Auth";

const MyRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/estante" element={<Estante />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/adm/dashboard" element={<HomeDashboard />} />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default MyRoutes;
