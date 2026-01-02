import ShoppingCartIcon from '@/assets/icons/shopping-cart-icon.svg?react';
import { routePaths } from '@/constants';
import css from './cart-status-widget.module.scss';
import { useCartContext } from '@/contexts/cart';
import { LinkButton } from '@/components/ui/link-button/link-button';
import { Price } from '@/components/ui/price/price';

export const CartStatusWidget = () => {
  const { totalPrice, totalItems } = useCartContext();

  return (
    <LinkButton
      className={css.cart_widget}
      size="md"
      variant="solid"
      color="accent"
      to={routePaths.CART}
    >
      <Price
        size="sm"
        value={totalPrice}
        color="light"
      />
      <span className={css.cart_widget_divider} />
      <ShoppingCartIcon className={css.cart_widget_icon} />
      <span className={css.cart_widget_total}>{totalItems}</span>
    </LinkButton>
  );
};
