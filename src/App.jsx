import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import RequireAuth from "./auth/RequireAuth";
import { ROLES } from "./auth/roles";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={
          <RequireAuth allowedRoles={[ROLES.ADMIN, ROLES.USER]}>
            <Dashboard />
          </RequireAuth>
        }
      />

      <Route path="*" element={<Login />} />
    </Routes>
  );
}
