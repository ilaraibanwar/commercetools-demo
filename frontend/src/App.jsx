import { Routes, Route } from "react-router-dom";
import useAuth from "./auth/useAuth";
import LoginPage from "./pages/LoginPage";
import ProductsPage from "./pages/ProductsPage";

export default function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-black text-green-400">
        Loading...
      </div>
    );
  }

  return (
    <Routes>
      {!user ? (
        <Route path="/*" element={<LoginPage />} />
      ) : (
        <Route path="/*" element={<ProductsPage user={user} />} />
      )}
    </Routes>
  );
}
