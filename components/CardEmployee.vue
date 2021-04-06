<template>
  <NuxtLink :to="employee.login">
    <div class="employee-card" to>
      <img alt="logo" :src="employee.avatar_url" />
      <h2>{{employee.login}}</h2>
    </div>
  </NuxtLink>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { Employee } from "../types/index";

export default Vue.extend({
  name: "CardEmployee",
  props: { employee: { type: Object as PropType<Employee>, required: true } }
});
</script>

<style>
a {
  text-decoration: none;
  color: black;
}
.employee-card {
  display: flex;
  align-items: center;
  height: 60px;
  padding: 1rem;
  border: 1px solid grey;
  border-radius: 5px;
  max-width: 300px;
  cursor: pointer;
}
.employee-card > h2 {
  margin-left: 8px;
}
.employee-card > img {
  max-height: 100%;
  border-radius: 50%;
}
</style>
