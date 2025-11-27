import type { OrderedPizza } from '@/types';
import { createContext, useContext, useState } from 'react';

const Context = createContext<{
  items: OrderedPizza[];
  addItem: (order: Omit<OrderedPizza, 'quantity'>) => void;
  removeItem: (id: OrderedPizza['id']) => void;
  clearCart: () => void;
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
    const existingPizzaIndex = items.findIndex((item) => {
      return orderedPizza.id === item.id;
    });

    if (existingPizzaIndex > -1) {
      const newOrder = items.map((item, index) => {
        if (index === existingPizzaIndex) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setItems(newOrder);
    } else {
      setItems([...items, { ...orderedPizza, quantity: 1 }]);
    }
  };

  const removeItem = (id: OrderedPizza['id']) => setItems(items.filter((item) => item.id !== id));

  const clearCart = () => setItems([]);

  const increaseQuantityByOne = (id: OrderedPizza['id']) =>
    setItems(
      items.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)),
    );

  const decreaseQuantityByOne = (id: OrderedPizza['id']) =>
    setItems(
      items.map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item)),
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
