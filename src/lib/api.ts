import axios from 'axios';
import { storage } from '../utils/storage';
import Constants from 'expo-constants'

// em dev, ele vai pegar o IP do servidor Expo automaticamente

const getBaseUrl = ()=> {
  const host = Constants.expoConfig?.hostUri?.split(':')[0];
  if(host) return `http://${host}:3100`;
  //fallback pra web/produção
  return process.env.EXPO_PUBLIC_BASE_URL ?? 'http://localhost:3100';
}

const api = axios.create({
    baseURL: getBaseUrl(),
});

// essa parte ai de cima basicamente é pra fazer o IP deixar de ser hardcoded e o app funcionar em qualquer IP

// removi o interceptor de request e coloquei uma função chamada setAuthToken
export function setAuthToken(token:string | null){
  if(token){
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }else{
    delete api.defaults.headers.common['Authorization']
  }
}

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

export interface Paciente{
  id:number
  no_usuario: string
  email_usuario: string
  nu_celular: string
  cpf:string
  data_nascimento: string
  genero: string
}

export async function criarPaciente(payload: PacientePayload) {
    const { data } = await api.post('/paciente', payload);
    return data;
}

export async function login(email: string, senha_usuario: string) {
  const { data } = await api.post<{ access_token: string ; id:number }>('/auth/login', {
    email_usuario: email, // Tinha que chamar "email_usuario" , não email
    senha_usuario: senha_usuario,
  })
  return data
}

export async function getMe(id:number){
  const {data} = await api.get(`/usuarios/unico/${id}`)
  return data
}

export async function atualizarUsuario(id:number, dados:{
  no_usuario?: string
  email_usuario?: string
  nu_celular?: string
  cpf?: string
  data_nascimento?: string // data, não dt
}){
  const {data} = await api.patch(`/usuarios/unico/editar/${id}`, dados)
  return data
}

// comentario