import { useState } from "react";
import "./admin.css";

export default function PointsTable() {

  const [points, setPoints] = useState([
    { id: 1, location: "Centro", active: true },
    { id: 2, location: "Universidad", active: false },
    { id: 3, location: "Parque", active: true }
  ]);

  const togglePoint = (id) => {
    setPoints(points.map(p =>
      p.id === id ? { ...p, active: !p.active } : p
    ));
  };

  return (
    <div className="card p-3 shadow">
      <h4>Puntos de Reciclaje</h4>

      <table className="table table-bordered mt-2">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Ubicación</th>
            <th>Estado</th>
            <th>Acción</th>
          </tr>
        </thead>

        <tbody>
          {points.map(point => (
            <tr key={point.id}>
              <td>{point.id}</td>
              <td>{point.location}</td>

              <td>
                {point.active ? (
                  <span className="badge bg-success">Activo</span>
                ) : (
                  <span className="badge bg-danger">Inactivo</span>
                )}
              </td>

              <td>
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => togglePoint(point.id)}
                >
                  {point.active ? "Desactivar" : "Activar"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}