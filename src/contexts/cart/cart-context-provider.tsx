import { type UseCartReducerReturn, useCartReducer } from '@/reducers/cart';
import { createContext, useContext, type ReactNode } from 'react';

type ContextType = UseCartReducerReturn;

const Context = createContext<ContextType | null>(null);

export const useCartContext = () => {
  const context = useContext(Context);
  if (!context) throw new Error('Use context within provider!');
  return context;
};

type CartContextProviderProps = {
  children: ReactNode;
};

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const value = useCartReducer();

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
