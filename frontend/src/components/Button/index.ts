import styles from './styles.module.css'

interface ButtonProps {
  text: string
  type?: 'button' | 'submit' | 'reset'
}

export function Button({ text, type }: ButtonProps) {
  return `<button class=${styles['button']} type="${type}">${text}</button>`
}
