import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { compareArrays } from '../utils';
import type { Discount } from '../../types/product.types';

const calcAdjustedTotalPrice = (
  totalPrice: number,
  data: CartItem,
  quantity?: number
): number => {
  return (
    (totalPrice + data.discount.percentage > 0
      ? Math.round(data.price - (data.price * data.discount.percentage) / 100)
      : data.discount.amount > 0
        ? Math.round(data.price - data.discount.amount)
        : data.price) * (quantity ? quantity : data.quantity)
  );
};

export type CartItem = {
  id: number;
  name: string;
  srcUrl: string;
  price: number;
  attributes: string[];
  discount: Discount;
  quantity: number;
};

export type Cart = {
  items: CartItem[];
  totalQuantities: number;
};

interface CartState {
  cart: Cart | null;
  totalPrice: number;
  adjustedTotalPrice: number;
  action: "update" | "add" | "delete" | null;
  addToCart: (item: CartItem) => void;
  removeCartItem: (id: number, attributes: string[]) => void;
  remove: (id: number, attributes: string[], quantity: number) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: null,
      totalPrice: 0,
      adjustedTotalPrice: 0,
      action: null,
      addToCart: (item) =>
        set((state) => {
          // if cart is empty then add
          if (state.cart === null) {
            return {
              cart: {
                items: [item],
                totalQuantities: item.quantity,
              },
              totalPrice: state.totalPrice + item.price * item.quantity,
              adjustedTotalPrice:
                state.adjustedTotalPrice +
                calcAdjustedTotalPrice(state.totalPrice, item),
              action: "add",
            };
          }

          // check item in cart
          const isItemInCart = state.cart.items.find(
            (cartItem) =>
              item.id === cartItem.id &&
              compareArrays(item.attributes, cartItem.attributes)
          );

          if (isItemInCart) {
            return {
              cart: {
                ...state.cart,
                items: state.cart.items.map((eachCartItem) => {
                  if (
                    eachCartItem.id === item.id
                      ? !compareArrays(eachCartItem.attributes, isItemInCart.attributes)
                      : eachCartItem.id !== item.id
                  )
                    return eachCartItem;

                  return {
                    ...isItemInCart,
                    quantity: item.quantity + isItemInCart.quantity,
                  };
                }),
                totalQuantities: state.cart.totalQuantities + item.quantity,
              },
              totalPrice: state.totalPrice + item.price * item.quantity,
              adjustedTotalPrice:
                state.adjustedTotalPrice +
                calcAdjustedTotalPrice(state.totalPrice, item),
              action: "update",
            };
          }

          return {
            cart: {
              ...state.cart,
              items: [...state.cart.items, item],
              totalQuantities: state.cart.totalQuantities + item.quantity,
            },
            totalPrice: state.totalPrice + item.price * item.quantity,
            adjustedTotalPrice:
              state.adjustedTotalPrice +
              calcAdjustedTotalPrice(state.totalPrice, item),
            action: "add",
          };
        }),
      removeCartItem: (id, attributes) =>
        set((state) => {
          if (state.cart === null) return state;

          // check item in cart
          const isItemInCart = state.cart.items.find(
            (item) =>
              id === item.id && compareArrays(attributes, item.attributes)
          );

          if (isItemInCart) {
            return {
              cart: {
                ...state.cart,
                items: state.cart.items
                  .map((eachCartItem) => {
                    if (
                      eachCartItem.id === id
                        ? !compareArrays(
                          eachCartItem.attributes,
                          isItemInCart.attributes
                        )
                        : eachCartItem.id !== id
                    )
                      return eachCartItem;

                    return {
                      ...isItemInCart,
                      quantity: eachCartItem.quantity - 1,
                    };
                  })
                  .filter((item) => item.quantity > 0),
                totalQuantities: state.cart.totalQuantities - 1,
              },
              totalPrice: state.totalPrice - isItemInCart.price,
              adjustedTotalPrice:
                state.adjustedTotalPrice -
                calcAdjustedTotalPrice(isItemInCart.price, isItemInCart, 1),
              action: "delete",
            };
          }
          return state;
        }),
      remove: (id, attributes, quantity) =>
        set((state) => {
          if (!state.cart) return state;

          // check item in cart
          const isItemInCart = state.cart.items.find(
            (item) =>
              id === item.id && compareArrays(attributes, item.attributes)
          );

          if (!isItemInCart) return state;

          return {
            cart: {
              ...state.cart,
              items: state.cart.items.filter((pItem) => {
                return pItem.id === id
                  ? !compareArrays(pItem.attributes, isItemInCart.attributes)
                  : pItem.id !== id;
              }),
              totalQuantities: state.cart.totalQuantities - isItemInCart.quantity,
            },
            totalPrice:
              state.totalPrice - isItemInCart.price * isItemInCart.quantity,
            adjustedTotalPrice:
              state.adjustedTotalPrice -
              calcAdjustedTotalPrice(
                isItemInCart.price,
                isItemInCart,
                isItemInCart.quantity
              ),
            action: "delete",
          };
        }),
    }),
    {
      name: 'cart-storage',
    }
  )
);
