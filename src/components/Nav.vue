<script setup lang="ts">
import { useRouter } from 'vue-router';

import { useAuthStore } from '../store/auth';

const auth = useAuthStore();
const router = useRouter();

async function logout() {
  await auth.logout();
  router.push('/');
}
</script>

<template>

</template>
