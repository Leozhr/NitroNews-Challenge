import { addTogglePasswordEvent } from '../../utils/secretViewPassword';
import styles from '@/components/AuthInput/styles.module.css';
import icons from "../../utils/icons";

interface AuthInputProps {
  id: string;
  icon: string;
  placeholder: string;
  type: string;
}

export function AuthInput({ id, icon, placeholder, type }: AuthInputProps) {
  return `
  <div id="${id}-register">
    <span class="${styles['icon']}"><img src="${icon}" alt="icon label" /></span>
    <input id="${id}" 
      class="${styles['input-container']}"
      autoComplete="off"
      placeholder="${placeholder}"
      type="${type}"
    />
    <span class="${styles['icon-eye-active']}"><img src="${icons.eye}" alt="icon password" /></span>
  </div>
`;
}

document.addEventListener('DOMContentLoaded', () => {
  addTogglePasswordEvent();
});