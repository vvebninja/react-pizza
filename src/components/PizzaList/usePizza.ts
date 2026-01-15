import { pizzasEndpoint as cacheKey, fetchPizzas } from '@/api/fetchPizzas';
import { useSearchParams } from 'react-router';
import useSWR from 'swr';

export const usePizzaFilters = () => {
  const [params] = useSearchParams();

  return {
    searchQuery: params.get('title') ?? '',
    category: params.get('category') ?? '',
    sortOption: params.get('sortBy') ?? '',
  };
};

export const usePizza = () => {
  const filters = usePizzaFilters();

  const { data: pizzas } = useSWR(
    {
      cacheKey,
      filters,
    },
    () => fetchPizzas(filters),
    { suspense: true, useErrorBoundary: true },
  );

  return { pizzas };
};
