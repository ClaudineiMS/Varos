export interface User {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
  idade: number;
  endereco: string;
  criadoEm: string;
  atualizadoEm: string;
}

export interface UserSummary {
  total: number;
  last7Days: number;
}

export interface CreateUserData {
  nome: string;
  email: string;
  telefone?: string;
  cpf?: string;
  idade?: number;
  endereco?: string;
}

export interface CreateUserFormData {
  tipoUsuario: string;
  nome: string;
  email: string;
  telefone?: string;
  cpf?: string;
  idade?: number;
  endereco?: string;
  cep?: string;
  estado?: string;
  complemento?: string;
}
