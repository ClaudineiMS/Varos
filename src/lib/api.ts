import { UserSummary } from "@/types/User";
import { CreateUserData } from "@/types/User";
import { User } from "@/types/User";

export const api = {
  async get<T = unknown>(path: string): Promise<T> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`);
    if (!res.ok) throw new Error("Erro ao buscar dados");
    return res.json() as Promise<T>;
  },

  async post<T = unknown>(path: string, body: any): Promise<T> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error("Erro ao enviar dados");
    return res.json() as Promise<T>;
  },
};

// Função para buscar o total de usuários criados
export async function fetchUserSummary(): Promise<UserSummary> {
  return api.get<UserSummary>("/users/count");
}

export async function createUser(data: CreateUserData): Promise<User> {
  try {
    return await api.post<User>("/users", data);
  } catch (err: any) {
    throw new Error(err.message || "Erro desconhecido ao criar usuário");
  }
}
