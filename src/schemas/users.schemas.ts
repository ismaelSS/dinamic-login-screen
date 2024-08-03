import { z } from 'zod'

const noSpecialCharactersRegex = /^[A-Za-z0-9_\-\.]+$/;

export const userRegisterSchema = z.object({
  name: z.string().regex(noSpecialCharactersRegex, {
  message: "apenas os caracteres especiais, '_ - .' são permitidos",
  }).max(20, "deve conter no maximo 20 caracters").min(4, 'deve conter pelo menos 4 caracters').nonempty('esse campo é obrigatório'),
  email: z.string().email('deve ser um email valido').max(128, "deve conter no maximo 128 caracteres").nonempty('esse campo é obrigatório'),
  password: z.string().nonempty().min(8, "deve ter pelo menos 8 caracteres"),
  passwordConfirm: z.string().min(1, 'esse campo é obrigatório')
}).refine(({ password, passwordConfirm }) => password === passwordConfirm, {
  message: 'Campos não correspondem',
  path: ['passwordConfirm']
})

export const userLoginSchema = z.object({
  identificator: z.string().nonempty('preencha esse campo'),
  password: z.string().nonempty('preencha esse campo'),
})

export type tUserRegisterData = z.infer<typeof userRegisterSchema>;
export type tUserLoginData = z.infer<typeof userLoginSchema>;
