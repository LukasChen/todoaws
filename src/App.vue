<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Ref } from 'vue';

import '@aws-amplify/ui-vue/styles.css';

import { Authenticator } from '@aws-amplify/ui-vue';
</script>

<template>
  <div>
    <h3>Hello World</h3>
    <authenticator>
      <template v-slot="{ user, signOut }">
        <h1>Hello {{ user.username }}</h1>
        <button @click="signOut">Sign Out</button>
      </template>
    </authenticator>
  </div>
</template>

<style scoped>

</style>
