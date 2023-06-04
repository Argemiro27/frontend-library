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
import { AddBook, Estoque } from "../pages/Dashboard";

const MyRoutes = () => {
  return (
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/estante" element={<Estante />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/adm/dashboard" element={<HomeDashboard />} />
          <Route path="/adm/estoque" element={<Estoque />} />
          <Route path="/adm/estoque/newbook" element={<AddBook />} />
          
        </Routes>
      </Router>
  );
};

export default MyRoutes;
