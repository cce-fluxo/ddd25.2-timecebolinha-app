import * as SecureStore from "expo-secure-store";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { getMe, login as loginApi, Paciente } from "../lib/api";

function decodeJwt(token: string): { id: number; email: string } {
  const payload = token.split(".")[1]
  return JSON.parse(atob(payload))
}

// ─── Tipos ────────────────────────────────────────────────────────────────────

interface AuthContextType {
  usuario: Paciente | null
  token: string | null
  carregando: boolean
  login: (email: string, senha: string) => Promise<void>
  logout: () => void
}

// ─── Context ──────────────────────────────────────────────────────────────────

const AuthContext = createContext<AuthContextType | null>(null)

// ─── Provider ─────────────────────────────────────────────────────────────────

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<Paciente | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    async function verificarToken() {
      try {
        const tokenSalvo = await SecureStore.getItemAsync("access_token") // async, diferente do SW
        if (!tokenSalvo) return

        const { id } = decodeJwt(tokenSalvo)
        setToken(tokenSalvo)
        const dadosUsuario = await getMe(id)
        setUsuario(dadosUsuario)
      } catch {
        await SecureStore.deleteItemAsync("access_token") // token inválido/expirado
      } finally {
        setCarregando(false)
      }
    }
    verificarToken()
  }, [])

  async function login(email: string, senha: string) {
    const { access_token } = await loginApi(email, senha)
    await SecureStore.setItemAsync("access_token", access_token)
    const { id } = decodeJwt(access_token)
    const dadosUsuario = await getMe(id)
    setToken(access_token)
    setUsuario(dadosUsuario)
  }

  async function logout() {
    await SecureStore.deleteItemAsync("access_token")
    setToken(null)
    setUsuario(null)
  }

  return (
    <AuthContext.Provider value={{ usuario, token, carregando, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth deve ser usado dentro de <AuthProvider>")
  return ctx
}