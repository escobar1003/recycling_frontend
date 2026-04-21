import { useState } from "react";

function generateCode() {
  return "RP-" + Math.random().toString(36).substring(2, 10).toUpperCase();
}

export default function Recompensas() {
  const [reward, setReward] = useState("");
  const [points, setPoints] = useState("");
  const [history, setHistory] = useState([]);
  const [current, setCurrent] = useState(null);
  const [message, setMessage] = useState("");

  const handleRedeem = () => {
    if (!reward || !points) {
      setMessage("⚠️ Debes completar todos los campos");
      return;
    }

    const transaction = {
      reward,
      points,
      code: generateCode(),
      date: new Date().toLocaleString(),
      expires: new Date(Date.now() + 7 * 86400000).toLocaleDateString(),
      conditions: "Uso único. No transferible."
    };

    setCurrent(transaction);
    setHistory([transaction, ...history]);
    setMessage("✅ Canje realizado con éxito");
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">ReciclyngPoints ♻️</h1>

      {message && <div className="alert alert-info">{message}</div>}

      <div className="card p-3 mb-4 shadow">
        <h4>Canjear Recompensa</h4>

        <input
          className="form-control mb-2"
          placeholder="Nombre de la recompensa"
          value={reward}
          onChange={(e) => setReward(e.target.value)}
        />

        <input
          className="form-control mb-2"
          placeholder="Puntos a usar"
          type="number"
          value={points}
          onChange={(e) => setPoints(e.target.value)}
        />

        <button className="btn btn-success" onClick={handleRedeem}>
          Generar Canje
        </button>
      </div>

      {current && (
        <div className="card p-3 mb-4 shadow border-success">
          <h4 className="text-success">Certificado Digital</h4>
          <p><b>Código:</b> {current.code}</p>
          <p><b>Recompensa:</b> {current.reward}</p>
          <p><b>Puntos:</b> {current.points}</p>
        </div>
      )}

      <div className="card p-3 shadow">
        <h4>Historial</h4>

        {history.length === 0 && <p>No hay canjes</p>}

        {history.map((item, i) => (
          <div key={i}>
            {item.reward} - {item.points}
          </div>
        ))}
      </div>
    </div>
  );
}