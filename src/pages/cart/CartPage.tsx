import { CartFooter } from '@/components/cart/CartFooter';
import { CartHeader } from '@/components/cart/CartHeader';
import { EmptyCart } from '@/components/cart/EmptyCart';
import { OrderedPizzaList } from '@/components/OrderedPizzaList';
import { useCartContext } from '@/contexts/cart';
import { CartPageLayout } from './CartPageLayout';
import css from './CartPageLayout.module.scss';

const CartPage = () => {
  const { items: orderedPizza, clearCart } = useCartContext();

  const handleClearCart = () => clearCart();

  if (!orderedPizza.length) {
    return (
      <CartPageLayout>
        <EmptyCart />
      </CartPageLayout>
    );
  }

  return (
    <CartPageLayout>
      <CartHeader
        title="Cart"
        onClear={handleClearCart}
      />
      <OrderedPizzaList />
      <CartFooter className={css.cart_footer} />
    </CartPageLayout>
  );
};

export const Component = CartPage;
