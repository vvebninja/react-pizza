import clsx from 'clsx';
import { PizzaCard } from './PizzaCard';
import css from './PizzaList.module.scss';
import { usePizza } from './usePizza';
import { PizzaListSkeletons } from './PizzaListSkeletons';

type PizzaListProps = {
  className?: string;
};

export const PizzaList = ({ className }: PizzaListProps) => {
  const { data: pizzas, isLoading } = usePizza();

  if (isLoading) {
    return <PizzaListSkeletons />;
  }

  if (!pizzas?.length) {
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
