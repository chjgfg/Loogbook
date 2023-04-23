import {createApp} from 'vue'
import './style.css'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from "./router"
import {createPinia} from 'pinia'

import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

import '@imengyu/vue3-context-menu/lib/vue3-context-menu.css'
import ContextMenu from '@imengyu/vue3-context-menu'

import "./mock/mocks.js"
import "./mock/admin_mock.js"

library.add(fas);

let app = createApp(App);
app.use(ContextMenu);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.use(createPinia());
app.use(ElementPlus);
app.mount('#app');
