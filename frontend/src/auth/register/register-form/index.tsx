import { registerSchema, type RegisterSchema } from "./validationSchema"
import { CircleUser, LoaderCircle, Lock, LockKeyhole, Mail} from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { registerUser } from "../../../services/auth-service"
import AuthInput from "../../../components/auth-input"
import Button from "../../../components/button"

import Styles from "./styles.module.css"

export default function RegisterForm() {
  const { register, handleSubmit, formState: { errors }, trigger } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  })

  const [userExists, setUserExists] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleRegister = async (data: RegisterSchema) => {
    try {
      setIsLoading(true)
      await registerUser(data)
        .then(() => {
          alert("Conta criada com sucesso!")
          setUserExists('')
        })
        .catch(error => { 
          if (error.response.data.tipoErro === "USUARIO_EXISTENTE") {
            setUserExists('Já existe uma conta com esse e-mail. Tente outro.')
          }
        });
      setIsLoading(false)
    } catch (error) {
      console.error(error)
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(handleRegister)} className={Styles["register-form"]}>
      <div className={Styles["register-form-group"]}>
        <AuthInput 
          icon={<CircleUser size={22} />}
          placeholder="Nome"
          error={!!errors.nome}
          {...register("nome", { onBlur: () => trigger("nome") })} 
        />
        {errors.nome && 
          <span className={Styles["register-form-error"]}>{errors.nome.message}</span>}
      </div>
      <div className={Styles["register-form-group"]}>
        <AuthInput 
          icon={<Mail size={22} />} 
          placeholder="Email" 
          error={!!errors.email || !!userExists}
          onFocus={() => setUserExists('')}
          {...register("email", { onBlur: () => trigger("email") })} 
        />
        {(errors.email || userExists) && 
          <span className={Styles["register-form-error"]}>{errors.email?.message || userExists}</span>}
      </div>
      <div className={Styles["register-form-group"]}>
        <AuthInput 
          icon={<Lock size={22} />} 
          placeholder="Senha" 
          error={!!errors.senha}
          isPassword
          {...register("senha", { onBlur: () => trigger("senha") }) } 
        />
        {errors.senha &&
          <span className={Styles["register-form-error"]}>{errors.senha.message}</span>
        }
      </div>
      <div className={Styles["register-form-group"]}>
        <AuthInput 
          icon={<LockKeyhole size={22} />} 
          placeholder="Confirmar Senha" 
          error={!!errors.confirmacaoSenha}
          isPassword
          {...register("confirmacaoSenha", { onBlur: () => trigger("confirmacaoSenha") }) } 
        />
        {errors.confirmacaoSenha && 
          <span className={Styles["register-form-error"]}>{errors.confirmacaoSenha.message}</span>}
      </div>

      <Button type="submit" disabled={isLoading}>
        {isLoading ? <LoaderCircle size={20} className={Styles["register-form-loader"]} /> : "Criar conta"}
      </Button>
    </form>
  )
}

