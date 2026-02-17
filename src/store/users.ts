import type { User } from "@/types/types";
import { apiUser } from "@/services/api";
export const useUsersStore = defineStore(
  "users",
  () => {
    const users = ref<User[]>([]);
    const currentUser = ref<User | null>(null);
    const error = ref<string | null>(null);

    const fetchUsers = async () => {
      users.value = [];
      try {
        const response = await apiUser.get("/");
        users.value = response.data.users;
      } catch (err) {
        error.value = (err as Error).message;
        users.value = [];
        console.log(error.value);
      }
    };
    const login = (user: User) => {
      currentUser.value =
        user.password ==
        users.value.find((item) => item.username == user.username)?.password
          ? user
          : null;
    };

    return {
      users,
      fetchUsers,
      login,
      currentUser,
    };
  },
  {
    persist: {
      pick: ["currentUser"],
      storage: sessionStorage,
      key: "current-user",
    },
  },
);
