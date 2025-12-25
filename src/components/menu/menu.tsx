import type { Pizza } from '@/data/types';
import clsx from 'clsx';
import { useLoaderData, useNavigation } from 'react-router';
import { PizzaCard } from '../pizza-card';
import css from './menu.module.scss';

export const Menu = () => {
  const { pizzas } = useLoaderData() as { pizzas: Pizza[] };
  const navigation = useNavigation();

  const isLoading = navigation.state === 'loading';

  const menuPizzaCss = clsx(css.menu_pizza, {
    [css.menu_pizza_is_center]: pizzas.length < 4,
  });

  return (
    <div className={css.menu}>
      {isLoading && <MenuSkeletons />}

      {!isLoading && !pizzas.length && (
        <div className={css.empty_state}>
          <h2 className={css.menu_title}>Oops! No pizzas match your search🍕😢</h2>
        </div>
      )}

      {!isLoading && pizzas.length > 0 && (
        <>
          <h1 className={css.menu_title}>Menu</h1>
          <ul className={menuPizzaCss}>
            {pizzas.map(pizza => (
              <li key={pizza.id}>
                <PizzaCard pizza={pizza} />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

const MenuSkeletons = () => {
  const sk = [...Array(8)];

  return (
    <ul className={css.menu_pizza}>
      {sk.map((_, i) => (
        <li key={i}>
          <div className={css.skeleton_card} />
        </li>
      ))}
    </ul>
  );
};
