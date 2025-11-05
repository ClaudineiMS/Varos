/* eslint-disable no-undef */
"use client";
import { JSX, useState, useRef, FormEvent } from "react";
import { useRouter } from "next/navigation";

import ModalError from "./ModalError";
import HeaderButtons from "./HeaderButtons";
import UserTypeSelector from "./UserTypeSelector";
import UserBasicInfo from "./UserBasicInfo";
import UserAdditionalInfo from "./UserAdditionalInfo";
import AdditionalTabs from "./AdditionalTabs";
import ClientsInput from "./ClientsInput";
import UserDelete from "./UserDelete";

import { CreateUserFormData } from "@/types/User";
import { createUser } from "@/lib/api";

export default function UserForm(): JSX.Element {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"basic" | "delete">("basic");
  const [userType, setUserType] = useState<"Cliente" | "Consultor">("Cliente");
  const [additionalTab, setAdditionalTab] = useState<"basicInfo" | "addClient">(
    "basicInfo"
  );
  const router = useRouter();

  const nomeRef = useRef<HTMLInputElement>(null);
  const telefoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const idadeRef = useRef<HTMLInputElement>(null);
  const cepRef = useRef<HTMLInputElement>(null);
  const cpfRef = useRef<HTMLInputElement>(null);
  const estadoRef = useRef<HTMLInputElement>(null);
  const enderecoRef = useRef<HTMLInputElement>(null);
  const complementoRef = useRef<HTMLInputElement>(null);
  const clientesRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const clients = clientesRef.current?.value
      ? clientesRef.current.value.split(",").map((c) => c.trim())
      : [];

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
      clients: userType === "Consultor" ? clients : [],
    };

    try {
      await createUser(data);
      router.push("/"); // volta para o dashboard
    } catch (err: any) {
      setError(err.message || "Erro desconhecido ao criar usuário");
    } finally {
      setLoading(false);
      // Limpar campos
      [
        nomeRef,
        telefoneRef,
        emailRef,
        idadeRef,
        cpfRef,
        enderecoRef,
        clientesRef,
      ].forEach((ref) => {
        if (ref.current) ref.current.value = "";
      });
    }
  };

  return (
    <div className="w-full max-w-[700px] mx-auto p-6 bg-[#1e1e1e] rounded-xl shadow-lg">
      <HeaderButtons activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="border-t border-[rgba(255,255,255,0.1)] my-4" />

      {activeTab === "basic" ? (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <h4 className="text-2sm font-semibold mb-1">Criar Usuário</h4>
          <ModalError message={error} />

          <UserTypeSelector userType={userType} setUserType={setUserType} />
          <UserBasicInfo
            nomeRef={nomeRef}
            telefoneRef={telefoneRef}
            emailRef={emailRef}
          />

          <AdditionalTabs
            userType={userType}
            additionalTab={additionalTab}
            setAdditionalTab={setAdditionalTab}
          />

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

          {additionalTab === "addClient" && userType === "Consultor" && (
            <ClientsInput clientesRef={clientesRef} />
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
        <div className="text-center">
          <UserDelete />
        </div>
      )}
    </div>
  );
}
