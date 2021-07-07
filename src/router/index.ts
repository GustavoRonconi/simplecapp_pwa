import { createWebHistory, createRouter } from 'vue-router';

import HomePage from "@/views/HomePage.vue";
import Contact from "@/views/Contact.vue";

const routes = [
    {
        path: "/",
        name: "HomePage",
        component: HomePage,
    },
    {
        path: "/contact",
        name: "About",
        component: Contact,
    },
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;