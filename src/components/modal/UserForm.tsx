/* eslint-disable no-undef */
"use client";
import { JSX, useState, useRef, FormEvent } from "react";

import ModalError from "./ModalError";
import HeaderButtons from "./HeaderButtons";
import UserTypeSelector from "./UserTypeSelector";
import UserBasicInfo from "./UserBasicInfo";
import UserAdditionalInfo from "./UserAdditionalInfo";

import { CreateUserFormData } from "@/types/User";
import { createUser } from "@/lib/api";

export default function UserForm(): JSX.Element {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"basic" | "delete">("basic");
  const [userType, setUserType] = useState("");
  const [additionalTab, setAdditionalTab] = useState<"basicInfo" | "addClient">(
    "basicInfo"
  );

  const nomeRef = useRef<HTMLInputElement>(null);
  const telefoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const idadeRef = useRef<HTMLInputElement>(null);
  const cepRef = useRef<HTMLInputElement>(null);
  const cpfRef = useRef<HTMLInputElement>(null);
  const estadoRef = useRef<HTMLInputElement>(null);
  const enderecoRef = useRef<HTMLInputElement>(null);
  const complementoRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const data: CreateUserFormData = {
      tipoUsuario: userType,
      nome: nomeRef.current?.value || "",
      telefone: telefoneRef.current?.value || "",
      email: emailRef.current?.value || "",
      idade: idadeRef.current?.value
        ? Number(idadeRef.current.value)
        : undefined,
      cpf: cpfRef.current?.value || "",
      endereco: enderecoRef.current?.value || "",
    };

    try {
      await createUser(data);
      alert("Usuário criado com sucesso!");
    } catch (err: any) {
      setError(err.message || "Erro desconhecido ao criar usuário");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[700px] mx-auto p-6 bg-[#1e1e1e] rounded-xl shadow-lg">
      <HeaderButtons activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="border-t border-[rgba(255,255,255,0.1)] my-4" />
      <h4 className="text-2sm font-semibold mb-6">Criar Usuário</h4>

      {activeTab === "basic" ? (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <ModalError message={error} />
          <UserTypeSelector userType={userType} setUserType={setUserType} />
          <UserBasicInfo
            nomeRef={nomeRef}
            telefoneRef={telefoneRef}
            emailRef={emailRef}
          />

          <div className="flex gap-2 mb-1 mt-4">
            <button
              type="button"
              onClick={() => setAdditionalTab("basicInfo")}
              className={`px-3 py-1 rounded-t-lg ${
                additionalTab === "basicInfo"
                  ? "bg-gray-600 text-white"
                  : "bg-[#2a2a2a] text-gray-200"
              }`}
            >
              Informações Básicas
            </button>
            <button
              type="button"
              onClick={() => setAdditionalTab("addClient")}
              className={`px-3 py-1 rounded-t-lg ${
                additionalTab === "addClient"
                  ? "bg-gray-600 text-white"
                  : "bg-[#2a2a2a] text-gray-200"
              }`}
            >
              Adicionar Cliente
            </button>
          </div>

          <div className="border-t border-[rgba(255,255,255,0.1)]" />

          {additionalTab === "basicInfo" && (
            <UserAdditionalInfo
              idadeRef={idadeRef}
              cepRef={cepRef}
              cpfRef={cpfRef}
              estadoRef={estadoRef}
              enderecoRef={enderecoRef}
              complementoRef={complementoRef}
            />
          )}
          {additionalTab === "addClient" && (
            <div className="p-2 bg-[#2a2a2a] rounded-b-lg flex flex-col gap-2">
              <label className="text-gray-300" htmlFor="clientes">
                Clientes
              </label>
              <input
                id="clientes"
                type="text"
                placeholder="Digite o nome do cliente"
                className="px-3 py-2 rounded bg-[#1e1e1e] text-white border border-gray-600 focus:outline-none focus:border-green-600"
              />
            </div>
          )}

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-green-600 rounded hover:bg-green-500 text-white"
            >
              {loading ? "Criando..." : "Criar"}
            </button>
          </div>
        </form>
      ) : (
        <div className="text-center text-gray-400 py-10">
          Tela de deletar usuário (em desenvolvimento)
        </div>
      )}
    </div>
  );
}
