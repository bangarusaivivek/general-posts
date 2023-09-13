// modules
import React, { InputHTMLAttributes } from "react";
import { CustomizedFunctionComponent } from "../../util/helper";
// styles
import styles from "./Input.module.scss";
import { EyeIcon } from "../Icon";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * styles for the input.
   */
  inputStyleProp?: React.CSSProperties;
  /**
   * styles for the label.
   */
  labelStyleProp?: React.CSSProperties;
}

const Input: CustomizedFunctionComponent<InputProps> = ({
  inputStyleProp = {},
  labelStyleProp = {},
  type = 'text',
  ...props
}) => {
  return (
    <div className={styles.inputContainer}>
      <input
        {...props}
        id="input-el"
        style={{ ...inputStyleProp }}
        className={styles.input}
        type={type}
      />
      {
        type === 'password' ? <div className={styles.showIcon}>
          <EyeIcon className={styles.eyeIcon} />
        </div> : null
      }
    </div>
  );
};

export default Input;
