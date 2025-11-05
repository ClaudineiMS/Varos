import { JSX } from "react";

export default function Filters(): JSX.Element {
  return (
    <div className="flex flex-wrap items-center gap-3 bg-lightDark p-4 rounded-xl">
      <input
        className="bg-dark px-3 py-2 rounded-lg text-sm"
        placeholder="Nome do consultor"
      />
      <input
        className="bg-dark px-3 py-2 rounded-lg text-sm"
        placeholder="Email do consultor"
      />
      <input
        className="bg-dark px-3 py-2 rounded-lg text-sm"
        placeholder="Período"
        type="date"
      />
    </div>
  );
}
