import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { JSX } from "react";

import { User } from "@/types/User";

export default function TableRow({ user }: { user: User }): JSX.Element {
  const formatDate = (date: string): string => {
    return format(new Date(date), "dd/MM/yyyy 'às' HH:mm'h'", { locale: ptBR });
  };

  return (
    <tr className="border-b border-dark hover:bg-dark transition">
      <td className="px-4 py-3">{user.nome}</td>
      <td className="px-4 py-3">{user.email}</td>
      <td className="px-4 py-3">{user.telefone}</td>
      <td className="px-4 py-3">{user.cpf}</td>
      <td className="px-4 py-3">{user.idade} anos</td>
      <td className="px-4 py-3 truncate">{user.endereco}</td>
      <td className="px-4 py-3">{formatDate(user.criadoEm)}</td>
      <td className="px-4 py-3">{formatDate(user.atualizadoEm)}</td>
    </tr>
  );
}
