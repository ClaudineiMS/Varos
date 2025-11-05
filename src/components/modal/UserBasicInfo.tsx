/* eslint-disable no-undef */
"use client";
import { JSX } from "react";

interface UserBasicInfoProps {
  nomeRef: React.RefObject<HTMLInputElement | null>;
  telefoneRef: React.RefObject<HTMLInputElement | null>;
  emailRef: React.RefObject<HTMLInputElement | null>;
}

export default function UserBasicInfo({
  nomeRef,
  telefoneRef,
  emailRef,
}: UserBasicInfoProps): JSX.Element {
  return (
    <>
      <div className="flex gap-2 mt-2">
        <div className="flex-1 flex flex-col gap-1">
          <label className="text-gray-400 text-sm">Nome</label>
          <input
            ref={nomeRef}
            className="bg-[#2a2a2a] p-2 rounded-sm text-sm"
            placeholder="Nome"
            required
          />
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <label className="text-gray-400 text-sm">Telefone</label>
          <input
            ref={telefoneRef}
            className="bg-[#2a2a2a] p-2 rounded-sm text-sm"
            placeholder="Telefone"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1 mt-2">
        <label className="text-gray-400 text-sm">Email</label>
        <input
          ref={emailRef}
          type="email"
          className="bg-[#2a2a2a] p-2 rounded-sm text-sm"
          placeholder="Email"
          required
        />
      </div>
    </>
  );
}
