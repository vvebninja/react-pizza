import { ShoppingCart } from '@/assets/icons';
import { PendingNavLink } from '@/components/PendingNavLink';
import { routePaths } from '@/constants';
import { useCartContext } from '@/contexts/cart';
import css from './CartStatusWidget.module.scss';
import { Price } from '@/components/Price';

export const CartStatusWidget = () => {
  const { totalPrice, totalItems } = useCartContext();

  return (
    <PendingNavLink
      to={routePaths.CART}
      className={css.root}
      size="md"
      weight="bold"
      variant="solid"
      color="accent"
    >
      <Price
        size="sm"
        value={totalPrice}
        color="light"
      />
      <div className={css.divider} />
      <ShoppingCart />
      {totalItems}
    </PendingNavLink>
  );
};
