import css from './cart-page.module.scss';
import { AppHeader } from '@/components/app-header';

const CartPage = () => {
  return (
    <div className={css.cart_page}>
      <AppHeader />
    </div>
  );
};

export const Component = CartPage;
