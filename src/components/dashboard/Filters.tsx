import { JSX } from "react";

interface FiltersProps {
  filters: {
    nome: string;
    email: string;
    data: string;
  };
  // eslint-disable-next-line no-unused-vars
  setFilters: (filters: { nome: string; email: string; data: string }) => void;
  fetchAllUsers?: () => void;
}

export default function Filters({
  filters,
  setFilters,
  fetchAllUsers,
}: FiltersProps): JSX.Element {
  const handleFilterChange = (
    field: keyof typeof filters,
    value: string
  ): void => {
    setFilters({ ...filters, [field]: value });
    if (value === "" && fetchAllUsers) {
      setFilters({ nome: "", email: "", data: "" });
      fetchAllUsers();
    }
  };

  return (
    <div className="mt-2 w-full border border-[rgba(255,255,255,0.08)] rounded-sm shadow-md backdrop-blur-sm transition hover:bg-[#333333]">
      <div className="flex flex-wrap items-center gap-3 bg-lightDark p-5 rounded-xl">
        Nome do consultor:
        <input
          className="bg-[#3a3a3a] px-3 py-2 rounded-sm text-sm text-white placeholder-gray-400"
          placeholder="Nome"
          value={filters.nome}
          onChange={(e) => handleFilterChange("nome", e.target.value)}
        />
        Email do consultor:
        <input
          className="bg-[#3a3a3a] px-3 py-2 rounded-sm text-sm text-white placeholder-gray-400"
          placeholder="Email"
          value={filters.email}
          onChange={(e) => handleFilterChange("email", e.target.value)}
        />
        Período:
        <input
          className="bg-[#3a3a3a] px-3 py-2 rounded-sm text-sm text-white placeholder-gray-400"
          type="date"
          value={filters.data}
          onChange={(e) => handleFilterChange("data", e.target.value)}
        />
      </div>
    </div>
  );
}
