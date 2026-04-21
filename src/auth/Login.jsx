import { useNavigate } from "react-router-dom";

function Login({ setAuth }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    setAuth(true); // simula login
    navigate("/admin");
  };

  return (
    <div>
      <ul className="bg-success text-white p-3 rounded">
        <li className="mb-2">
          <input className="form-control" placeholder="correo" />
        </li>
        <li className="mb-2">
          <input className="form-control" placeholder="contraseña" />
        </li>
      </ul>

      <div className="d-flex justify-content-center">
        <button onClick={handleLogin} className="bg-success rounded-pill">
          INICIAR SESIÓN
        </button>
      </div>

      <p onClick={() => navigate("/registro")} style={{cursor:"pointer"}}>
        Crear cuenta
      </p>
    </div>
  );
}

export default Login;