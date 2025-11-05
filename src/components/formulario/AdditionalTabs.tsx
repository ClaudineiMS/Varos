"use client";
import { JSX } from "react";

interface AdditionalTabsProps {
  userType: "Cliente" | "Consultor";
  additionalTab: "basicInfo" | "addClient";
  // eslint-disable-next-line no-unused-vars
  setAdditionalTab: (tab: "basicInfo" | "addClient") => void;
}

export default function AdditionalTabs({
  userType,
  additionalTab,
  setAdditionalTab,
}: AdditionalTabsProps): JSX.Element {
  return (
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
      {userType === "Consultor" && (
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
      )}
    </div>
  );
}
