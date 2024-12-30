import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
 
const options = {
    confirmButtonColor: '#41b882',
    cancelButtonColor: '#ff7674',
};

createApp(App)
.use(VueAxios, axios) 
.use(VueSweetalert2,options)
.use(router)
.mount('#app')
