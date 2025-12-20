import { orderedPizzaMock } from '@/data/ordered-pizza-mock';
import { OrderedPizzaCard } from './ordered-pizza-card';

export const OrderedPizzaList = () => {
  return (
    <ul>
      {orderedPizzaMock.map(item => (
        <li key={item.id}>
          <OrderedPizzaCard pizza={item} />
        </li>
      ))}
    </ul>
  );
};
