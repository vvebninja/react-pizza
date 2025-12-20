export const PIZZA_CATEGORIES = ['All', 'Grilled', 'Meat', 'Hot', 'Veggie', 'Barbeque'];

export const DEFAULT_CATEGORY = PIZZA_CATEGORIES[0];

export const SORT_OPTIONS = ['price', 'popularity'];

export const routePaths = {
  HOME: '/',
  CART: '/cart',
  CHECKOUT: '#',
} as const;

export const PIZZA_URL = 'https://657df33d3e3f5b1894635e6f.mockapi.io/pizzas';

export const SEARCH_QUERY_DEBOUNCE_TIME = 300;
