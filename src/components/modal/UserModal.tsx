"use client";

import { JSX, useState } from "react";

import ModalHeader from "./ModalHeader";
import ModalError from "./ModalError";
import ModalForm from "./ModalForm";

import { CreateUserFormData } from "@/types/User";
import { createUser } from "@/lib/api";

interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UserModal({
  isOpen,
  onClose,
}: UserModalProps): JSX.Element | null {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (data: CreateUserFormData): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      await createUser(data);
      onClose();
    } catch (err: any) {
      setError(err.message || "Erro desconhecido ao criar usuário");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed top-1/2 left-1/2 bg-[#1e1e1e] p-6 rounded-xl shadow-lg w-96 z-50 -translate-x-1/2 -translate-y-1/2">
      <ModalHeader title="Criar Usuário" />
      <ModalError message={error} />
      <ModalForm loading={loading} onSubmit={handleSubmit} onClose={onClose} />
    </div>
  );
}
