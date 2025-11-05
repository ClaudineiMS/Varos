"use client";
import { JSX, useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";

import { deleteUser } from "@/lib/api";

export default function UserDelete(): JSX.Element {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userId, setUserId] = useState<string>("");
  const router = useRouter();

  // eslint-disable-next-line no-undef
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setUserId(e.target.value.replace(/\D/g, ""));
  };

  const handleDelete = async (): Promise<void> => {
    if (!userId) {
      setError("ID do usuário não informado");
      return;
    }

    const idNumber = Number(userId);
    if (isNaN(idNumber) || idNumber <= 0) {
      setError("ID inválido");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await deleteUser(idNumber);
      router.push("/");
    } catch (err: any) {
      setError(err.message || "Erro desconhecido ao deletar usuário");
    } finally {
      setLoading(false);
      setUserId("");
    }
  };

  return (
    <div className="p-6 bg-[#1e1e1e] rounded-xl shadow-lg flex flex-col gap-4 items-center">
      <h4 className="text-lg font-semibold text-white">Deletar Usuário</h4>
      {error && <p className="text-red-500">{error}</p>}

      <input
        type="text"
        placeholder="Digite o ID do usuário"
        value={userId}
        onChange={handleChange}
        className="px-3 py-2 rounded bg-[#1e1e1e] text-white border border-gray-600 focus:outline-none focus:border-red-500 w-1/2 text-center"
      />

      <button
        onClick={handleDelete}
        disabled={loading}
        className="px-4 py-2 bg-red-600 rounded hover:bg-red-500 text-white mt-2"
      >
        {loading ? "Deletando..." : "Deletar Usuário"}
      </button>
    </div>
  );
}
