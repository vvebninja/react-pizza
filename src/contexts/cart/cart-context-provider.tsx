import { useCartReducer } from '@/reducers/cart';
import { type ReactNode } from 'react';
import { CartContext } from './cart-context';

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const value = useCartReducer();

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
