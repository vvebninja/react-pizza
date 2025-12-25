import { AppHeader } from '@/components/app-header';
import type { ReactNode } from 'react';
import css from './cart-page-layout.module.scss';

export const CartPageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={css.layout_wrap}>
      <AppHeader />
      <main className={css.cart_page}>
        <div className={css.container}>{children}</div>
      </main>
    </div>
  );
};
