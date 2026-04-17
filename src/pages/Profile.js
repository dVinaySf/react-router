import { useAuth } from "./Auth";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <div className="flex flex-col gap-4 mt-4">
      <div className="flex justify-end">
        <button className="place-order-btn " onClick={handleLogout}>
          Logout
        </button>
      </div>
      <h1>Welcome {user}</h1>
    </div>
  );
};
