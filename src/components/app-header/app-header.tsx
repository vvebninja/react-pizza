import CartIcon from '@/assets/icons/shopping-cart-icon.svg?react';
import { routePaths } from '@/constants/constants.ts';
import { Link, useLocation } from 'react-router';
import { useCartContext } from '@/contexts/cart-context';
import clsx from 'clsx';
import PizzaSliceIcon from '@/assets/icons/pizza-slice-icon.svg?react';
import styles from './app-header.module.scss';
import { Price } from '@/components/ui/price/price.tsx';
import { LinkButton } from '@/components/ui/link-button/link-button';

export const AppLogo = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <Link
      className={styles.logo_link}
      to={routePaths.HOME}
    >
      <PizzaSliceIcon className={styles.logo_icon} />
      <div>
        <div className={styles.logo_title}>{title}</div>
        <div className={styles.logo_subtitle}>{subtitle}</div>
      </div>
    </Link>
  );
};

const HeaderCartButton = ({ className }: { className?: string }) => {
  const location = useLocation();
  const isHomePage = location.pathname === routePaths.HOME;

  const { items: order } = useCartContext();
  const totalQuantity = order.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = order.reduce((total, item) => total + item.price * item.quantity, 0);

  if (!isHomePage) {
    return null;
  }

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
  return (
    <header className={styles.header}>
      <AppLogo
        title="React Pizza"
        subtitle="the best pizza in you city"
      />
      <div className={styles.children}>{children}</div>
      <HeaderCartButton />
    </header>
  );
};
