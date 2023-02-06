<script setup lang="ts">
import { onMounted } from 'vue';
import Nav from './components/Nav.vue';
import { useAuthStore } from './store/auth';

const { authAction } = useAuthStore();

onMounted(() => {
  authAction();
})
</script>

<template>
  <Nav />
  <div class="container mt-5">
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
