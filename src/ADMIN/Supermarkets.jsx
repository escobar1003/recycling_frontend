import { useState } from "react";
import "./admin.css";
export default function Supermarkets() {

  const [stores, setStores] = useState([
    { id: 1, name: "Éxito Panamericana", status: true, ciudad: "Popayán", puntos: 2500 },
    { id: 2, name: "Super Inter Norte", status: true, ciudad: "Popayán", puntos: 1800 },
    { id: 3, name: "Mercamio Campanario", status: false, ciudad: "Popayán", puntos: 900 }
  ]);

  const toggleEstado = (id) => {
    setStores(stores.map(s =>
      s.id === id ? { ...s, status: !s.status } : s
    ));
  };

  const eliminar = (id) => {
    setStores(stores.filter(s => s.id !== id));
  };

  return (
    <div className="page-container">

      <h2>🏪 Gestión de Supermercados - Popayán</h2>

      <div className="card-green mb-3">
        📊 Total: {stores.length} | Activos: {stores.filter(s => s.status).length}
      </div>

      {stores.map(store => (
        <div key={store.id} className="card-green mb-3">

          <h4>🏬 {store.name}</h4>

          <p>📍 Ciudad: {store.ciudad}</p>
          <p>⭐ Puntos generados: {store.puntos}</p>

          <p>
            Estado:
            {store.status
              ? <span style={{ color: "green" }}> 🟢 Activo</span>
              : <span style={{ color: "red" }}> 🔴 Inactivo</span>
            }
          </p>

          <button className="btn-green me-2" onClick={() => toggleEstado(store.id)}>
            🔄 Cambiar estado
          </button>

          <button className="btn-red" onClick={() => eliminar(store.id)}>
            🗑 Eliminar
          </button>

        </div>
      ))}

    </div>
  );
}