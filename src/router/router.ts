import { createRouter, createWebHistory } from "vue-router";
import MainPage from '../pages/MainPage.vue'
import NoMatchPage from "../pages/NoMatchPage.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: MainPage },
        { path: '/*', component: NoMatchPage }
    ]
})
export default router;