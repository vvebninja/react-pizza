import { useCartContext } from '@/contexts/cart';
import { OrderedPizzaCard } from './OrderedPizzaCard';

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
