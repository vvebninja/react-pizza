import { OrderedPizzaCard } from './ordered-pizza-card/ordered-pizza-card';
import { useCartContext } from '@/contexts/cart';

export const OrderedPizzaList = () => {
  const { items: orderedPizza } = useCartContext();

  return (
    <ul>
      {orderedPizza.map(item => (
        <li key={item.id}>
          <OrderedPizzaCard pizza={item} />
        </li>
      ))}
    </ul>
  );
};
