<script setup lang="ts">
const items = [
	{
		title: "All products",
		links: [
			{ name: "Phones", href: "/" },
			{ name: "Whatch", href: "/" },
			{ name: "Tablet", href: "/" },
			{ name: "Laptops", href: "/" },
		],
	},
	{
		title: "Company",
		links: [
			{ name: "About", href: "/about" },
			{ name: "Support", href: "/support" },
		],
	},
	{
		title: "Support",
		links: [
			{ name: "Style Guide", href: "/" },
			{ name: "Licensing", href: "/" },
			{ name: "Change Log", href: "/" },
			{ name: "Contact", href: "/" },
		],
	},
	{
		title: "Follow us",
		links: [
			{ name: "Instagram", href: "/" },
			{ name: "Facebook", href: "/" },
			{ name: "LinkedIn", href: "/" },
			{ name: "YouTube", href: "/" },
		],
	},
];
</script>
<template>
	<footer class="flex gap-16 my-12 py-12 text-left border-t border-[#bcbcbc]">
		<div class="w-1/3 flex flex-col gap-2 items-start">
			<img src="../../public/logo.svg" alt="logo" class="h-6" />
			<span>
				Sign up for texts to be notified about our best offers on the
				perfect gifts.
			</span>
		</div>
		<div
			v-for="(item, index) in items"
			:key="index"
			class="flex flex-col gap-2"
		>
			<span class="text-xl font-semibold">{{ item.title }}</span>
			<router-link
				v-for="(link, index) in item.links"
				:key="index"
				:to="link.href"
				class="hover:underline w-fit"
			>
				{{ link.name }}
			</router-link>
		</div>
	</footer>
</template>
