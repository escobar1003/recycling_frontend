import "./admin.css";
export default function Reports() {
  return (
    <div className="page-container">

      <h2>📊 Reportes Ambientales</h2>

      {/* KPIs */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "10px" }}>

        <div className="card-green">
          🌍 CO₂ Ahorrado
          <h3>320 kg</h3>
          <p>Reducción mensual</p>
        </div>

        <div className="card-green">
          ♻️ Total Reciclado
          <h3>1.2 Toneladas</h3>
          <p>En Popayán</p>
        </div>

        <div className="card-green">
          ⭐ Puntos Generados
          <h3>25,000</h3>
          <p>Usuarios activos</p>
        </div>

      </div>

      {/* ACTIVIDAD */}
      <div className="card-green mt-3">
        <h4>📈 Actividad mensual</h4>

        <p>Enero ▓▓▓▓▓</p>
        <p>Febrero ▓▓▓▓▓▓▓</p>
        <p>Marzo ▓▓▓▓▓▓</p>
        <p>Abril ▓▓▓▓▓▓▓▓</p>
      </div>

      {/* TOP USUARIOS */}
      <div className="card-green mt-3">
        <h4>🏆 Mejores recicladores</h4>

        <p>🥇 Juan Pérez - 120 kg</p>
        <p>🥈 Laura Gómez - 95 kg</p>
        <p>🥉 Carlos Ruiz - 80 kg</p>
      </div>

    </div>
  );
}