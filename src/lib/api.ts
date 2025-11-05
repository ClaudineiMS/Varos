export const api = {
  async get<T = unknown>(path: string): Promise<T> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`);

    if (!res.ok) {
      throw new Error("Erro ao buscar dados");
    }

    return res.json() as Promise<T>;
  },
};
