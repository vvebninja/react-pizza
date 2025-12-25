import { getQueryPizzas, getPizzas } from '@/api/pizza';
import type { LoaderFunctionArgs } from 'react-router';

const homeLoader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const title = url.searchParams.get('title');

  try {
    const pizzas = title ? await getQueryPizzas(title) : await getPizzas();
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
