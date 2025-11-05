"use client";
import { JSX } from "react";

interface UserTypeSelectorProps {
  userType: string;
  // eslint-disable-next-line no-unused-vars
  setUserType: (type: string) => void;
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
        onChange={(e) => setUserType(e.target.value)}
        className="bg-[#2a2a2a] p-2 rounded-sm text-sm w-full"
        required
      >
        <option value="">Selecione o tipo do usuário</option>
        <option value="admin">Admin</option>
        <option value="cliente">Cliente</option>
        <option value="outro">Outro</option>
      </select>
    </div>
  );
}
