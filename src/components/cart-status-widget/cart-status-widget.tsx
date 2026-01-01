import ShoppingCartIcon from '@/assets/icons/shopping-cart-icon.svg?react';
import { routePaths } from '@/constants';
import css from './cart-status-widget.module.scss';
import { LinkButton } from '../ui/link-button/link-button';
import { Price } from '../ui/price/price';
import { useCartContext } from '@/contexts/cart';

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
