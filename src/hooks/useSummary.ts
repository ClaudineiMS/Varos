"use client";

import { useEffect, useState } from "react";

import { fetchUserSummary } from "@/lib/api";
import { UserSummary } from "@/types/User";

interface UseSummaryReturn {
  summary: UserSummary;
  loading: boolean;
  error: string | null;
}

export function useSummary(): UseSummaryReturn {
  const [summary, setSummary] = useState<UserSummary>({
    total: 0,
    last7Days: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadSummary(): Promise<void> {
      try {
        const data = await fetchUserSummary();
        setSummary(data);
      } catch {
        const errorMessage = "Não foi possível carregar o resumo de usuários.";
        setError(errorMessage);
        throw new Error(errorMessage);
      } finally {
        setLoading(false);
      }
    }

    loadSummary();
  }, []);

  return { summary, loading, error };
}
