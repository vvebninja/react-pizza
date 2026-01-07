import { fetchPizzas } from '@/api/fetchPizzas';
import { type LoaderFunctionArgs } from 'react-router';

const homeLoader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const searchQuery = url.searchParams.get('title') ?? '';
  const category = url.searchParams.get('category') ?? '';
  const sortOption = url.searchParams.get('sortBy') ?? '';

  try {
    const pizzasPromise = fetchPizzas({ searchQuery, category, sortOption });
    return { pizzasPromise };
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
export type HomeLoaderType = typeof homeLoader;
