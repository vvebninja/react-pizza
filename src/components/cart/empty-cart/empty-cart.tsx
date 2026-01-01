import ShoppingCartIcon from '@/assets/img/shopping-cart-img.svg?react';
import ArrowLeftIcon from '@/assets/icons/arrow-left-icon.svg?react';
import css from './empty-cart.module.scss';
import { routePaths } from '@/constants/constants.ts';
import { LinkButton } from '@/components/ui/link-button/link-button';
import type { FC } from 'react';
import clsx from 'clsx';

type EmptyCartProps = {
  className?: string;
};

export const EmptyCart: FC<EmptyCartProps> = ({ className }) => {
  return (
    <section className={clsx(css.empty_cart, className)}>
      <h2 className={css.empty_cart_title}>Cart is empty 😕</h2>
      <p className={css.empty_cart_subtitle}>
        It looks like you don't have any pizza orders yet.
        <br className={css.empty_cart_line_breake} />
        To get started, just head over to the homepage!
      </p>
      <ShoppingCartIcon className={css.empty_cart_img} />
      <LinkButton
        className={css.empty_cart_back}
        size="lg"
        variant="solid"
        color="dark"
        to={routePaths.HOME}
      >
        <ArrowLeftIcon />
        Go back
      </LinkButton>
    </section>
  );
};
