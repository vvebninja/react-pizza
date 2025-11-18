import type { OrderedPizza, Pizza } from '@/types';
import styles from './pizza-list.module.scss';
import { PizzaItem } from '../pizza-item/pizza-item';

export const PizzaList = ({
  pizzas,
  onClick,
}: {
  pizzas: Pizza[];
  onClick: (orderedPizza: Omit<OrderedPizza, 'quantity'>) => void;
}) => {
  return (
    <ul className={styles.list}>
      {pizzas.map((p) => (
        <li key={p.id}>
          <PizzaItem
            {...p}
            onClick={onClick}
          />
        </li>
      ))}
    </ul>
  );
};
