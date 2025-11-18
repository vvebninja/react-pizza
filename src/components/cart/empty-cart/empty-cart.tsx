import ShoppingCart from './shopping-cart.svg?react';
import styles from './empty-cart.module.scss';
import { Link } from 'react-router';
import { routePaths } from '@/constants/constants';

export const EmptyCart = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Cart is empty 😕</h2>
      <p className={styles.subtitle}>
        It looks like you don't have any pizza orders yet. <br className={styles.line_brake} />
        To get started, just head over to the homepage!
      </p>
      <ShoppingCart className={styles.picture} />
      <Link
        className={styles.link}
        to={routePaths.HOME}
      >
        Go back
      </Link>
    </section>
  );
};
