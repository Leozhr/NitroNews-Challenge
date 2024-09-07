import Styles from './styles.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className={Styles.button} {...props}>{children}</button>
  )
}

export default Button
