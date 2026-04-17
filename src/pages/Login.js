import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./Auth";
import { useState } from "react";

export const Login = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/"; // redirect the user to the protected route after login

  const auth = useAuth();
  const handleLogin = () => {
    auth.login(user);
    // navigate('/')
    navigate(redirectPath, { replace: true });
  };
  return (
    <div>
      <label name="Username" htmlFor="username">
        Username:{" "}
        <input type="text" onChange={(e) => setUser(e.target.value)} />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
