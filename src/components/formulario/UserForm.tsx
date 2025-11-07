/* eslint-disable no-undef */
/* eslint-disable max-lines-per-function */
"use client";

import { useState, useRef, useEffect, JSX, FormEvent } from "react";
import { useRouter } from "next/navigation";

import HeaderButtons from "./HeaderButtons";
import ModalError from "./ModalError";
import UserTypeSelector from "./UserTypeSelector";
import UserBasicInfo from "./UserBasicInfo";
import UserAdditionalInfo from "./UserAdditionalInfo";
import AdditionalTabs from "./AdditionalTabs";
import ClientsInput from "./ClientsInput";
import UserDelete from "./UserDelete";

import { createUser, createConsultor } from "@/lib/api";
import { useUserEditByCpf } from "@/hooks/useUserEditByCpf";

export default function UserForm(): JSX.Element {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<"basic" | "edit" | "delete">(
    "basic"
  );
  const [userType, setUserType] = useState<"Cliente" | "Consultor">("Cliente");
  const [additionalTab, setAdditionalTab] = useState<"basicInfo" | "addClient">(
    "basicInfo"
  );
  const [cpfToEdit, setCpfToEdit] = useState("");
  const [userLoaded, setUserLoaded] = useState(false);

  const {
    user: editingUser,
    fetchUserByCpf,
    updateUserByCpf,
    loading: editLoading,
    error: editError,
  } = useUserEditByCpf();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const nomeRef = useRef<HTMLInputElement>(null);
  const telefoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const idadeRef = useRef<HTMLInputElement>(null);
  const cepRef = useRef<HTMLInputElement>(null);
  const cpfRef = useRef<HTMLInputElement>(null);
  const estadoRef = useRef<HTMLSelectElement>(null);
  const enderecoRef = useRef<HTMLInputElement>(null);
  const complementoRef = useRef<HTMLInputElement>(null);
  const clientesRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editingUser && userLoaded) {
      if (nomeRef.current) nomeRef.current.value = editingUser.nome || "";
      if (telefoneRef.current)
        telefoneRef.current.value = editingUser.telefone || "";
      if (emailRef.current) emailRef.current.value = editingUser.email || "";
      if (idadeRef.current)
        idadeRef.current.value = editingUser.idade?.toString() || "";
      if (cpfRef.current) cpfRef.current.value = editingUser.cpf || "";
      if (enderecoRef.current)
        enderecoRef.current.value = editingUser.endereco || "";
      if (complementoRef.current)
        complementoRef.current.value = editingUser.complemento || "";
      if (estadoRef.current) estadoRef.current.value = editingUser.estado || "";
      if (cepRef.current) cepRef.current.value = editingUser.cep || "";
      setUserType(
        editingUser.tipoUsuario === "Consultor" ? "Consultor" : "Cliente"
      );
    }
  }, [editingUser, userLoaded]);

  useEffect(() => {
    setAdditionalTab(userType === "Consultor" ? "addClient" : "basicInfo");
  }, [userType]);

  const resetEditState = (): void => {
    setCpfToEdit("");
    setUserLoaded(false);
    setError(null);
  };

  const handleFetchUser = async (): Promise<void> => {
    if (!cpfToEdit.trim()) return;
    setUserLoaded(false);
    await fetchUserByCpf(cpfToEdit);
    setUserLoaded(true);
  };

  const buildUserData = (): Record<string, unknown> => ({
    tipoUsuario: userType,
    nome: nomeRef.current?.value || "",
    telefone: telefoneRef.current?.value || "",
    email: emailRef.current?.value || "",
    idade: idadeRef.current?.value ? Number(idadeRef.current.value) : undefined,
    cpf: cpfRef.current?.value || "",
    endereco: enderecoRef.current?.value || "",
    complemento: complementoRef.current?.value || "",
    cep: cepRef.current?.value || "",
    estado: estadoRef.current?.value || "",
    clients:
      userType === "Consultor"
        ? clientesRef.current?.value
            ?.split(",")
            .map((c) => c.trim())
            .filter(Boolean) || []
        : [],
  });

  const handleUpdateOrCreate = async (data: any): Promise<void> => {
    if (activeTab === "edit" && editingUser) {
      await updateUserByCpf(editingUser.cpf ?? "", data);
    } else if (userType === "Consultor") {
      await createConsultor(data);
    } else {
      await createUser(data);
    }
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (activeTab === "edit" && !userLoaded) {
      resetEditState();
      setLoading(false);
      return;
    }

    const data = buildUserData();

    try {
      await handleUpdateOrCreate(data);
      router.push("/");
    } catch (err: any) {
      setError(err.message || "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  };

  const handleTabChange = (tab: "basic" | "edit" | "delete"): void => {
    if (activeTab === "edit" && userLoaded) resetEditState();
    setActiveTab(tab);
  };

  const getButtonLabel = (): string => {
    if (loading || editLoading) {
      return activeTab === "edit" ? "Atualizando..." : "Criando...";
    }
    return activeTab === "edit" ? "Atualizar" : "Criar";
  };

  return (
    <div className="w-full max-w-[700px] mx-auto p-6 bg-[#1e1e1e] rounded-xl shadow-lg">
      <HeaderButtons activeTab={activeTab} setActiveTab={handleTabChange} />
      <div className="border-t border-[rgba(255,255,255,0.1)] my-4" />

      {activeTab === "edit" && !userLoaded && (
        <div className="flex gap-2 mb-4">
          <input
            placeholder="Digite CPF para editar"
            className="px-2 py-1 rounded bg-[#2a2a2a] text-white w-full"
            value={cpfToEdit}
            onChange={(e) => setCpfToEdit(e.target.value)}
          />
          <button
            type="button"
            className="px-3 py-1 bg-yellow-600 rounded hover:bg-yellow-500 text-white"
            onClick={handleFetchUser}
          >
            Buscar
          </button>
        </div>
      )}

      {(activeTab === "basic" || (activeTab === "edit" && userLoaded)) && (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <h4 className="text-2sm font-semibold mb-1 text-white">
            {activeTab === "edit" ? "Editar Usuário" : "Criar Usuário"}
          </h4>

          <ModalError message={error || editError} />

          {activeTab !== "edit" && (
            <UserTypeSelector userType={userType} setUserType={setUserType} />
          )}

          <UserBasicInfo
            nomeRef={nomeRef}
            telefoneRef={telefoneRef}
            emailRef={emailRef}
          />

          <AdditionalTabs
            userType={userType}
            additionalTab={additionalTab}
            setAdditionalTab={
              userType === "Consultor" ? () => {} : setAdditionalTab
            }
          />

          {additionalTab === "basicInfo" && userType === "Cliente" && (
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
            <ClientsInput clientesRef={clientesRef} />
          )}

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="submit"
              disabled={loading || editLoading}
              className={`px-4 py-2 rounded text-white ${
                activeTab === "edit"
                  ? "bg-yellow-600 hover:bg-yellow-500"
                  : "bg-green-600 hover:bg-green-500"
              }`}
            >
              {getButtonLabel()}
            </button>
          </div>
        </form>
      )}

      {activeTab === "delete" && <UserDelete />}
    </div>
  );
}
