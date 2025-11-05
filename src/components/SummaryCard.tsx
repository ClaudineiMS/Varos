import { JSX } from "react";

export default function SummaryCard(): JSX.Element {
  return (
    <div className="bg-lightDark p-6 rounded-2xl shadow-md w-64">
      <p className="text-gray-400 text-sm">Total de clientes</p>
      <h2 className="text-4xl font-semibold mt-2">
        128 <span className="text-accent">↑</span>
      </h2>
      <p className="text-gray-500 text-xs mt-1">nos últimos 7 dias</p>
    </div>
  );
}
