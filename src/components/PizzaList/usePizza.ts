import { fetchPizzas } from '@/api/fetchPizzas';
import { useSearchParams } from 'react-router';
import useSWR from 'swr';
import { pizzasEndpoint as cacheKey } from '@/api/fetchPizzas';

export const usePizza = () => {
  const filters = usePizzaFilters();

  const { data, error, isLoading } = useSWR(
    {
      cacheKey,
      filters,
    },
    () => fetchPizzas(filters),
  );

  return { data, error, isLoading };
};

const usePizzaFilters = () => {
  const [params] = useSearchParams();

  return {
    searchQuery: params.get('title') ?? '',
    category: params.get('category') ?? '',
    sortOption: params.get('sortBy') ?? '',
  };
};
