"use client";

import { JSX } from "react";

interface ModalHeaderProps {
  title: string;
}

export default function ModalHeader({ title }: ModalHeaderProps): JSX.Element {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold">{title}</h2>
    </div>
  );
}
