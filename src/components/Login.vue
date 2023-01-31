<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';

import { useAuthStore } from '../store/auth';

let username: Ref<string> = ref("");
let password: Ref<string> = ref("");
let email: Ref<string> = ref("");
let error: Ref<string> = ref("");

const auth = useAuthStore()
</script>

<template>
  <form></form>
</template>

<style lang="scss" scoped>

</style>
