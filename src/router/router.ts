import { createRouter, createWebHistory } from "vue-router";
import MainPage from '../pages/MainPage/MainPage.vue'
import NoMatchPage from "../pages/NoMatchPage.vue";
import ShopPage from "../pages/ShopPage/ShopPage.vue";
import CartPage from "../pages/CartPage/CartPage.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: MainPage },
        { path: '/shop', component: ShopPage },
        { path: '/cart', component: CartPage },
        { path: '/*', component: NoMatchPage }
    ]
})
export default router;