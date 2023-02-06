<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useAuthStore } from '../store/auth';

let username: string = $ref("");
let password: string = $ref("");
let email: string = $ref("");
let error: string = $ref("");
let confirmPassword: boolean = $ref(false);
let code: string = $ref("");

const auth = useAuthStore();
const router = useRouter();

async function signUp() {
  if (!email || !password) return;
  await auth.signUp(username, password, email);
  confirmPassword = true;
}

async function confirmSignup() {
  if (!username || !code) return;
  await auth.confirmSignup(username, code);
  await auth.login(username, password);
  router.push('/albums');
}
</script>

<template>
  <div class="form-card">
    <form v-if="!confirmPassword" @submit.prevent="signUp">
      <div class="form-group">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control shadow-sm" v-model="email" id="email" />
      </div>
      <div class="row g-2">
        <div class="form-group col">
          <label for="username" class="form-label">User Name</label>
          <input type="text" class="form-control shadow-sm" v-model="username" id="username" />
        </div>
        <div class="form-group col mb-4">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control shadow-sm" v-model="password" id="password" />
        </div>
      </div>
      <button class="btn btn-outline-primary">Sign up</button>
    </form>
    <div class="text-center" v-if="confirmPassword">
      <h3 class="mb-5">Please confirm your email</h3>
      <label class="form-label">Code</label>
      <input class="form-control shadow-sm mb-2" v-model="code" type="text" />
      <button class="btn btn-primary" @click="confirmSignup">Confirm Code</button>
    </div>
  </div>
</template>
