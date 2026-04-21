import { Navigate } from "react-router-dom";

export default function PrivateRoute({ auth, children }) {
  return auth ? children : <Navigate to="/" />;
}