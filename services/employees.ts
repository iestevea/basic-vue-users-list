import { Employee, Response } from "@/types";
import { MAX_USERS } from "~/constants/constants";

export const employeeService = {
  async getEmployees(organization: string = "lemoncode", page: number = 1, max: number = MAX_USERS): Promise<Response> {
    const response: Employee[] = await fetch(`https://api.github.com/orgs/${organization}/members`)
      .then((response) => response.json())
      .then((json) => json);
    const responsePaginated: Employee[] = await fetch(`https://api.github.com/orgs/${organization}/members?page=${page}&per_page=${max}`)
      .then((response) => response.json())
      .then((json) => json);
    const totalEmployees = Math.ceil(response.length / MAX_USERS);
    return { employees: responsePaginated, total: totalEmployees }
  },
  async getEmployee(id: string) {
    const response: Employee = await fetch(`https://api.github.com/users/${id}`)
      .then((response) => response.json())
      .then((json) => json);
    return response;
  }
}
