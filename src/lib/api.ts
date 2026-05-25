import axios from 'axios';
import { storage } from '../utils/storage';

const api = axios.create({
    baseURL: process.env.EXPO_PUBLIC_BASE_URL,
});

// Interceptor de REQUEST: injeta o token JWT em toda requisição autenticada
api.interceptors.request.use(async (config) => {
  const token = await storage.getItem('access_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Interceptor de RESPONSE: extrai a mensagem de erro do backend de forma padronizada
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const mensagem =
      error.response?.data?.message ?? error.message ?? 'Erro desconhecido'
    return Promise.reject(new Error(mensagem))
  }
)

export default api;

export interface Paciente {
  id: number
  no_usuario: string
  email_usuario: string
  nu_celular: string
  cpf: string
  data_nascimento: string
}

export interface PacientePayload {
    rg: string;
    usuario: {
        no_usuario: string;
        email_usuario: string;
        senha_usuario: string;
        cpf: string;
        nu_celular: string;
        genero: 'Masculino' | 'Feminino' | 'Outros' | 'NaoInformado';
        data_nascimento: string;
    }
}

export async function criarPaciente(payload: PacientePayload) {
    const { data } = await api.post('/paciente', payload);
    return data;
}

export async function login(email: string, senha_usuario: string) {
  const { data } = await api.post<{ access_token: string ; id:number }>('/auth/login', {
    email: email,
    senha_usuario: senha_usuario,
  })
  return data
}

export async function getUsuario(id:number){
  const {data} = await api.get<Paciente>(`/usuarios/unico/${id}`)
  return data
}

export const getMe = getUsuario

export async function atualizarUsuario(id:number, dados:{
  no_usuario?: string
  email_usuario?: string
  nu_celular?: string
  cpf?: string
  dt_nascimento?: string
}){
  const {data} = await api.patch(`/usuarios/unico/editar/${id}`, dados)
  return data
}