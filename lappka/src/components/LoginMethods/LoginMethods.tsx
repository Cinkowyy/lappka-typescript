import fbIcon from "../../img/fb-icon.svg";
import googleIcon from "../../img/google-icon.svg";

const LoginMethods = () => {
  return (
    <div className="methods-wrapper">
      <p>Lub zaloguj się przez</p>
      <div className="images">
        <img src={fbIcon} alt="Facebook" />
        <img src={googleIcon} alt="Google" />
      </div>
    </div>
  );
};

export default LoginMethods;
