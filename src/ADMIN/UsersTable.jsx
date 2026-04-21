import { useState } from "react";
import "./admin.css";
export default function UsersTable() {

  const [users, setUsers] = useState([
    { id: 1, name: "Juan Perez", email: "juan@mail.com", role: "User", points: 1200, status: true },
    { id: 2, name: "Maria Lopez", email: "maria@mail.com", role: "Admin", points: 5000, status: true },
    { id: 3, name: "Carlos Ruiz", email: "carlos@mail.com", role: "User", points: 800, status: false }
  ]);

  const toggleUser = (id) => {
    setUsers(users.map(u =>
      u.id === id ? { ...u, status: !u.status } : u
    ));
  };

  const deleteUser = (id) => {
    setUsers(users.filter(u => u.id !== id));
  };

  // 🔥 NUEVO: agregar usuario
  const addUser = () => {

    const name = prompt("Nombre del usuario:");
    const email = prompt("Email del usuario:");
    const role = prompt("Rol (User / Admin):");
    const points = prompt("Puntos iniciales:");

    if (!name || !email || !role || !points) {
      alert("⚠️ Debes completar todos los campos");
      return;
    }

    const newUser = {
      id: users.length + 1,
      name,
      email,
      role,
      points: parseInt(points),
      status: true
    };

    setUsers([newUser, ...users]);
  };

  return (
    <div>

      {/* TITULO */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Gestión de Usuarios</h2>

        {/* BOTÓN FUNCIONAL */}
        <button className="btn btn-success" onClick={addUser}>
          + Nuevo Usuario
        </button>
      </div>

      {/* TARJETAS RESUMEN */}
      <div className="row mb-4">

        <div className="col-md-4">
          <div className="card p-3 shadow">
            <h6>Total Usuarios</h6>
            <h3>{users.length}</h3>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow">
            <h6>Activos</h6>
            <h3>{users.filter(u => u.status).length}</h3>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow">
            <h6>Inactivos</h6>
            <h3>{users.filter(u => !u.status).length}</h3>
          </div>
        </div>

      </div>

      {/* TABLA */}
      <div className="card shadow p-3">

        <table className="table align-middle">
          <thead className="table-light">
            <tr>
              <th>Usuario</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Puntos</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {users.map(user => (
              <tr key={user.id}>

                <td>
                  <strong>{user.name}</strong><br />
                  <small>ID: {user.id}</small>
                </td>

                <td>{user.email}</td>

                <td>
                  <span className={`badge ${
                    user.role === "Admin" ? "bg-warning" : "bg-secondary"
                  }`}>
                    {user.role}
                  </span>
                </td>

                <td>{user.points}</td>

                <td>
                  {user.status ? (
                    <span className="badge bg-success">Activo</span>
                  ) : (
                    <span className="badge bg-danger">Inactivo</span>
                  )}
                </td>

                <td>
                  <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => toggleUser(user.id)}
                  >
                    {user.status ? "Desactivar" : "Activar"}
                  </button>

                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Eliminar
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>

      </div>

    </div>
  );
}