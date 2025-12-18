import { EmptyCart } from '@/components/cart';
import css from './cart-page.module.scss';
import { AppHeader } from '@/components/app-header';

const CartPage = () => {
  const isCartEmpty = true;

  return (
    <>
      <AppHeader />
      <div className={css.cart_page}>
        {isCartEmpty && <EmptyCart className={css.cart_page_empty} />}
      </div>
    </>
  );
};

export const Component = CartPage;
