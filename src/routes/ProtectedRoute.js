import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Home } from "../components";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("login");

    if (!login) {
      navigate("/login");
    }
  });

  return (
    <div>
      <Home />
    </div>
  );
};

export default ProtectedRoute;
