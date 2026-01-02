import { getPizzasByQuery, getPizzas, getPizzasByCategory } from '@/api/pizza';
import type { LoaderFunctionArgs } from 'react-router';

const homeLoader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const title = url.searchParams.get('title');
  const category = url.searchParams.get('category');

  try {
    let pizzas;

    if (title) {
      pizzas = await getPizzasByQuery(title);
    } else if (category) {
      pizzas = await getPizzasByCategory(category);
    } else {
      pizzas = await getPizzas();
    }

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
