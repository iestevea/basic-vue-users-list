<template>
  <div class="pagination-container">
    <button :disabled="page === 1" @click="prevPage">Anterior</button>
    <div>{{page}}</div>
    <button :disabled="page === max" @click="nextPage">Siguiente</button>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { Employee } from "../types/index";

export default Vue.extend({
  name: "CardEmployee",
  props: {
    page: { type: Number, required: true },
    max: { type: Number, required: true }
  },
  methods: {
    nextPage() {
      this.$emit("changePage", this.page + 1);
    },
    prevPage() {
      this.$emit("changePage", this.page - 1);
    }
  }
});
</script>

<style>
.pagination-container {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  max-height: 2rem;
}
.pagination-container > div {
  display: flex;
  justify-content: center;
  width: 2rem;
  margin: 0 0.5rem;
  background-color: #93e5e9;
  font-weight: bold;
  color: white;
  padding: 0.5rem;
  border-radius: 50%;
}
.pagination-container > button {
  border-radius: 5px;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
}
</style>
