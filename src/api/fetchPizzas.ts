import { PIZZA_URL } from '@/constants';
import axios, { isAxiosError } from 'axios';

export type Pizza = {
  id: number | string;
  imgSrc: string;
  title: string;
  doughTypes: string[];
  sizes: number[];
  price: number;
};

type FetchPizzasArgs = {
  searchQuery?: string;
  category?: string;
  sortOption?: string;
};

export const fetchPizzas = async ({
  searchQuery,
  category,
  sortOption,
}: FetchPizzasArgs): Promise<Pizza[]> => {
  try {
    const params = new URLSearchParams();

    if (searchQuery) params.set('title', searchQuery);
    if (category) params.set('category', category);
    if (sortOption) params.set('sortBy', sortOption);

    const response = await axios<Pizza[]>(PIZZA_URL, {
      params,
    });

    return response.data;
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 404) {
      return [];
    }

    throw error;
  }
};

export const getPizzasByQuery = async (query: string): Promise<Pizza[]> => {
  try {
    const { data } = await axios<Pizza[]>(PIZZA_URL, { params: { title: query } });
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 404) {
      return [];
    }

    throw error;
  }
};
