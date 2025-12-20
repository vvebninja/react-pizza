import { EmptyCart } from '@/components/cart';
import { CartHeader } from '@/components/cart/cart-header';
import { OrderedPizzaList } from '@/components/cart/ordered-pizza';
import { CartPageLayout } from './cart-page-layout';
import { CartFooter } from '@/components/cart/cart-footer';
import { useState } from 'react';

const CartPage = () => {
  const [isCartEmpty, setIsCartEmpty] = useState(false);

  const handleClearCart = () => {
    setIsCartEmpty(true);
  };

  if (isCartEmpty) {
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
      <CartFooter />
    </CartPageLayout>
  );
};

export const Component = CartPage;
