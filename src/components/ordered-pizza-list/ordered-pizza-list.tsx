import styles from './ordered-pizza-list.module.scss';
import { OrderedPizzaCard } from './ordered-pizza-card';
import clsx from 'clsx';
import { useCartContext } from '@/contexts/cart-context';

export const OrderedPizzaList = ({ className }: { className?: string }) => {
  const { items: orderedPizza } = useCartContext();

  return (
    <ul className={clsx(styles.list, className)}>
      {orderedPizza.map((item) => (
        <li key={item.id}>
          <OrderedPizzaCard {...item} />
        </li>
      ))}
    </ul>
  );
};
