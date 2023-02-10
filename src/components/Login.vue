<script setup lang="ts">

import { useAuthStore } from '../store/auth';

let username: string = $ref("");
let password: string = $ref("");
let error: any = $ref();

let isLoading: boolean = $ref(false);

const auth = useAuthStore();

async function login() {
  try {
    isLoading = true;
    await auth.login(username, password);
    isLoading = false;
    console.log("login successful");
  } catch (err: any) {
    error = err;
    console.error(err);
  }
}
</script>

<template>
  <form class="text-center container" style="max-width: 300px" @submit.prevent="login">
    <div class="mb-4">
      <label for="username">User Name</label>
      <input class="form-control shadow-sm rounded" type="text" v-model="username" id="username" />
    </div>
    <div class="mb-2">
      <label for="username">Password</label>
      <input class="form-control shadow-sm rounded" type="password" v-model="password" />
    </div>
    <button type="submit" :class="{'disabled': isLoading}" class="btn btn-primary">
      <span v-if="!isLoading">Sign in</span>
      <span v-if="isLoading">Loading...</span>
    </button>
  </form>
  <p class="text-error">{{ error }}</p>
</template>

<style lang="scss" scoped>

</style>
