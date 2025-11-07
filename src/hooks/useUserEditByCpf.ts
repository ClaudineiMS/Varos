import { useState } from "react";

import { User, CreateUserData } from "@/types/User";
import {
  fetchUserByCpf as apiFetchUserByCpf,
  updateUserByCpf as apiUpdateUserByCpf,
} from "@/lib/api";

export function useUserEditByCpf(): Object {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Busca usuário pelo CPF
  const fetchUserByCpf = async (cpf: string): Promise<void> => {
    setLoading(true);
    setError(null);
    setUser(null); // limpa usuário anterior
    try {
      const data = await apiFetchUserByCpf(cpf);
      setUser(data);
    } catch (err: any) {
      setError(err.message || "Erro ao buscar usuário");
    } finally {
      setLoading(false);
    }
  };

  // Atualiza usuário pelo CPF
  const updateUserByCpf = async (
    cpf: string,
    data: CreateUserData
  ): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      const updatedUser = await apiUpdateUserByCpf(cpf, data);
      setUser(updatedUser);
    } catch (err: any) {
      setError(err.message || "Erro ao atualizar usuário");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Limpa os dados do usuário (útil se quiser resetar o form)
  const resetUser = (): void => {
    setUser(null);
    setError(null);
  };

  return { user, loading, error, fetchUserByCpf, updateUserByCpf, resetUser };
}
