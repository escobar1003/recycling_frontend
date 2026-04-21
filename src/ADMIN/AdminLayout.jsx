import { Link, Outlet, useLocation } from "react-router-dom";

export default function AdminLayout() {

  const location = useLocation();

  /* 🔹 MEJOR DETECCIÓN DE RUTA ACTIVA */
  const isActive = (path) => location.pathname.startsWith(path);

  const linkStyle = (path) => ({
    padding: "10px",
    display: "block",
    color: isActive(path) ? "#22c55e" : "white",
    background: isActive(path) ? "#374151" : "transparent",
    borderRadius: "8px",
    textDecoration: "none",
    marginBottom: "5px",
    transition: "0.2s"
  });

  return (
    <div style={{ display: "flex", height: "100vh" }}>

      {/* SIDEBAR */}
      <div style={{
        width: "240px",
        background: "#1f2937",
        color: "white",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}>

        {/* 🔹 PARTE SUPERIOR */}
        <div>
          <h3 style={{ marginBottom: "20px" }}>
            ♻️ RecyclingPoints
          </h3>

          <Link to="/admin" style={linkStyle("/admin")}>
            Dashboard
          </Link>

          <Link to="/admin/usuarios" style={linkStyle("/admin/usuarios")}>
            Usuarios
          </Link>

          <Link to="/admin/supermercados" style={linkStyle("/admin/supermercados")}>
            Supermercados
          </Link>

          <Link to="/admin/registros" style={linkStyle("/admin/registros")}>
            Registros
          </Link>

          <Link to="/admin/reportes" style={linkStyle("/admin/reportes")}>
            Reportes
          </Link>
        </div>

        {/* 🔹 PARTE INFERIOR (tipo perfil como en la imagen) */}
        <div style={{
          background: "#374151",
          padding: "10px",
          borderRadius: "10px",
          marginTop: "20px"
        }}>
          <p style={{ margin: 0, fontSize: "14px" }}>Admin</p>
          <small style={{ color: "#9ca3af" }}>Panel de control</small>
        </div>

      </div>

      {/* CONTENIDO DINÁMICO */}
      <div style={{
        flex: 1,
        padding: "20px",
        background: "#f3f4f6",
        overflowY: "auto"
      }}>
        <Outlet />
      </div>

    </div>
  );
}