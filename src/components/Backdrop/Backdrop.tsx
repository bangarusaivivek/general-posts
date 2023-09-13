import { CustomizedFunctionComponent } from "src/util/helper";
import styles from "./Backdrop.module.scss";
import { ReactNode } from "react";

interface BackdropProps {
  /**
   * child nodes of the element.
   */
  children: ReactNode;
}

const Backdrop: CustomizedFunctionComponent<BackdropProps> = ({
    children,
}) => {
  return <div className={styles.container}>{children}</div>;
};

export default Backdrop;
