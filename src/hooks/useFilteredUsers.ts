import { useEffect, useState } from "react";

import { api } from "@/lib/api";
import { User } from "@/types/User";

interface FilterParams {
  nome?: string;
  email?: string;
  data?: string;
}

export function useFilteredUsers(filters: FilterParams): {
  users: User[];
  loading: boolean;
} {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchFilteredUsers(): Promise<void> {
      setLoading(true);
      try {
        // eslint-disable-next-line no-undef
        const params = new URLSearchParams();

        if (filters.nome) params.append("nome", filters.nome);
        if (filters.email) params.append("email", filters.email);
        if (filters.data) params.append("data", filters.data);

        const response = await api.get<User[]>(`/users?${params.toString()}`);
        setUsers(response);
      } catch (error) {
        throw new Error(`Erro ${error}`);
      } finally {
        setLoading(false);
      }
    }

    fetchFilteredUsers();
  }, [filters]);

  return { users, loading };
}
