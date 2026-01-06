export const PIZZA_CATEGORIES = ['All', 'Grilled', 'Meat', 'Hot', 'Veggie', 'Barbeque'];

export const SORT_OPTIONS = ['popularity', 'price'];

export const CATEGORY_LOOKUP = PIZZA_CATEGORIES.reduce(
  (acc, cat) => {
    acc[cat.toLowerCase()] = cat;
    return acc;
  },
  {} as Record<string, string>,
);

export const routePaths = {
  HOME: '/',
  CART: '/cart',
  CHECKOUT: '#',
} as const;

export const PIZZA_URL = 'https://657df33d3e3f5b1894635e6f.mockapi.io/pizzas';

export const SEARCH_QUERY_DEBOUNCE_TIME = 300;
