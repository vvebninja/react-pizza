import ArrowLeftIcon from '@/assets/icons/arrow-left-icon.svg?react';
import { routePaths } from '@/constants';
import { useCartContext } from '@/contexts/cart';
import clsx from 'clsx';
import { LinkButton } from '../../ui/LinkButton/LinkButton';
import { Price } from '../../ui/Price/Price';
import css from './CartFooter.module.scss';

type CartFooterProps = {
  className?: string;
};

export const CartFooter = ({ className }: CartFooterProps) => {
  const { totalItems, totalPrice } = useCartContext();

  return (
    <footer className={clsx(css.cart_footer, className)}>
      <div className={css.cart_footer_summary}>
        <div className={css.cart_footer_total}>
          <span>Pizzas:</span>
          <strong className={css.cart_footer_count}>{totalItems}</strong>
        </div>
        <div className={css.cart_footer_total}>
          <span className={css.total_price_label}>Order total:</span>
          <Price
            value={totalPrice}
            size="lg"
            className={css.cart_footer_price}
          />
        </div>
      </div>

      <div className={css.cart_footer_actions}>
        <LinkButton
          to={routePaths.HOME}
          size="lg"
          variant="subtle"
          className={css.cart_footer_back}
        >
          <ArrowLeftIcon />
          <span>Go back</span>
        </LinkButton>

        <LinkButton
          to={routePaths.CHECKOUT}
          size="lg"
          variant="solid"
          color="accent"
        >
          <span>Pay now</span>
        </LinkButton>
      </div>
    </footer>
  );
};
