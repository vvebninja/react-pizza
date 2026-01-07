import type { UseCartReducerReturn } from '@/reducers/cart';
import { createContext } from 'react';

type CartContextType = UseCartReducerReturn;

export const CartContext = createContext<CartContextType | null>(null);
