import { EmptyCart } from '@/components/cart/empty-cart/empty-cart';
import { Header } from '@/components/header';

export const Cart = () => {
  return (
    <div>
      <Header />
      <EmptyCart />
    </div>
  );
};
