import { getPizzas } from '@/api/pizza';

const homeLoader = async () => {
  try {
    const pizzas = await getPizzas();
    console.log('pizza', pizzas);
    return { pizzas };
  } catch (error) {
    console.error('Failed to fetch pizzas: ', error);
    throw new Response(JSON.stringify({ message: 'Could not fetch pizzas at this time' }), {
      status: 500,
      headers: { 'Content-Type': 'aplication/json' },
    });
  }
};

export const loader = homeLoader;
