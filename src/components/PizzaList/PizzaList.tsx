import clsx from 'clsx';
import 'react-loading-skeleton/dist/skeleton.css';
import { PizzaCard } from './PizzaCard';
import { PizzaSkeleton } from './PizzaCard/PizzaSkeleton';
import css from './PizzaList.module.scss';
import { usePizza } from './usePizza';

type PizzaListProps = {
  className?: string;
};

export const PizzaList = ({ className }: PizzaListProps) => {
  const { data: pizzas, isLoading, error } = usePizza();

  if (error?.code === 404) {
    return <div className={css.not_found_message}>Oops! No pizzas match your search🍕😢</div>;
  }

  return (
    <ul
      className={clsx(css.root, className, {
        [css.is_centered]: pizzas && pizzas?.length < 4,
      })}
    >
      {isLoading && <PizzaSkeleton cardItems={9} />}
      {pizzas?.map(pizza => (
        <li key={pizza.id}>
          <PizzaCard pizza={pizza} />
        </li>
      ))}
    </ul>
  );
};
