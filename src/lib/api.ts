import { UserSummary } from "@/types/User";

export const api = {
  async get<T = unknown>(path: string): Promise<T> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`);

    if (!res.ok) {
      throw new Error("Erro ao buscar dados");
    }

    return res.json() as Promise<T>;
  },
};

// Função para buscar o total de usuários criados
export async function fetchUserSummary(): Promise<UserSummary> {
  return api.get<UserSummary>("/users/count");
}
