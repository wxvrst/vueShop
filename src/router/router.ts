import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: () => import("../pages/MainPage/MainPage.vue") },
    {
      path: "/shop",
      component: () => import("../pages/ShopPage/ShopPage.vue"),
    },
    {
      path: "/cart",
      component: () => import("../pages/CartPage/CartPage.vue"),
    },
    {
      path: "/favorite",
      component: () => import("../pages/FavoritePage/FavoritePage.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("../pages/NoMatchPage.vue"),
    },
  ],
});
export default router;
