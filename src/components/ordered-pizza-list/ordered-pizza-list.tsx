import type { OrderedPizza } from '@/types.ts';
import styles from './ordered-pizza-list.module.scss';
import { OrderedPizzaCard } from './ordered-pizza-card';
import clsx from 'clsx';

export const OrderedPizzaList = ({
  orderedPizza,
  onRemoveItem,
  onDecreaseQuantity,
  onIncreaseQuantity,
  className,
}: {
  orderedPizza: OrderedPizza[];
  onRemoveItem: (id: OrderedPizza['id']) => void;
  onDecreaseQuantity: (id: OrderedPizza['id']) => void;
  onIncreaseQuantity: (id: OrderedPizza['id']) => void;
  className?: string;
}) => {
  return (
    <ul className={clsx(styles.list, className)}>
      {orderedPizza.map((item) => (
        <li key={item.id}>
          <OrderedPizzaCard
            {...item}
            onRemove={onRemoveItem}
            onIncreaseQuantity={onIncreaseQuantity}
            onDecreaseQuantity={onDecreaseQuantity}
          />
        </li>
      ))}
    </ul>
  );
};
