import { PIZZA_CATEGORIES, PIZZA_URL } from '@/constants/constants';
import axios from 'axios';
import useSWR from 'swr';

const fetcher = (args) => axios(...args).then((response) => response.data);

const DEFAULT_CATEGORY = PIZZA_CATEGORIES[0];

export const usePizza = (searchQuery?: string, category?: string, sortBy?: string) => {
  const searchParams: Record<string, string> = {};

  if (searchQuery) {
    searchParams.title = searchQuery;
  }

  if (category && category !== DEFAULT_CATEGORY) {
    searchParams.category = category;
  }

  if (sortBy) {
    searchParams.sortBy = sortBy;
  }

  return useSWR([PIZZA_URL, { params: searchParams }], fetcher);
};
