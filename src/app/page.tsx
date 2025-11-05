"use client";

import { JSX, useState } from "react";

import Header from "@/components/cabecalho/Header";
import SummaryCard from "@/components/dashboard/SummaryCard";
import Filters from "@/components/dashboard/Filters";
import CreateUserButton from "@/components/dashboard/CreateUserButton";
import Table from "@/components/dashboard/Table";
import { useFilteredUsers } from "@/hooks/useFilteredUsers";

export default function Dashboard(): JSX.Element {
  const [filters, setFilters] = useState({ nome: "", email: "", data: "" });
  const { users, loading } = useFilteredUsers(filters);

  return (
    <div className="min-h-screen bg-[#131313] text-white flex flex-col">
      <Header />
      <main className="flex justify-center flex-1 p-6">
        <div
          className="
            w-full 
            max-w-[95%] 
            h-[80vh] 
            backdrop-blur-lg 
            bg-[rgba(30,30,30,0.6)] 
            border border-[rgba(255,255,255,0.08)] 
            shadow-2xl 
            rounded-sm 
            p-10 
            space-y-8 
            mt-6 
            overflow-hidden
          "
        >
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 w-full">
            <SummaryCard />
            <div className="flex flex-col w-full lg:w-auto items-start lg:items-end gap-4">
              <CreateUserButton />
              <Filters filters={filters} setFilters={setFilters} />
            </div>
          </div>

          {loading ? (
            <p className="text-gray-400 text-center mt-10">
              Carregando usuários...
            </p>
          ) : (
            <div className="overflow-y-auto max-h-[70vh] w-full">
              <Table users={users} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
