import { createRouter, createWebHistory } from 'vue-router';


import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Contacts from './pages/Contacts.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        }, {
            path: '/About',
            name: 'About',
            component: About
        }, {
            path: '/Contacts',
            name: 'Contacts',
            component: Contacts
        },
    ]
});
export { router };