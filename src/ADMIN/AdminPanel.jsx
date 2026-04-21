import UsersTable from "./UsersTable";
import PointsTable from "./PointsTable";
import "./admin.css";

export default function AdminPanel() {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Panel Administrador ⚙️</h1>

      <UsersTable />
      <PointsTable />
    </div>
  );
}