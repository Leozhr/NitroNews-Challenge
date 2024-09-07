import { z } from "zod";

export const registerSchema = z.object({
  nome: z.string().min(3, { message: "Nome deve ter no mínimo 3 caracteres." }),
  email: z.string().email({ message: "E-mail inválido. Por favor, insira um e-mail correto." }).toLowerCase(),
  senha: z.string()
    .min(8, { message: "Senha deve ter no mínimo 8 caracteres" })
    .regex(/[a-z]/, { message: "Senha deve ter pelo menos uma letra minúscula." })
    .regex(/[A-Z]/, { message: "Senha deve ter pelo menos uma letra maiúscula." })
    .regex(/[0-9]/, { message: "Senha deve ter pelo menos um número." }),
  confirmacaoSenha: z.string().min(1, { message: "O campo de confirmação de senha não pode estar vazio." }),
}).refine(data => data.senha === data.confirmacaoSenha, {
  message: "Senhas informadas não coincidem.",
  path: ["confirmacaoSenha"],
});

export type RegisterSchema = z.infer<typeof registerSchema>;