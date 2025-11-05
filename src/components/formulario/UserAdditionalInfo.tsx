/* eslint-disable no-undef */
"use client";
import { JSX, RefObject } from "react";

interface UserAdditionalInfoProps {
  idadeRef: RefObject<HTMLInputElement | null>;
  cepRef: RefObject<HTMLInputElement | null>;
  cpfRef: RefObject<HTMLInputElement | null>;
  estadoRef: RefObject<HTMLInputElement | null>;
  enderecoRef: RefObject<HTMLInputElement | null>;
  complementoRef: RefObject<HTMLInputElement | null>;
}

export default function UserAdditionalInfo({
  idadeRef,
  cepRef,
  cpfRef,
  estadoRef,
  enderecoRef,
  complementoRef,
}: UserAdditionalInfoProps): JSX.Element {
  return (
    <>
      <div className="flex gap-2 mt-2">
        <div className="flex-1 flex flex-col gap-1">
          <label className="text-gray-400 text-sm">Idade</label>
          <input
            ref={idadeRef}
            type="number"
            className="bg-[#2a2a2a] p-2 rounded-sm text-sm"
            placeholder="Idade"
          />
          <label className="text-gray-400 text-sm">CEP</label>
          <input
            ref={cepRef}
            className="bg-[#2a2a2a] p-2 rounded-sm text-sm"
            placeholder="CEP"
          />
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <label className="text-gray-400 text-sm">CPF</label>
          <input
            ref={cpfRef}
            className="bg-[#2a2a2a] p-2 rounded-sm text-sm"
            placeholder="CPF"
          />
          <label className="text-gray-400 text-sm">Estado</label>
          <input
            ref={estadoRef}
            className="bg-[#2a2a2a] p-2 rounded-sm text-sm"
            placeholder="Estado"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1 mt-2">
        <label className="text-gray-400 text-sm">Endereço</label>
        <input
          ref={enderecoRef}
          className="bg-[#2a2a2a] p-2 rounded-sm text-sm"
          placeholder="Endereço"
        />
        <label className="text-gray-400 text-sm mt-2">Complemento</label>
        <input
          ref={complementoRef}
          className="bg-[#2a2a2a] p-2 rounded-sm text-sm"
          placeholder="Complemento"
        />
      </div>
    </>
  );
}
