import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "./auth/Login";
import Registro from "./auth/Registro";
import PrivateRoute from "./auth/PrivateRoute";

import Recompensas from "./pages/Recompensas";
import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/Dashboard";
import UsersTable from "./admin/UsersTable";
import PointsTable from "./admin/PointsTable";
import Records from "./admin/Records";
import Reports from "./admin/Reports";
import Supermarkets from "./admin/Supermarkets";

export default function App() {
  const [auth, setAuth] = useState(false);

  return (
    <BrowserRouter>
      <Routes>

        {/* LOGIN */}
        <Route path="/" element={<Login setAuth={setAuth} />} />
        <Route path="/registro" element={<Registro />} />

        {/* APP PROTEGIDA */}
        <Route
          path="/admin"
          element={
            <PrivateRoute auth={auth}>
              <AdminLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="usuarios" element={<UsersTable />} />
          <Route path="supermercados" element={<Supermarkets />} />
          <Route path="registros" element={<Records />} />
          <Route path="reportes" element={<Reports />} />
        </Route>

        {/* OPCIONAL */}
        <Route
          path="/recompensas"
          element={
            <PrivateRoute auth={auth}>
              <Recompensas />
            </PrivateRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}