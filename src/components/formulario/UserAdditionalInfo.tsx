/* eslint-disable no-undef */
"use client";
import { JSX, RefObject, useEffect } from "react";
import IMask from "imask";

interface UserAdditionalInfoProps {
  idadeRef: RefObject<HTMLInputElement | null>;
  cepRef: RefObject<HTMLInputElement | null>;
  cpfRef: RefObject<HTMLInputElement | null>;
  estadoRef: RefObject<HTMLSelectElement | null>;
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
  useEffect(() => {
    // Máscara CPF
    if (cpfRef.current) {
      IMask(cpfRef.current, {
        mask: "000.000.000-00",
        lazy: false,
      });
    }

    // Máscara CEP
    if (cepRef.current) {
      IMask(cepRef.current, {
        mask: "00000-000",
        lazy: false,
      });
    }
  }, [cpfRef, cepRef]);

  const UFs = [
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO",
  ];

  return (
    <>
      <div className="flex gap-2 mt-2">
        <div className="flex-1 flex flex-col gap-1">
          <label className="text-gray-400 text-sm">Idade</label>
          <input
            ref={idadeRef}
            type="number"
            min={0}
            max={120}
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
          <select
            ref={estadoRef}
            className="bg-[#2a2a2a] p-2 rounded-sm text-sm text-white"
            defaultValue=""
          >
            <option value="" disabled>
              Selecione o estado
            </option>
            {UFs.map((uf) => (
              <option key={uf} value={uf}>
                {uf}
              </option>
            ))}
          </select>
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
