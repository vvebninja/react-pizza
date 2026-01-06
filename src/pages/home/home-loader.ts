import { fetchPizzas } from '@/api/fetchPizzas';
import type { Pizza } from '@/api/pizza.schema';
import type { LoaderFunctionArgs } from 'react-router';

const cache = new Map<string, { data: Pizza[]; timestamp: number }>();
const CACHE_TIME = 1000 * 60 * 5;

const homeLoader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const searchQuery = url.searchParams.get('title') ?? '';
  const category = url.searchParams.get('category') ?? '';
  const sortOption = url.searchParams.get('sortBy') ?? '';

  const cacheKey = [searchQuery, category, sortOption].join('');
  const cachedResponse = cache.get(cacheKey);

  if (cachedResponse && Date.now() - cachedResponse.timestamp < CACHE_TIME) {
    return { pizzas: cachedResponse.data };
  }

  try {
    const pizzas = await fetchPizzas({ searchQuery, category, sortOption });
    cache.set(cacheKey, { data: pizzas, timestamp: Date.now() });
    return { pizzas };
  } catch (error) {
    if (error instanceof Response) throw error;

    throw new Response(
      JSON.stringify({
        message: 'Could not fetch pizzas',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }
};

export const loader = homeLoader;
