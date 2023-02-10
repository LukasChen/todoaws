import { defineStore } from 'pinia';

import { DataStore } from '@aws-amplify/datastore';
import { Album } from '../models';
import type { LazyAlbum } from '../models';


export const useAlbumsStore = defineStore('albums', {
  state: () => ({
    error: null,
    albums: null as LazyAlbum | null
  }),
  actions: {
    async createAlbum(newAlbum: LazyAlbum) {
      await DataStore.save(newAlbum);
      
    }
  }
})
