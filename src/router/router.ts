import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../pages/MainPage/MainPage.vue";
import NoMatchPage from "../pages/NoMatchPage.vue";
import ShopPage from "../pages/ShopPage/ShopPage.vue";
import CartPage from "../pages/CartPage/CartPage.vue";
import FavoritePage from "../pages/FavoritePage/FavoritePage.vue";
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: "/", component: MainPage },
		{ path: "/shop", component: ShopPage },
		{ path: "/cart", component: CartPage },
		{ path: "/favorite", component: FavoritePage },
		{ path: "/:pathMatch(.*)*", component: NoMatchPage },
	],
});
export default router;
