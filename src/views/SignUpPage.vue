<script setup lang="ts">


let username: string = $ref("");
let password: string = $ref("");
let email: string = $ref("");
let error: string = $ref("");
let confirmPassword: boolean = $ref(false);
let code: string = $ref("");

async function signUp() {
  if (!email || !password) return;



}
</script>
<template>
  <div></div>
</template>
