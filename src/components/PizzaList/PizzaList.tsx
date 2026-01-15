import clsx from 'clsx';
import 'react-loading-skeleton/dist/skeleton.css';
import { PizzaCard } from './PizzaCard';
import css from './PizzaList.module.scss';
import { usePizza } from './usePizza';

export const PizzaList = () => {
  const { pizzas } = usePizza();

  const classNames = clsx(css.root, {
    [css.is_centered]: pizzas.length < 4,
  });

  if (pizzas?.length === 0) {
    return <div className={css.not_found_message}>Oops! No pizzas match your search🍕😢</div>;
  }

  return (
    <ul className={classNames}>
      {pizzas.map(pizza => (
        <li key={pizza.id}>
          <PizzaCard pizza={pizza} />
        </li>
      ))}
    </ul>
  );
};
