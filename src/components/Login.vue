<script setup lang="ts">

import { useAuthStore } from '../store/auth';

let username: string = $ref("");
let password: string = $ref("");
let email: string = $ref("");
let error: any = $ref("");

const auth = useAuthStore();

async function login() {
  try {
    await auth.login(username, password);
  } catch (err: any) {
    error = err;
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
    <button class="btn btn-primary">Sign in</button>
  </form>
  <p class="text-error">{{ error.messages }}</p>
</template>

<style lang="scss" scoped>

</style>
