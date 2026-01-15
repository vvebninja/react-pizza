import axios, { isAxiosError } from 'axios';
import type { Pizza } from './pizza.schema';

export const PIZZA_URL = 'https://657df33d3e3f5b1894635e6f.mockapi.io';

const pizzasApi = axios.create({
  baseURL: PIZZA_URL,
});

export const pizzasEndpoint = '/pizzas';

type FetchPizzasArgs = {
  searchQuery: string;
  category: string;
  sortOption: string;
};

export const fetchPizzas = async (args?: FetchPizzasArgs) => {
  try {
    const response = await pizzasApi<Pizza[]>(pizzasEndpoint, {
      params: {
        title: args?.searchQuery,
        category: args?.category,
        sortBy: args?.sortOption,
      },
    });
    return response.data;
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 404) {
      return [];
    }

    throw error;
  }
};
