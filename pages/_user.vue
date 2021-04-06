<template>
  <div class="container">
    <Header />
    <div class="employee-container">
      <h3>{{employee.name}} - {{employee.login}} </h3>
      <img :src="employee.avatar_url"/>
      <p>Company: {{employee.company}}</p>
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
      employee: {} as Employee,
      id: this.$route.params.user as string
    };
  },
  async created() {
    const employee = await employeeService.getEmployee(this.id);
    this.employee = employee;
  }
});
</script>

<style>
.employee-container {
  display: flex;
  flex-direction: column;
  width: min-content;
  border: 1px solid grey;
  border-radius: 4px;
  margin: 1.5rem auto;
  padding: 1rem;
}
.employee-container > img {
  max-width: 240px;
}
</style>
