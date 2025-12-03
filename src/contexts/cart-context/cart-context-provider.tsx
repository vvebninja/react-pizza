import type { OrderedPizza } from '@/types';
import { createContext, useContext, useState } from 'react';

const Context = createContext<{
  items: OrderedPizza[];
  addItem: (order: Omit<OrderedPizza, 'quantity'>) => void;
  clearCart: () => void;
  removeItem: (id: OrderedPizza['id']) => void;
  increaseQuantityByOne: (id: OrderedPizza['id']) => void;
  decreaseQuantityByOne: (id: OrderedPizza['id']) => void;
} | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useCartContext = () => {
  const context = useContext(Context);
  if (!context) throw new Error('Use context within provider!');
  return context;
};

export const CartContextProvider = ({ children }: { children: React.ReactElement }) => {
  const [items, setItems] = useState<OrderedPizza[]>([]);

  const addItem = (orderedPizza: Omit<OrderedPizza, 'quantity'>) => {
    setItems((prev) => {
      const existingPizzaIndex = prev.findIndex((item) => item.id === orderedPizza.id);

      if (existingPizzaIndex > -1) {
        return prev.map((item) =>
          item.id === orderedPizza.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: item.quantity * item.price,
              }
            : item,
        );
      } else {
        return [...prev, { ...orderedPizza, quantity: 1, totalPrice: orderedPizza.price }];
      }
    });
  };

  const removeItem = (id: OrderedPizza['id']) => setItems(items.filter((item) => item.id !== id));

  const clearCart = () => setItems([]);

  const increaseQuantityByOne = (id: OrderedPizza['id']) =>
    setItems(
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );

  const decreaseQuantityByOne = (id: OrderedPizza['id']) =>
    setItems(
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item,
      ),
    );

  const value = {
    items,
    addItem,
    removeItem,
    clearCart,
    increaseQuantityByOne,
    decreaseQuantityByOne,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
