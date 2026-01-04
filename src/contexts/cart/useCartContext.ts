import { useContext } from 'react';
import { CartContext } from './cart-context';

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('Use context within provider!');
  return context;
};
