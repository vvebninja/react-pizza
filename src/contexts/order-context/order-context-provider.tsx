import type { OrderedPizza } from '@/types';
import { createContext, useContext, useState } from 'react';

const Context = createContext<{
  order: OrderedPizza[];
  addOrder: (order: OrderedPizza[]) => void;
} | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useOrderContext = () => {
  const context = useContext(Context);
  if (!context) throw new Error('Use context within provider!');
  return context;
};

export const OrderContextProvider = ({ children }: { children: React.ReactElement }) => {
  const [order, setOrder] = useState<OrderedPizza[] | []>([]);

  const addOrder = ($order: OrderedPizza[]) => {
    setOrder($order);
  };

  const value = { order, addOrder };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
