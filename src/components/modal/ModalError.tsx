"use client";

import { JSX } from "react";

interface ModalErrorProps {
  message: string | null;
}

export default function ModalError({
  message,
}: ModalErrorProps): JSX.Element | null {
  if (!message) return null;
  return <p className="text-red-400 mb-2">{message}</p>;
}
