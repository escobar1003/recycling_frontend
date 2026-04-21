import "./admin.css";
export default function Dashboard() {
  return (
    <div>

      <h2>Dashboard</h2>

      {/* TARJETAS */}
      <div className="row mt-3">

        <div className="col-md-3">
          <div className="card p-3 shadow">
            <h6>Total Usuarios</h6>
            <h3>12,482</h3>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-3 shadow">
            <h6>Supermercados</h6>
            <h3>156</h3>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-3 shadow">
            <h6>Reciclado (kg)</h6>
            <h3>85,290</h3>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-3 shadow">
            <h6>Puntos</h6>
            <h3>1.2M</h3>
          </div>
        </div>

      </div>

      {/* TABLA */}
      <div className="card p-3 mt-4 shadow">
        <h5>Registros recientes</h5>

        <table className="table mt-2">
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Material</th>
              <th>Cantidad</th>
              <th>Puntos</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Juan</td>
              <td>Plástico</td>
              <td>5kg</td>
              <td>+500</td>
            </tr>

            <tr>
              <td>Maria</td>
              <td>Vidrio</td>
              <td>10kg</td>
              <td>+1000</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}