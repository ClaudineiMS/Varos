import { JSX } from "react";

import TableRow from "./TableRow";

import { User } from "@/types/User";

export default function Table({ users }: { users: User[] }): JSX.Element {
  return (
    <div className="mt-2 h-[55vh] w-full bg-[#1e1e1e] border border-[rgba(255,255,255,0.08)] rounded-sm  shadow-md backdrop-blur-sm transition hover:bg-[#333333]">
      <div className="overflow-x-auto mt-6 bg-lightDark rounded-2xl">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-dark">
              {[
                "Nome",
                "Email",
                "Telefone",
                "CPF",
                "Idade",
                "Endereço",
                "Criado em",
                "Atualizado em",
              ].map((header) => (
                <th key={header} className="px-4 py-3">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <TableRow key={user.id} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
