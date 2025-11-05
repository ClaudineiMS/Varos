"use client";
import { JSX } from "react";

interface ClientsInputProps {
  // eslint-disable-next-line no-undef
  clientesRef: React.RefObject<HTMLInputElement | null>;
}

export default function ClientsInput({
  clientesRef,
}: ClientsInputProps): JSX.Element {
  return (
    <div className="p-2 bg-[#2a2a2a] rounded-b-lg flex flex-col gap-2">
      <label className="text-gray-300" htmlFor="clientes">
        Clientes (separe por vírgula)
      </label>
      <input
        id="clientes"
        type="text"
        placeholder="Nome do cliente"
        ref={clientesRef}
        className="px-3 py-2 rounded bg-[#1e1e1e] text-white border border-gray-600 focus:outline-none focus:border-green-600"
      />
    </div>
  );
}
