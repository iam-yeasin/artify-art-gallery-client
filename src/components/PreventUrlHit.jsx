import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PreventUrlHit = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return null;

  // if (loading) {
  //   return <div className="loading loading-spinner"></div>;
  // }

  if (user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PreventUrlHit;
