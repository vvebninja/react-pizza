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

export const getPizzas = async (): Promise<Pizza[]> => {
  const { data } = await axios<Pizza[]>(PIZZA_URL);
  return data;
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

export const getPizzasByCategory = async (category: string): Promise<Pizza[]> => {
  try {
    const { data } = await axios(PIZZA_URL, { params: { category } });
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 404) {
      return [];
    }

    throw error;
  }
};
