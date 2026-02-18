import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
// import Components from "unplugin-vue-components/vite";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "url";
export default defineConfig({
	base: "/vueShop/",
	plugins: [
		vue({
			features: {
				propsDestructure: true,
			},
		}),
		tailwindcss(),
		//Не нужно каждый раз импортировать модули, поддерживает tree-shaking
		AutoImport({
			imports: [
				"vue",
				"pinia",
				{
					"vue-router": [
						"createRouter",
						"createWebHistory",
						"useRouter",
						"useRoute",
						"useLink",
						"onBeforeRouteLeave",
						"onBeforeRouteUpdate",
					],
				},
			],
			//Чтобы ts на ругался
			dts: "src/auto-imports.d.ts",
		}),
		//Тот же автоимпорт, но компонентов
		// Components({
		//   dts: "src/components.d.ts",
		//   dirs: ["src/shared/ui"],
		// }),
	],
	//Для более удобный путей
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
	// Смены портов
	server: {
		port: 8080,
	},
	preview: {
		port: 8080,
	},
});
