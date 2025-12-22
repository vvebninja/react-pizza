import css from './menu.module.scss';
import { PizzaCard } from '../pizza-card';
import { useLoaderData } from 'react-router';
import type { Pizza } from '@/data/types';

export const Menu = () => {
  const { pizzas } = useLoaderData() as { pizzas: Pizza[] };

  return (
    <div className={css.menu}>
      <h1 className={css.menu_title}>Menu</h1>
      <ul className={css.menu_pizza}>
        {pizzas.map(pizza => (
          <li key={pizza.id}>
            <PizzaCard pizza={pizza} />
          </li>
        ))}
      </ul>
    </div>
  );
};
