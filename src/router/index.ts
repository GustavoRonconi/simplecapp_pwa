import { createWebHistory, createRouter } from 'vue-router';

import HomePage from "@/views/HomePage.vue";
import Contact from "@/views/Contact.vue";
import Register from "@/views/Register.vue";

const routes = [
    {
        path: "/",
        name: "HomePage",
        component: HomePage,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
    {
        path: "/ir-facil/register",
        name: "Register",
        component: Register,
    },
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;