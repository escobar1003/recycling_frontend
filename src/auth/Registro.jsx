import { useNavigate } from "react-router-dom";

function Registro() {
  const navigate = useNavigate();

  return (
    <div>
      <ul className="bg-success text-white p-3 rounded">
        <li className="mb-2"><input className="form-control" placeholder="nombre" /></li>
        <li className="mb-2"><input className="form-control" placeholder="correo" /></li>
        <li className="mb-2"><input className="form-control" placeholder="contraseña" /></li>
        <li className="mb-2"><input className="form-control" placeholder="confirmar contraseña" /></li>
      </ul>

      <div className="d-flex justify-content-center">
        <button className="bg-success rounded-pill">CREAR CUENTA</button>
      </div>

      <p onClick={() => navigate("/")} style={{cursor:"pointer"}}>
        Volver al login
      </p>
    </div>
  );
}

export default Registro;