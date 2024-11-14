import Button from "../elements/Button";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Logout = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    Cookies.remove("AccessToken");
    navigate("/login_page");
  };

  const staySignIn = () => {
    navigate("/cart_page");
  }
  
  return (
    <div className="pl-10 pt-20">
      <div>
        <h3>Are you sure you want to log out?</h3>
        <div className="mt-10 space-x-5">
          <Button label="Yes, log out" onClick={handleSignOut} />
          <Button label="No, stay logged in" onClick={staySignIn} />
        </div>
      </div>
    </div>
  );
};

export default Logout;
