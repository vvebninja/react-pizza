import { ShoppingCart } from '@/assets/images';
import { GoBackLink } from '@/components/GoBackLink';
import { routePaths } from '@/constants';
import clsx from 'clsx';
import css from './EmptyCart.module.scss';

type EmptyCartProps = {
  className?: string;
};

export const EmptyCart = ({ className }: EmptyCartProps) => {
  return (
    <section className={clsx(css.root, className)}>
      <h2 className={css.title}>Cart is empty 😕</h2>
      <p className={css.subtitle}>
        It looks like you don't have any pizza orders yet.
        <br className={css.line_breake} />
        To get started, just head over to the homepage!
      </p>
      <ShoppingCart className={css.image} />

      <GoBackLink
        to={routePaths.PIZZAS}
        variant="solid"
        color="dark"
      />
    </section>
  );
};
