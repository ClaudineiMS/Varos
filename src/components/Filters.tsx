import { JSX } from "react";

export default function Filters(): JSX.Element {
  return (
    <div className="flex flex-wrap items-center gap-3 bg-lightDark p-4 rounded-xl">
      Nome do consultor:
      <input
        className="bg-dark px-3 py-2 rounded-lg text-sm"
        placeholder="Nome"
      />
      Email do consultor:
      <input
        className="bg-dark px-3 py-2 rounded-lg text-sm"
        placeholder="Email"
      />
      Período:
      <input className="bg-dark px-3 py-2 rounded-lg text-sm" type="date" />
    </div>
  );
}
