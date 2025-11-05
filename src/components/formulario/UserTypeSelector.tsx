"use client";
import { JSX } from "react";

interface UserTypeSelectorProps {
  userType: "Cliente" | "Consultor";
  // eslint-disable-next-line no-undef
  setUserType: React.Dispatch<React.SetStateAction<"Cliente" | "Consultor">>;
}

export default function UserTypeSelector({
  userType,
  setUserType,
}: UserTypeSelectorProps): JSX.Element {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-gray-400 text-sm">Tipo do usuário</label>
      <select
        value={userType}
        onChange={(e) => setUserType(e.target.value as "Cliente" | "Consultor")}
        className="bg-[#2a2a2a] p-2 rounded-sm text-sm w-full"
        required
      >
        <option value="Cliente">Cliente</option>
        <option value="Consultor">Consultor</option>
      </select>
    </div>
  );
}
