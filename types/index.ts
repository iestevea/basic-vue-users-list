export interface Employee {
  id: number;
  name: string;
  company: string;
  bio: string;
  img: string;
  avatar_url: string;
  login: string;
}

export interface Response {
  employees: Employee[];
  total: number;
}
