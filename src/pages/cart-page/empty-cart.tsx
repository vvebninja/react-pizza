import ShoppingCart from '@/assets/img/shopping-cart-img.svg?react';
import styles from './empty-cart.module.scss';
import { routePaths } from '@/constants/constants.ts';
import clsx from 'clsx';
import { LinkButton } from '@/components/ui/link-button/link-button';

export const EmptyCart = ({ className }: { className?: string }) => {
  return (
    <section className={clsx(styles.section, className)}>
      <h2 className={styles.title}>Cart is empty 😕</h2>
      <p className={styles.subtitle}>
        It looks like you don't have any pizza orders yet. <br className={styles.line_brake} />
        To get started, just head over to the homepage!
      </p>
      <ShoppingCart className={styles.picture} />
      <LinkButton
        size="lg"
        variant="solid"
        color="dark"
        to={routePaths.HOME}
      >
        Go back
      </LinkButton>
    </section>
  );
};
