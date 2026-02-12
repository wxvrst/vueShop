import { defineStore } from "pinia";
import type { CartItem, Product } from "../types/types";
import { computed, ref } from "vue";

export const useCartStore = defineStore("cart", () => {
  const cartList = ref<CartItem[]>([]);
  //Колво товаров
  const cartCount = ref<number>(0);
  //Общая стоимость
  const cartTotal = ref<number>(0);
  // const cartTotalCount = computed(() => {
  //   return;
  // });
  // const cartTotalPrice = computed(() => {
  //   return;
  // });

  const addToCart = (product: Product) => {
    const item = cartList.value.find((item) => item.id == product.id);
    cartCount.value++;
    cartTotal.value += product.price;
    if (item) {
      item.quantity++;
    } else {
      cartList.value.push({ ...product, quantity: 1 });
    }
  };
  const addAllFavorite = (products: Product[]) => {
    for (let item of products) {
      addToCart(item);
    }
  };
  const removeFromCart = (product: CartItem) => {
    cartList.value = cartList.value.filter((item) => item.id != product.id);
    cartCount.value -= product.quantity;
  };
  const decreaseQuantity = (product: Product) => {
    const item = cartList.value.find((item) => item.id == product.id);
    if (item) {
      cartCount.value--;
      cartTotal.value -= product.price;
      if (item.quantity == 1) {
        cartList.value = cartList.value.filter(
          (item) => item.id !== product.id,
        );
      } else {
        item.quantity--;
      }
    }
  };
  const clearCart = () => {
    cartList.value = [];
    cartCount.value = 0;
    cartTotal.value = 0;
  };
  return {
    cartList,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    addAllFavorite,
    clearCart,
    cartCount,
    cartTotal,
  };
});
