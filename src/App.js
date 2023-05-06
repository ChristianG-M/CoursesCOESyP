import { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Login from "./pages/home";

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  return (
    <>
      <CssBaseline />
      <Routes>
        <Route
          path="/"
          element=<Login />
        />
      </Routes>
    </>
  );
}
