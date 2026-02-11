<script setup lang="ts"></script>
<template>
	<header class="flex justify-between w-full my-6">
		<router-link to="/"
			><img src="../../assets/logo.svg" alt="logo"
		/></router-link>
		<div class="flex gap-8">
			<router-link to="/shop">ALL PRODUCTS</router-link>
			<router-link to="/solutions">SOLUTIONS</router-link>
			<!-- rewrite solutions like select -->
			<router-link to="/about">ABOUT</router-link>
			<router-link to="/support">SUPPORT</router-link>
		</div>
		<div class="flex gap-4">
			<router-link to="/search"
				><img src="../../assets/search_icon.svg" alt="search icon"
			/></router-link>
			<router-link to="/cart"
				><img src="../../assets/cart_icon.svg" alt="cart icon"
			/></router-link>
		</div>
	</header>
</template>
