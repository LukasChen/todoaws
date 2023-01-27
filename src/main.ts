import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import { Amplify } from 'aws-amplify';
// @ts-ignore
import awsConfig from './aws-exports';

Amplify.configure(awsConfig);

createApp(App).mount('#app');
