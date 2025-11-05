"use client";
import { JSX } from "react";

interface HeaderButtonsProps {
  activeTab: "basic" | "delete";
  // eslint-disable-next-line no-unused-vars
  setActiveTab: (tab: "basic" | "delete") => void;
}

export default function HeaderButtons({
  activeTab,
  setActiveTab,
}: HeaderButtonsProps): JSX.Element {
  return (
    <div className="flex gap-2 mb-4 justify-end">
      <button
        className={`px-3 py-1 rounded-[48] border ${
          activeTab === "basic"
            ? "bg-green-600 text-white"
            : "bg-[#2a2a2a] text-gray-200"
        } hover:bg-green-500 transition`}
        onClick={() => setActiveTab("basic")}
      >
        Criar Usuário
      </button>
      <button
        className={`px-3 py-1 rounded-[48] border ${
          activeTab === "delete"
            ? "bg-red-600 text-white"
            : "bg-[#2a2a2a] text-gray-200"
        } hover:bg-red-500 transition`}
        onClick={() => setActiveTab("delete")}
      >
        Deletar Usuário
      </button>
    </div>
  );
}
