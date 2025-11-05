/* eslint-disable no-undef */
"use client";

import { JSX, useRef, FormEvent } from "react";

import { CreateUserFormData } from "@/types/User";

interface ModalFormProps {
  loading: boolean;
  // eslint-disable-next-line no-unused-vars
  onSubmit: (data: CreateUserFormData) => void;
  onClose: () => void;
}

export default function ModalForm({
  loading,
  onSubmit,
  onClose,
}: ModalFormProps): JSX.Element {
  const nomeRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const telefoneRef = useRef<HTMLInputElement>(null);
  const cpfRef = useRef<HTMLInputElement>(null);
  const idadeRef = useRef<HTMLInputElement>(null);
  const enderecoRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    const data: CreateUserFormData = {
      nome: nomeRef.current?.value || "",
      email: emailRef.current?.value || "",
      telefone: telefoneRef.current?.value || "",
      cpf: cpfRef.current?.value || "",
      idade: idadeRef.current?.value
        ? Number(idadeRef.current.value)
        : undefined,
      endereco: enderecoRef.current?.value || "",
    };
    onSubmit(data);
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <input
        ref={nomeRef}
        className="bg-[#2a2a2a] p-2 rounded-sm text-sm"
        placeholder="Nome"
        required
      />
      <input
        ref={emailRef}
        className="bg-[#2a2a2a] p-2 rounded-sm text-sm"
        placeholder="Email"
        type="email"
        required
      />
      <input
        ref={telefoneRef}
        className="bg-[#2a2a2a] p-2 rounded-sm text-sm"
        placeholder="Telefone"
      />
      <input
        ref={cpfRef}
        className="bg-[#2a2a2a] p-2 rounded-sm text-sm"
        placeholder="CPF"
      />
      <input
        ref={idadeRef}
        className="bg-[#2a2a2a] p-2 rounded-sm text-sm"
        placeholder="Idade"
        type="number"
      />
      <input
        ref={enderecoRef}
        className="bg-[#2a2a2a] p-2 rounded-sm text-sm"
        placeholder="Endereço"
      />

      <div className="flex justify-end gap-2 mt-4">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
        >
          Cancelar
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-green-600 rounded hover:bg-green-500 text-white"
        >
          {loading ? "Criando..." : "Criar"}
        </button>
      </div>
    </form>
  );
}
