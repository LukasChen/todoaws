<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Ref } from 'vue';

// @ts-ignore
import { DataStore } from '@aws-amplify/datastore';
import { Authors, LazyAuthors } from './models';

let authors: Ref<LazyAuthors[]> = ref([]);
let firstName: Ref<string> = ref("Sigma");
let lastName: Ref<string> = ref("Male");

async function createAuthor() {
  await DataStore.save(
    new Authors({
      "first_name": firstName.value,
      "last_name": lastName.value,
      "Posts": [],
    })
  );
  queryAuthors();
}

async function queryAuthors() {
  const models = await DataStore.query(Authors);
  authors.value = models;
  console.log(models);
}

async function deleteAuthor(id: string) {
  const modelToDelete = await DataStore.query(Authors, id);
  if (modelToDelete !== undefined) {
    DataStore.delete(modelToDelete);
  }
  queryAuthors();
}

onMounted(() => {
  queryAuthors();
});
</script>

<template>
  <div>
    <h3>Hello World</h3>
    <button class="btn" @click="createAuthor">Create Author</button>
    <button class="btn btn-success" @click="queryAuthors">Fetch Authors</button>
    <ul>
      <li v-for="author in authors" :key="author.id">
        {{ author.first_name }} {{ author.last_name }}
        <button class="btn btn-danger" @click="deleteAuthor(author.id)">Delete</button>
      </li>
    </ul>
    <input class="form-control" v-model="firstName" />
    <input class="form-control" v-model="lastName" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
