"use client";

import { JSX } from "react";

import Header from "@/components/Header";
import SummaryCard from "@/components/SummaryCard";
import Filters from "@/components/Filters";
import CreateUserButton from "@/components/CreateUserButton";
import Table from "@/components/Table";
import { useUsers } from "@/hooks/useUsers";

export default function Dashboard(): JSX.Element {
  const { users, loading } = useUsers();

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
            rounded-3xl 
            p-10 
            space-y-8 
            mt-6 
            overflow-hidden
          "
        >
          <div className="flex justify-between items-end">
            <div
              className="
                    mt-2 
                    w-1/10
                    bg-linear-to-br 
                    from-[rgba(255,255,255,0.08)] 
                    to-[rgba(255,255,255,0.02)] 
                    border 
                    border-[rgba(255,255,255,0.1)] 
                    rounded-xl 
                    p-3 
                    shadow-lg 
                    backdrop-blur-sm
                    transition hover:bg-[rgba(255,255,255,0.1)]
                  "
            >
              <SummaryCard />
            </div>
            <div className="flex flex-col items-end">
              <CreateUserButton />
              <div className="mt-2 w-full">
                <div
                  className="
                    mt-2 
                    w-full 
                    bg-linear-to-br 
                    from-[rgba(255,255,255,0.08)] 
                    to-[rgba(255,255,255,0.02)] 
                    border 
                    border-[rgba(255,255,255,0.1)] 
                    rounded-xl 
                    p-1 
                    shadow-lg 
                    backdrop-blur-sm
                    transition hover:bg-[rgba(255,255,255,0.1)]
                  "
                >
                  <Filters />
                </div>
              </div>
            </div>
          </div>
          {loading ? (
            <p className="text-gray-400 text-center mt-10">
              Carregando usuários...
            </p>
          ) : (
            <div className="overflow-y-auto max-h-[70vh] pr-2">
              <Table users={users} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
