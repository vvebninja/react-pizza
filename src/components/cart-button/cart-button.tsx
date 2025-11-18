import CartIcon from '@/assets/icons/cart-icon.svg?react';
import { routePaths } from '@/constants/constants';
import { useOrderContext } from '@/contexts/order-context';
import { Link, useLocation } from 'react-router';
import styles from './cart-button.module.scss';

export const CartButton = () => {
  const location = useLocation();
  const { order } = useOrderContext();
  const isHomePage = location.pathname === routePaths.HOME;
  const totalQuantity = order.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = order.reduce((total, item) => total + item.price * item.quantity, 0);

  if (!isHomePage) {
    return null;
  }

  return (
    <Link
      className={styles.link}
      to={routePaths.CART}
    >
      <span className={styles.amount}>{totalAmount}</span>
      <span>&#8372;</span>
      <span className={styles.divider} />
      <CartIcon className={styles.icon} />
      <span>{totalQuantity}</span>
    </Link>
  );
};
