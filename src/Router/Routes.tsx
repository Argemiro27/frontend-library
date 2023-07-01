import React from "react";
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import { Home, Estante, Painel } from "../pages";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";
import { AddBook, Estoque } from "../pages/Painel";
import { ClienteProvider } from "../contexts/contextApi/ClienteContext";
import { isUserAuthenticated } from "../utils/authUtils";

const MyRoutes = () => {
  return (
    <ClienteProvider>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adm/painel" element={<Painel />} />
          <Route path="/adm/estoque" element={<Estoque />} />
          <Route path="/adm/estoque/newbook" element={<AddBook />} />
          <Route
            path="/estante"
            element={
              isUserAuthenticated() ? (
                <Estante />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </Router>
    </ClienteProvider>
  );
};

export default MyRoutes;