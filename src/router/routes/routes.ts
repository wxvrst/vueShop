export const routes = [
	{
		path: "/main",
		name: "main",
		component: () => import("@/pages/MainPage/MainPage.vue"),
	},
	{
		path: "/shop",
		name: "shop",
		component: () => import("@/pages/ShopPage/ShopPage.vue"),
	},
	{
		//Динамический
		path: "/product/:id",
		name: "product",
		component: () => import("@/pages/ProductPage/ProductPage.vue"),
		props: true, //Можно получать id в виде пропса?
	},
	{
		path: "/cart",
		name: "cart",
		component: () => import("@/pages/CartPage/CartPage.vue"),
	},
	{
		path: "/favorite",
		name: "favorite",
		component: () => import("@/pages/FavoritePage/FavoritePage.vue"),
	},
	{
		path: "/:pathMatch(.*)*",
		name: "404",
		component: () => import("@/pages/NoMatchPage.vue"),
	},
	{
		path: "/profile",
		name: "profile",
		component: () => import("@/pages/ProfilePage/ProfilePage.vue"),
	},
	{
		//Вложенный
		path: "/auth",
		name: "auth",
		component: () => import("@/pages/AuthPage/AuthPage.vue"),
		children: [
			{
				path: "",
				name: "login",
				component: () => import("@/pages/AuthPage/forms/AuthLoginForm.vue"),
			},
			{
				path: "registration",
				name: "registration",
				component: () =>
					import("@/pages/AuthPage/forms/AuthRegistrationForm.vue"),
			},
		],
	},
];
