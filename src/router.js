import { createRouter, createWebHistory } from 'vue-router';


import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Contacts from './pages/Contacts.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/proj-html-vuejs/home',
            name: 'Home',
            component: Home
        }, {
            path: '/proj-html-vuejs/about',
            name: 'About',
            component: About
        }, {
            path: '/proj-html-vuejs/contacts',
            name: 'Contacts',
            component: Contacts
        },
    ]
});
export { router };