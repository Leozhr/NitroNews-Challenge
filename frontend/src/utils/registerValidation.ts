import { registerUser } from '../services/auth';

import loader from '../assets/icons/loader.svg';
import buttonStyles from '../components/Button/styles.module.css';
import authInputStyles from '../components/AuthInput/styles.module.css';

import Toastify from 'toastify-js'

interface FormData {
  nome: string;
  email: string;
  senha: string;
  confirmacaoSenha: string;
}

export function submitForm(form: HTMLFormElement) {
  const elements = {
    name: document.getElementById('name') as HTMLFormElement,
    email: document.getElementById('email') as HTMLFormElement,
    password: document.getElementById('password') as HTMLFormElement,
    confirmPassword: document.getElementById('confirmPassword') as HTMLFormElement,
  };

  const validators = {
    name: (value: string) => value.length >= 3 || 'Nome deve ter no mínimo 3 caracteres.',
    email: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || 'E-mail inválido. Por favor, insira um e-mail correto.',
    password: (value: string) => {
      const minLength = 8;
      const hasLowerCase = /[a-z]/.test(value);
      const hasUpperCase = /[A-Z]/.test(value);
      const hasNumber = /[0-9]/.test(value);

      if (value.length < minLength) return 'Senha deve ter no mínimo 8 caracteres.';
      if (!hasLowerCase) return 'Senha deve ter pelo menos uma letra minúscula.';
      if (!hasUpperCase) return 'Senha deve ter pelo menos uma letra maiúscula.';
      if (!hasNumber) return 'Senha deve ter pelo menos um número.';
      return true;
    },
    confirmPassword: (value: string, passwordValue?: string) => {
      if (!value) return 'O campo de confirmação de senha não pode estar vazio.';
      return value === passwordValue || 'Senhas informadas não coincidem.';
    },
  };

  const showError = (input: HTMLFormElement, message: string) => {
    input.classList.add(authInputStyles['error']);
    const errorElement = document.querySelector(`#${input.id}-error`);
    if (errorElement) errorElement.textContent = message;
  };

  const clearError = (input: HTMLFormElement) => {
    input.classList.remove(authInputStyles['error']);
    const errorElement = document.querySelector(`#${input.id}-error`);
    if (errorElement) errorElement.textContent = '';
  };

  const validateField = (input: HTMLFormElement, validator: (value: string, passwordValue?: string) => string | true) => {
    const value = input.value;
    const passwordValue = elements.password.value;
    const validationResult = validator(value, passwordValue);
    if (validationResult === true) {
      clearError(input);
      return true;
    } else {
      showError(input, validationResult as string);
      return false;
    }
  };

  const validateForm = () => {
    const isNameValid = validateField(elements.name, validators.name);
    const isEmailValid = validateField(elements.email, validators.email);
    const isPasswordValid = validateField(elements.password, validators.password);
    const isConfirmPasswordValid = validateField(elements.confirmPassword, validators.confirmPassword);
    return isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid;
  };

  const setLoading = (isLoading: boolean) => {
    const button = document.querySelector(`.${buttonStyles['button']}`) as HTMLButtonElement;
    button.disabled = isLoading;
    button.textContent = isLoading ? '' : 'Criar conta';

    if (isLoading) {
      const loadingIcon = document.createElement('img');
      loadingIcon.src = loader;
      loadingIcon.alt = 'Loading...';
      loadingIcon.classList.add(buttonStyles['loading-icon']);
      button.appendChild(loadingIcon);
    } else {
      const icon = button.querySelector(`.${buttonStyles['loading-icon']}`);
      if (icon) icon.remove();
    }
  };

  const handleSubmit = async (formData: FormData) => {
    try {
      setLoading(true);
      await registerUser(formData);
      alert('Conta criada com sucesso!');
    } catch (error: any) {
      console.error(error);
      if (error.response?.data?.tipoErro === 'USUARIO_EXISTENTE') {
        showError(elements.email, 'Já existe uma conta com esse e-mail. Tente outro.');
      } else {
        Toastify({
          text: "Erro inesperado. Por favor, tente novamente mais tarde!",
          className: "error",
          style: {
            background: "var(--error)",
          }
        }).showToast();
      }
    } finally {
      setLoading(false);
    }
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validateForm()) {
      const formData: FormData = {
        nome: elements.name.value,
        email: elements.email.value,
        senha: elements.password.value,
        confirmacaoSenha: elements.confirmPassword.value,
      };
      handleSubmit(formData);
    }
  });

  Object.values(elements).forEach((element) => {
    element.addEventListener('blur', () => validateField(element, validators[element.id as keyof typeof validators]));
  });
}