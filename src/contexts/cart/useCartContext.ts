import { useContext } from 'react';
import { CartContext } from './cartContext';

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useContext is used outside CartContextProvider!');
  return context;
};
