import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const api = axios.create({
    baseURL: process.env.EXPO_PUBLIC_BASE_URL,
});

// Interceptor de REQUEST: injeta o token JWT em toda requisição autenticada
api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('access_token')
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