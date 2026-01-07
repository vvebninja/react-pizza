import type { ReactNode } from 'react';
import css from './CartPageLayout.module.scss';
import { AppHeader } from '@/components/AppHeader';

export const CartPageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={css.layout_wrap}>
      <AppHeader />
      <div className={css.cart_page}>{children}</div>
    </div>
  );
};
