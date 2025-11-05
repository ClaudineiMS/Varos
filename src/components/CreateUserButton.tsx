"use client";

import { JSX } from "react";

interface CreateUserButtonProps {
  onClick?: () => void;
}

export default function CreateUserButton({
  onClick,
}: CreateUserButtonProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2"
    >
      Criar usuário <span className="text-xl">＋</span>
    </button>
  );
}
