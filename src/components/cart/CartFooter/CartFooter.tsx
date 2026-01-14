import { Button } from '@/components/ui/Button';
import { GoBackLink } from '@/components/ui/GoBackLink';
import { routePaths } from '@/constants';
import { useCartContext } from '@/contexts/cart';
import { NavLink } from 'react-router';
import { Price } from '../../ui/Price/Price';
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
          <span className={css.label}>Pizzas:</span>
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
        <GoBackLink variant="subtle" />
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
