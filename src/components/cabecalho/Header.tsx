import { JSX } from "react";

export default function Header(): JSX.Element {
  return (
    <header className="w-full bg-[#131313] border-b border-gray-800 flex items-center px-6 py-3">
      <img
        src="/images/Header.png"
        alt="Header Varos"
        className="h-10 object-contain"
      />
    </header>
  );
}
