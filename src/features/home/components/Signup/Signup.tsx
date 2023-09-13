// modules
import { useState } from "react";
// components
import { Input } from "src/components/Input";
import { Button } from "src/components/Button";
import { SignupProps } from "./typings";
import { CloseIcon } from "src/components/Icon";
// styles
import styles from "./Signup.module.scss";

const Signup = (props: SignupProps) => {
  const { onClickContinue, onClose } = props;

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.signupContainer}>
      <div className={styles.closeIconContainer} onClick={onClose}>
        <CloseIcon className={styles.closeIcon} />
      </div>
      <div className={styles.text1}>SIGN UP</div>
      <div className={styles.text2}>Create an account to continue</div>
      <div className={styles.label}>Email</div>
      <div className={styles.inputContainer}>
        <Input
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.label}>Username</div>
      <div className={styles.inputContainer}>
        <Input
          placeholder="Choose a preferred username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className={styles.label}>Password</div>
      <div className={styles.inputContainer}>
        <Input
          type="password"
          placeholder="Choose a strong password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className={styles.btnContainer}>
        <Button title="Continue" onClick={onClickContinue} />
      </div>
      <div className={styles.registerTextContainer}>
        <span style={{ cursor: "pointer" }} onClick={onClickContinue}>
          Already have an account?
          <span className={styles.registerText}> Login →</span>
        </span>
      </div>
    </div>
  );
};

export default Signup;
