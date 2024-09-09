import Styles from "./styles.module.css"
import RegisterForm from "../register/forms"

import storyset from "../../assets/rafiki.webp"

export default function RegisterAccount() {
  return (
    <main>
      <section className={Styles["register-container"]}>
        <article className={Styles["register-form-container"]}>
          <header>
            <h1 className={Styles["register-form-title"]}>
              Criar nova conta!
            </h1>
            <p className={Styles["register-form-subtitle"]}>
              Crie sua conta agora e tenha acesso à plataforma de email marketing mais eficiente do mercado.
            </p>
          </header>
          <RegisterForm />
        </article>
        <aside className={Styles["register-hero"]}>
          <div className={Styles["register-hero-container"]}>
            <img src={storyset} alt="email marketing" />
            <div>
              <h1 className={Styles["register-hero-title"]}>Simplifique o Email Marketing da sua Empresa</h1>
              <p className={Styles["register-hero-subtitle"]}>
                Plataforma prática de email marketing que permite criar, automatizar e acompanhar campanhas de forma eficiente,
                ideal para empresas que buscam melhorar a comunicação com seus clientes.
              </p>
            </div>
          </div>
        </aside>
      </section>
    </main>
  )
}