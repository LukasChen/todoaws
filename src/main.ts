import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.scss';

import { router } from './router';

import App from './App.vue';

import { Amplify } from 'aws-amplify';
// @ts-ignore
import awsConfig from './aws-exports';

Amplify.configure(awsConfig);

createApp(App)
  .use(createPinia())
  .use(router)
  .mount('#app');
