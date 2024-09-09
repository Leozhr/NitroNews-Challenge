import { AuthInput } from "../../components/AuthInput";
import { Button } from "../../components/Button";
import { submitForm } from "../../utils/registerValidation";

import art from '@/assets/rafiki.webp';
import icons from '../../utils/icons';
import styles from './styles.module.css';

export function RegisterAccount() {
  const renderFormGroup = (id: string, icon: string, placeholder: string, type: string) => `
    <div class="${styles['register-form-group']}">
      ${AuthInput({ id, icon, placeholder, type })}
      <span id="${id}-error" class="${styles['register-form-error']}"></span>
    </div>
  `;

  return `
    <main>
      <section class="${styles['register-container']}">
        <article class="${styles['register-form-container']}">
          <header>
            <h1 class="${styles['register-form-title']}">
              Criar nova conta!
            </h1>
            <p class="${styles['register-form-subtitle']}">
              Crie sua conta agora e tenha acesso à plataforma de email marketing mais eficiente do mercado.
            </p>
          </header>
          <form class="${styles['register-form']}" id="register-form">
            ${renderFormGroup("name", icons.user, "Nome", "text")}
            ${renderFormGroup("email", icons.mail, "Email", "email")}
            ${renderFormGroup("password", icons.lock, "Senha", "password")}
            ${renderFormGroup("confirmPassword", icons.lockKeyhole, "Confirme sua senha", "password")}
            ${Button({ text: "Criar conta", type: "submit" })}
          </form>
        </article>
        <aside class="${styles['register-hero']}">
          <div class="${styles['register-hero-container']}">
            <img src="${art}" alt="email marketing banner" />
            <div>
              <h1 class="${styles['register-hero-title']}">Simplifique o Email Marketing da sua Empresa</h1>
              <p class="${styles['register-hero-subtitle']}">
                Plataforma prática de email marketing que permite criar, automatizar e acompanhar campanhas de forma eficiente, 
                ideal para empresas que buscam melhorar a comunicação com seus clientes.
              </p>
            </div>
          </div>
        </aside>
      </section>
    </main>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  submitForm(document.querySelector<HTMLFormElement>('#register-form')!)
});