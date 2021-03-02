import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";
import "./Login.css";

const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          alt="discord-logo"
          src="https://iconape.com/wp-content/files/jj/247426/svg/247426.svg"
        />
      </div>

      <Button onClick={signIn}>Sign in</Button>
    </div>
  );
};

export default Login;
