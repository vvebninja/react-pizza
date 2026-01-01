import { EmptyCart } from '@/components/cart';
import { CartHeader } from '@/components/cart/cart-header';
import { OrderedPizzaList } from '@/components/cart/ordered-pizza';
import { CartPageLayout } from './cart-page-layout';
import { CartFooter } from '@/components/cart/cart-footer';
import { useCartContext } from '@/contexts/cart';
import css from './cart-page-layout.module.scss';

const CartPage = () => {
  const { items: orderedPizza, clearCart } = useCartContext();
  console.log('cart page');
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
