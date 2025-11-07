import { useEffect, useState } from "react";

import { api } from "@/lib/api";
import { User } from "@/types/User";

export function useUsers(): { users: User[]; loading: boolean } {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get<User[]>("/users")
      .then((users) => {
        setUsers(
          users.map((u) => ({
            id: u.id,
            tipoUsuario: u.tipoUsuario || "Cliente",
            nome: u.nome,
            email: u.email,
            telefone: u.telefone,
            cpf: u.cpf,
            idade: u.idade,
            endereco: u.endereco,
            criadoEm: u.criadoEm,
            atualizadoEm: u.atualizadoEm,
          }))
        );
      })
      .catch((err) => {
        throw new Error(`Erro ao buscar usuários: ${err}`);
      })
      .finally(() => setLoading(false));
  }, []);

  return { users, loading };
}
