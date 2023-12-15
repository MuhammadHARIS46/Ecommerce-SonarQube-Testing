import React from "react";
import { Navigate } from "react-router-dom";

const SuccessProtected = ({ children }) => {
  const params = new URL(document.location).searchParams;
  const session_id = params.get("session_id");
  if (session_id) return children;
  return <Navigate to="/payment" />;
};

export default SuccessProtected;
