import React, { forwardRef } from 'react';

import Styles from "./styles.module.css";
import classNames from 'classnames';
import { Eye, EyeOff } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: React.ReactNode;
  isPassword?: boolean;
  error?: boolean;
}

const AuthInput = forwardRef<HTMLInputElement, InputProps>(({ icon, error, isPassword, ...props }, ref) => {
  const [secretView, setSecretView] = React.useState<boolean>(false);

  function handleSecretView() {
    setSecretView(!secretView);
  }

  return (
    <div className={Styles.inputContainer}>
      {icon && <span className={Styles.icon}>{icon}</span>}
      <input 
        className={classNames(Styles.input, { [Styles.error]: error })}
        autoComplete="off"
        type={isPassword && !secretView ? "password" : "text"}
        ref={ref} 
        {...props} 
      />
      {isPassword && !secretView && 
        <span className={Styles["icon-eye-active"]} onClick={handleSecretView}><Eye /></span>}
      {isPassword && secretView && 
        <span className={Styles["icon-eye-disabled"]} onClick={handleSecretView}><EyeOff /></span>}
    </div>
  );
});

AuthInput.displayName = 'Input';

export default AuthInput;