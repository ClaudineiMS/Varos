"use client";
import { JSX } from "react";

import { useSummary } from "@/hooks/useSummary";

export default function SummaryCard(): JSX.Element {
  const { summary, loading, error } = useSummary();

  if (loading) {
    return (
      <div className="bg-[#1e1e1e] p-6 rounded-sm shadow-md w-64 border border-[rgba(255,255,255,0.08)] transition hover:bg-[rgba(255,255,255,0.1)] flex flex-col items-center">
        <p className="text-gray-400 text-sm">Total de clientes</p>
        <h2 className="text-2xl font-semibold mt-2 text-gray-500">
          Carregando...
        </h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#1e1e1e] p-6 rounded-sm shadow-md w-64 border border-[rgba(255,255,255,0.08)] transition hover:bg-[rgba(255,255,255,0.1)] flex flex-col items-center">
        <p className="text-gray-400 text-sm">Total de clientes</p>
        <p className="text-red-400 text-sm mt-2">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-[#1e1e1e] p-4 rounded-sm shadow-md w-64 border border-[rgba(255,255,255,0.08)] transition hover:bg-[rgba(255,255,255,0.1)] flex flex-col items-center">
      <p className="text-gray-400 text-sm">Total de clientes</p>
      <h2 className="text-4xl font-semibold mt-2">
        {summary.total}{" "}
        <span
          className={`text-xl align-super ${
            summary.last7Days > 0 ? "text-green-400" : "text-gray-400"
          }`}
        >
          ↑{summary.last7Days}
        </span>
      </h2>
      <p className="text-gray-500 text-xs mt-1">nos últimos 7 dias</p>
    </div>
  );
}
