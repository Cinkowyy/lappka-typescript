import { useEffect, useState } from "react";
import FormInput from "../../components/FormInput/FormInput";
import UnderlinedHeading from "../../components/UnderlinedHeading/UnderlinedHeading";
import logo from "../../img/logo.svg";
import userIcon from "../../img/user-icon.svg";
import passwdIcon from "../../img/password-icon.svg";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import LoginMethods from "../../components/LoginMethods/LoginMethods";
import { useNavigate } from "react-router";

const Login = () => {
  const [width, setWidth] = useState(1);

  function handleResize() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigate = useNavigate();

  const navigateToPanel = () => {
    navigate("/panel");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <img src={logo} alt="Łappka logo" />
        <UnderlinedHeading
          text={`${width < 577 ? "Zaloguj się" : "Zaloguj się do aplikacji"}`}
        />
        <form onSubmit={navigateToPanel}>
          <FormInput icon={userIcon} type="text" placeholder="Login" />
          <FormInput icon={passwdIcon} type="password" placeholder="Hasło" />
          <div className="options">
            <div className="remember-option">
              <input type="checkbox" name="rememberMe" id="rememberMe" />
              <label htmlFor="rememberMe">Zapamiętaj mnie</label>
            </div>
            <p className="forgot-pass">Zapomniałeś hasła?</p>
          </div>
          <PrimaryButton text="Zaloguj się" />
          <LoginMethods />
        </form>
      </div>
    </div>
  );
};

export default Login;
