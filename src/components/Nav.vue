<script setup lang="ts">
import { useRouter } from 'vue-router';

import { useAuthStore } from '../store/auth';

const auth = useAuthStore();
const router = useRouter();

const user = auth.getUser;

console.log(user);

async function logout() {
  await auth.logout();
  router.push('/');
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container">
      <router-link class="navbar-brand" to="/">Flickr</router-link>
      <div class="collapse navbar-collapse demo-navwrapper">
        <ul class="navbar-nav">
          <li class="nav-item" v-if="!user">
            <a class="nav-link">Login</a>
          </li>
          <li class="nav-item" v-if="!user">
            <router-link class="btn btn-outline-primary" to="/signup">Sign Up</router-link>
          </li>
          <li class="nav-item" v-if="user">
            <router-link class="nav-link" to="/albums">Albums</router-link>
          </li>
          <span class="navbar-text navbar-seperator pr-2" v-if="user">|</span>
          <span class="navbar-text" v-if="user">Welcome {{ user.username }}</span>
          <li class="nav-item" v-if="user">
            <a class="nav-link" @click="logout">Sign Out</a>
          </li>
        </ul>
      </div>
    </div>
    {{ user }}
  </nav>
</template>

<style lang="scss">
.demo-navwrapper {
  flex-grow: revert;
}

.navbar-seperator {
  padding-right: 0.5rem;
}
</style>
