import { useUsersStore } from "@/store/users";
import { routes } from "./routes/routes.ts";
import { useProductStore } from "@/store/products.ts";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});
router.beforeEach(async (to) => {
  const userStore = useUsersStore();
  if (to.path == "/profile" && !userStore.currentUser) {
    return { path: "/auth" };
  }
  if (to.path == "/") {
    return { path: "/main" };
  }
});
router.afterEach(async (to, from) => {
  if (to.path !== from.path) {
    const productStore = useProductStore();
    productStore.setParamsToInitial();
  }
});
export default router;
