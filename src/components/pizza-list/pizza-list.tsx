import type { Pizza } from '@/types.ts';
import styles from './pizza-list.module.scss';
import { PizzaCard } from './pizza-card.tsx';

export const PizzaList = ({ pizza }: { pizza: Pizza[] }) => {
  return (
    <ul className={styles.list}>
      {pizza.map((p) => (
        <li key={p.id}>
          <PizzaCard {...p} />
        </li>
      ))}
    </ul>
  );
};
