// modules
import { ButtonHTMLAttributes } from 'react';
import { CustomizedFunctionComponent } from '../../util/helper';
// styles
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Add button title.
     */
    title: string;
}

const Button: CustomizedFunctionComponent<ButtonProps> = ({
    title,
    ...props
}) => {
    return <button {...props} type="button" className={styles.button}>{title}</button>;
};

export default Button;
