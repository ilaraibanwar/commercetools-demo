import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getUser, handleCallback } from "./authService";

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    async function init() {
      try {
        if (location.pathname === "/callback") {
          const u = await handleCallback();
          if (u) {
            setUser(u);
            navigate("/", { replace: true });
          }
        } else {
          const u = await getUser();
          if (u) setUser(u);
        }
      } catch (err) {
        console.error("Auth initialization failed:", err);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [location, navigate]);

  return { user, setUser, loading };
}
