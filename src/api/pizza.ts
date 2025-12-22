import { PIZZA_URL } from '@/constants';
import type { Pizza } from '@/data/types';
import axios from 'axios';

export const getPizzas = async (): Promise<Pizza[]> => {
  const { data } = await axios<Pizza[]>(PIZZA_URL);
  return data;
};
