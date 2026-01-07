import type { Pizza } from '@/api/pizza.schema';
import clsx from 'clsx';
import { use } from 'react';
import { PizzaCard } from './PizzaCard';
import css from './PizzaList.module.scss';

type PizzaListProps = {
  pizzasPromise: Promise<Pizza[]>;
  className?: string;
};

export const PizzaList = ({ pizzasPromise, className }: PizzaListProps) => {
  const pizzas = use(pizzasPromise);

  if (!pizzas.length) {
    return (
      <div className={css.pizza_list_empty}>
        <p>Oops! No pizzas match your search🍕😢</p>
      </div>
    );
  }

  return (
    <ul
      className={clsx(css.pizza_list, className, {
        [css.is_centered]: pizzas.length < 4,
      })}
    >
      {pizzas.map(pizza => (
        <li key={pizza.id}>
          <PizzaCard pizza={pizza} />
        </li>
      ))}
    </ul>
  );
};
