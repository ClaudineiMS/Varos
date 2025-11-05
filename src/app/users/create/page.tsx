"use client";

import { JSX, useState } from "react";

import UserForm from "@/components/modal/UserForm";

export default function CreateUserPage(): JSX.Element {
  const [submitted] = useState(false);

  return (
    <div className="min-h-screen bg-[#131313] text-white flex flex-col items-center justify-start pt-6">
      <div className="w-full max-w-3xl p-6 rounded-xl shadow-lg">
        <UserForm />
        {submitted && (
          <p className="text-green-400 mt-4">Usuário criado com sucesso!</p>
        )}
      </div>
    </div>
  );
}
