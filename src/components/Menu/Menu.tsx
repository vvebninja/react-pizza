import { PizzaList } from '@/components/PizzaList';
import css from './Menu.module.scss';

export const Menu = () => {
  return (
    <div className={css.menu}>
      <h1 className={css.menu_title}>Menu</h1>
      <PizzaList />
    </div>
  );
};
