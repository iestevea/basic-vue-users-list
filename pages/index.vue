<template>
  <div class="container">
    <Header />
    <div class="github">
      <div class="employees-searcher">
        <input
          type="text"
          :value="organization"
          @keyup.enter="event => filterEmployees(event.target.value)"
          @blur="event => filterEmployees(event.target.value)"
        />
      </div>
      <div class="employees-wrapper" v-if="employees.length > 0">
        <div v-for="employee in employees" :key="employee.id">
          <CardEmployee :employee="employee" />
        </div>
      </div>
      <div v-else class="not-found-wrapper">
        <p>No hemos encontrado resultados</p>
      </div>
      <Pagination :page="page" :max="total" v-on:changePage="handlePage" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CardEmployee from "../components/CardEmployee.vue";
import Header from "../components/Header.vue";
import { Employee } from "../types";
import { employeeService } from "../services/employees";

export default Vue.extend({
  name: "Github",
  components: { CardEmployee, Header },
  data() {
    return {
      employees: [] as Employee[],
      organization: "lemoncode" as string,
      page: 1 as number,
      total: 0 as number
    };
  },
  methods: {
    storeOrg(org: string) {
      if (process.browser) {
        localStorage.setItem("org", org);
      }
    },
    getStorageOrg() {
      return process.browser ? localStorage.getItem("org") : "";
    },
    async filterEmployees(org: string) {
      this.organization = org;
      this.storeOrg(org);
      this.page = 1;
      const { employees, total } = await employeeService.getEmployees(
        org,
        this.page
      );
      this.employees = employees;
      this.total = total;
    },
    async handlePage(newPage: number) {
      this.page = newPage;
      const { employees, total } = await employeeService.getEmployees(
        this.organization,
        newPage
      );
      this.employees = employees;
      this.total = total;
    }
  },
  async created() {
    const { employees, total } = await employeeService.getEmployees();
    this.employees = employees;
    this.total = total;
    this.organization = this.getStorageOrg() as string;
  }
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap");
* > * {
  font-family: "Source Sans Pro", sans-serif;
}
body {
  margin: 0;
  padding: 0;
}
.container {
  margin: 0;
  padding: 0;
}
.github {
  padding: 1.5rem;
}
.employees-searcher {
  border: 1px solid gray;
  width: fit-content;
  border-radius: 8px;
}
.employees-searcher > input {
  border-radius: 8px;
  width: 200px;
  height: 30px;
  border: none;
  outline: none;
  padding-left: 8px;
}
.employees-wrapper {
  display: grid;
  margin-top: 2rem;
  grid-template-rows: repeat(auto-fill, 1fr);
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 3rem;
}
</style>
