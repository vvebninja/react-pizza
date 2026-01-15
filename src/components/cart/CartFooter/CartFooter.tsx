import { GoBackLink } from '@/components/GoBackLink';
import { Price } from '@/components/Price';
import { Button } from '@/components/ui/Button';
import { routePaths } from '@/constants';
import { useCartContext } from '@/contexts/cart';
import { NavLink } from 'react-router';
import css from './CartFooter.module.scss';

type CartFooterProps = {
  className?: string;
};

export const CartFooter = ({ className }: CartFooterProps) => {
  const { totalItems, totalPrice } = useCartContext();

  return (
    <footer className={className}>
      <div className={css.footer_summary}>
        <div className={css.total}>
          <span className={css.quantity_label}>Pizzas:</span>
          <strong className={css.amount}>{totalItems}</strong>
        </div>
        <div className={css.total}>
          <span className={css.label}>Order total:</span>
          <Price
            value={totalPrice}
            size="lg"
            color="accent"
          />
        </div>
      </div>

      <div className={css.footer_actions}>
        <GoBackLink
          to={routePaths.PIZZAS}
          variant="subtle"
          color="gray"
        />
        <Button
          as={NavLink}
          to={routePaths.CHECKOUT}
          size="lg"
          variant="solid"
          color="accent"
        >
          Pay now
        </Button>
      </div>
    </footer>
  );
};
