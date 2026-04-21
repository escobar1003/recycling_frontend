import { useState } from "react";
import "./admin.css";

export default function Records() {

  const [records] = useState([
    { id: 1, usuario: "Juan Pérez", material: "Plástico", kg: 5, puntos: 500, fecha: "2026-04-20" },
    { id: 2, usuario: "Laura Gómez", material: "Vidrio", kg: 8, puntos: 800, fecha: "2026-04-19" },
    { id: 3, usuario: "Carlos Ruiz", material: "Cartón", kg: 6, puntos: 600, fecha: "2026-04-18" }
  ]);

  const totalKg = records.reduce((acc, r) => acc + r.kg, 0);

  return (
    <div className="page-container">

      <h2>♻️ Registros de Reciclaje</h2>

      <div className="card-green mb-3">
        📦 Total registros: {records.length} | ⚖️ Total reciclado: {totalKg} kg
      </div>

      {records.map(r => (
        <div key={r.id} className="card-green mb-3">

          <h4>👤 {r.usuario}</h4>

          <p>🧾 Material: {r.material}</p>
          <p>⚖️ Cantidad: {r.kg} kg</p>
          <p>⭐ Puntos obtenidos: +{r.puntos}</p>
          <p>📅 Fecha: {r.fecha}</p>

        </div>
      ))}

    </div>
  );
}