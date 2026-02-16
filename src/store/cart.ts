import { defineStore } from "pinia";
import type { CartItem, Product } from "@/types/types";
import { computed, ref } from "vue";

export const useCartStore = defineStore(
  "cart",
  () => {
    //Массив товаров в корзине
    const cartList = ref<CartItem[]>([]);
    //Колво товаров
    const cartTotalCount = computed(() => {
      return cartList.value.reduce((sum, item) => (sum += item.quantity), 0);
    });
    //Общая стоимость
    const cartTotalPrice = computed(() => {
      return cartList.value.reduce((sum, item) => (sum += item.quantity * item.price), 0)
    });

    const addToCart = (product: Product) => {
      const item = cartList.value.find((item) => item.id == product.id);
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
    };
    const decreaseQuantity = (product: Product) => {
      const item = cartList.value.find((item) => item.id == product.id);
      if (item) {
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
    };
    return {
      cartList,
      addToCart,
      removeFromCart,
      decreaseQuantity,
      addAllFavorite,
      clearCart,
      cartTotalCount,
      cartTotalPrice,
    };
  },
  {
    persist: {
      pick: ["cartList"],
      storage: sessionStorage,
      key: "cart-list",
    },
  },
);
