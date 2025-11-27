import type { OrderedPizza, Pizza } from '@/types.ts';
import styles from './pizza-list.module.scss';
import { PizzaCard } from './pizza-card.tsx';

export const PizzaList = ({
  pizzas,
  onAddToCartClick,
}: {
  pizzas: Pizza[];
  onAddToCartClick: (orderedPizza: Omit<OrderedPizza, 'quantity'>) => void;
}) => {
  return (
    <ul className={styles.list}>
      {pizzas.map((p) => (
        <li key={p.id}>
          <PizzaCard
            {...p}
            onClick={onAddToCartClick}
          />
        </li>
      ))}
    </ul>
  );
};
