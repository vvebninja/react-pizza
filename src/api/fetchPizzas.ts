import axios from 'axios';
import type { Pizza } from './pizza.schema';

export const PIZZA_URL = 'https://657df33d3e3f5b1894635e6f.mockapi.io';

const pizzasApi = axios.create({
  baseURL: PIZZA_URL,
});

export const pizzasEndpoint = '/pizzas';

type FetchPizzasArgs = Partial<Record<'searchQuery' | 'category' | 'sortOption', string>>;

export const fetchPizzas = async (args?: FetchPizzasArgs): Promise<Pizza[]> => {
  const response = await pizzasApi<Pizza[]>(pizzasEndpoint, {
    params: {
      title: args?.searchQuery,
      category: args?.category,
      sortBy: args?.sortOption,
    },
  });

  return response.data;
};
