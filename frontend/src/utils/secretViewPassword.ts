import authInputStyles from "../components/AuthInput/styles.module.css";
import eyeIcon from "../assets/icons/eye.svg";
import eyeOffIcon from "../assets/icons/eye-off.svg";

function togglePasswordVisibility(input: HTMLInputElement, iconImg: HTMLImageElement) {
  if (input.type === 'password') {
    input.type = 'text';
    iconImg.src = eyeOffIcon;
  } else {
    input.type = 'password';
    iconImg.src = eyeIcon;
  }
}

function setupToggleEvent(inputContainer: HTMLElement, iconContainer: HTMLElement) {
  const input = inputContainer.querySelector(`.${authInputStyles['input-container']}`) as HTMLInputElement;
  const icon = iconContainer.querySelector(`.${authInputStyles['icon-eye-active']}`) as HTMLSpanElement;
  const iconImg = icon.querySelector('img') as HTMLImageElement;

  if (input.type === 'password') {
    icon.style.display = 'flex';
    icon.addEventListener('click', () => togglePasswordVisibility(input, iconImg));
  }
}

export function addTogglePasswordEvent() {
  const passwordContainer = document.querySelector('#password-register') as HTMLElement;
  const confirmPasswordContainer = document.querySelector('#confirmPassword-register') as HTMLElement;

  setupToggleEvent(passwordContainer, passwordContainer);
  setupToggleEvent(confirmPasswordContainer, confirmPasswordContainer);
}