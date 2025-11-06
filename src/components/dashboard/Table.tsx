import { JSX } from "react";

import TableRow from "./TableRow";

import { User } from "@/types/User";

export default function Table({ users }: { users: User[] }): JSX.Element {
  return (
    <div className="mt-2 w-full bg-[#1e1e1e] border border-[rgba(255,255,255,0.08)] rounded-sm shadow-md transition hover:bg-[#333333]">
      <div className="overflow-y-auto h-[55vh] bg-[#1e1e1e]/60 backdrop-blur-sm rounded-sm">
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
                <th
                  key={header}
                  className="px-4 py-3 sticky top-0 bg-[#1e1e1e]"
                >
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
