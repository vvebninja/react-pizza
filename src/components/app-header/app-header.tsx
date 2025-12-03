import CartIcon from '@/assets/icons/shopping-cart-icon.svg?react';
import { routePaths } from '@/constants/constants.ts';
import { useLocation } from 'react-router';
import { useCartContext } from '@/contexts/cart-context';
import clsx from 'clsx';
import styles from './app-header.module.scss';
import { Price } from '../ui/price/price.tsx';
import { LinkButton } from '../ui/link-button/link-button';
import { AppLogo } from '../ui/app-logo/app-logo';

const HeaderCartButton = ({ className }: { className?: string }) => {
  const { items: order } = useCartContext();
  const totalQuantity = order.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = order.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <LinkButton
      className={clsx(styles.btn_link, className)}
      size="md"
      variant="solid"
      color="accent"
      to={routePaths.CART}
    >
      <Price
        value={totalPrice}
        size="sm"
        color="light"
      />
      <span className={styles.btn_divider} />
      <CartIcon className={styles.btn_icon} />
      <span>{totalQuantity}</span>
    </LinkButton>
  );
};

export const AppHeader = ({ children }: { children?: React.ReactNode }) => {
  const location = useLocation();
  const isHomePage = location.pathname === routePaths.HOME;

  return (
    <header className={styles.header}>
      <AppLogo
        title="React Pizza"
        subtitle="the best pizza in you city"
      />
      {children}
      {isHomePage && <HeaderCartButton />}
    </header>
  );
};
