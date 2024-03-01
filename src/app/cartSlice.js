import { createSlice } from "@reduxjs/toolkit";
import productData from "./productData";

// Load initial cart state from local storage
const loadInitialCartState = () => {
  const cartFromLocalStorage = localStorage.getItem("cart");
  return cartFromLocalStorage ? JSON.parse(cartFromLocalStorage) : [];
};

const loadInitialFavoriteState = () => {
  const favoritesFromLocalStorage = localStorage.getItem("favorites");
  return favoritesFromLocalStorage ? JSON.parse(favoritesFromLocalStorage) : [];
};

const initialState = {
  cart: loadInitialCartState(),
  favoriteItems: loadInitialFavoriteState(),
  items: productData,
  totalQuantity: 0,
  totalPrice: 0,
  query: "",
};

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const saveFavoritesToLocalStorage = (favorites) => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
      saveCartToLocalStorage(state.cart);
    },

    addToFavorites: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.favoriteItems.find((item) => item.id === id);
      if (!existingItem) {
        state.favoriteItems.push(action.payload);
        saveFavoritesToLocalStorage(state.favoriteItems);
      }
    },
    getCartTotal: (state) => {
      let { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          if (quantity >= 0) {
            const itemTotal = price * quantity;
            cartTotal.totalPrice += itemTotal;
            cartTotal.totalQuantity += quantity;
          } else {
            cartItem.quantity = 0;
          }
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },

    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      saveCartToLocalStorage(state.cart);
    },

    removeFavItem: (state, action) => {
      state.favoriteItems = state.favoriteItems.filter(
        (item) => item.id !== action.payload
      );
      saveFavoritesToLocalStorage(state.favoriteItems);
    },
    increaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      saveCartToLocalStorage(state.cart);
    },
    decreaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      saveCartToLocalStorage(state.cart);
    },
    queryData: (state, action) => {
      state.query = action.payload;
    },
    clearCart: (state) => {
      state.cart = [];
      saveCartToLocalStorage(state.cart);
    },
  },
});

export const {
  addToCart,
  addToFavorites,
  getCartTotal,
  removeItem,
  removeFavItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  queryData,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
