import { LinkButton } from '@/components/ui/link-button/link-button';
import { Price } from '@/components/ui/price/price';
import { routePaths } from '@/constants';
import css from './cart-footer.module.scss';
import ArrowLeftIcon from '@/assets/icons/arrow-left-icon.svg?react';

export const CartFooter = () => {
  return (
    <footer className={css.cart_footer}>
      <div className={css.cart_footer_summary}>
        <div className={css.cart_footer_total}>
          <span>Pizzas:</span>
          <strong className={css.cart_footer_count}>3</strong>
        </div>
        <div className={css.cart_footer_total}>
          <span className={css.total_price_label}>Order total:</span>
          <Price
            value={1250}
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
