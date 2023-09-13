// modules
import { useState } from "react";
// components
import { Input } from "src/components/Input";
import { Button } from "src/components/Button";
import { LoginProps } from "./typings";
import { CloseIcon } from "src/components/Icon";
// styles
import styles from "./Login.module.scss";

const Login = (props: LoginProps) => {
  const { onClickContinue, onClose } = props;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.loginContainer}>
      <div className={styles.closeIconContainer} onClick={onClose}>
        <CloseIcon className={styles.closeIcon} />
      </div>
      <div className={styles.text1}>WELCOME BACK</div>
      <div className={styles.text2}>Log into your account</div>
      <div className={styles.label}>Email or Username</div>
      <div className={styles.inputContainer}>
        <Input
          placeholder="Enter your email or username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className={styles.labelContainer2}>
        <div className={styles.label}>Password</div>
        <div className={styles.forgotPassword}>Forgot password?</div>
      </div>
      <div className={styles.inputContainer}>
        <Input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className={styles.btnContainer}>
        <Button title="Login now" onClick={onClickContinue} />
      </div>
      <div className={styles.registerTextContainer}>
        <span style={{ cursor: "pointer" }} onClick={onClickContinue}>
          Not registered yet?
          <span className={styles.registerText}> Register →</span>
        </span>
      </div>
    </div>
  );
};

export default Login;
