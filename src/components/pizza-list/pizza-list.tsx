import styles from './pizza-list.module.scss';
import { PizzaCard } from './pizza-card.tsx';
import { usePizza } from '@/hooks/usePizza.ts';

export const PizzaList = ({
  searchQuery,
  selectedCategory,
}: {
  searchQuery?: string;
  selectedCategory?: string;
}) => {
  const { data: pizza, isLoading, error } = usePizza(searchQuery, selectedCategory);
  console.log('pizza', pizza);
  console.log('error', error);
  console.log('isLoading', isLoading);

  if (isLoading) return <div>Loading pizaa...</div>;

  if (error?.status === 404) return <div>No pizza found 😕</div>;

  return (
    <ul className={styles.list}>
      {!isLoading &&
        pizza.map((p) => (
          <li key={p.id}>
            <PizzaCard {...p} />
          </li>
        ))}
    </ul>
  );
};
