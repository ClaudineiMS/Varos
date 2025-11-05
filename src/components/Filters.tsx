import { JSX } from "react";

export default function Filters(): JSX.Element {
  return (
    <div className="mt-2 w-full border border-[rgba(255,255,255,0.08)] rounded-sm shadow-md backdrop-blur-sm transition  hover:bg-[#333333]">
      <div className="flex flex-wrap items-center gap-3 bg-lightDark p-5 rounded-xl">
        Nome do consultor:
        <input
          className="bg-dark px-3 py-2 rounded-sm text-sm"
          placeholder="Nome"
        />
        Email do consultor:
        <input
          className="bg-dark px-3 py-2 rounded-sm text-sm"
          placeholder="Email"
        />
        Período:
        <input className="bg-dark px-3 py-2 rounded-sm text-sm" type="date" />
      </div>
    </div>
  );
}
