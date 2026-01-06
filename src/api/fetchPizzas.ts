import { PIZZA_URL } from '@/constants';
import axios, { isAxiosError } from 'axios';
import type { Pizza } from './pizza.schema';

type FetchPizzasArgs = Partial<Record<'searchQuery' | 'category' | 'sortOption', string>>;

export const fetchPizzas = async (args: FetchPizzasArgs): Promise<Pizza[]> => {
  try {
    const response = await axios<Pizza[]>(PIZZA_URL, {
      params: {
        title: args.searchQuery,
        category: args.category,
        sortBy: args.sortOption,
      },
    });

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response?.status === 404) return [];

      if (error.response?.status === 503) {
        throw new Error('Server is temporary unavailable');
      }
    }

    throw error;
  }
};
