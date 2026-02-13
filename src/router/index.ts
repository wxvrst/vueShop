import { createRouter, createWebHistory } from "vue-router";
import { useUsersStore } from "../store/users";
import { routes } from "./routes/routes.ts";
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
router.beforeEach(async (to) => {
  const userStore = useUsersStore();
  if (to.path == "/profile" && !userStore.currentUser) {
    return { path: "/auth" };
  }
});
export default router;
