<template>
  <div class="header-wrapper">
    <img alt="logo" src="../assets/female_dev_icon.png" />
    <h1>Welcome to basic vue example!</h1>
    <div class="header-links">
      <a href="/">Github People Filter</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header"
});
</script>

<style>
.header-wrapper {
  display: flex;
  align-items: center;
  height: 80px;
  background-color: #93e5e9;
  color: white;
  padding: 0 1rem;
}
.header-wrapper > * + * {
  padding-left: 1rem;
}
.header-wrapper > img {
  max-height: 50%;
  border-radius: 45%;
}
.header-wrapper > h1 {
  flex-grow: 1;
}
.header-links {
  display: flex;
  justify-content: flex-end;
  width: fit-content;
  cursor: pointer;
}
.header-links > a {
  text-decoration: none;
  font-size: 18px;
  padding-right: 1rem;
  color: white;
  cursor: pointer;
}
</style>
