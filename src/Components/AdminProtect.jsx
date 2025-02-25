import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminProtected = ({ children }) => {
  const auth = true;
  const user_type = "administrator";
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth) {
      navigate("/");
    }
  }, [auth, navigate]);
  if (user_type == "administrator") {
    return children;
  } else {
    navigate("/");
  }
};

export default AdminProtected;
