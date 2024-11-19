// types.d.ts
export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface Session {
  user: User;
}
