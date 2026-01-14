import { clsx } from 'clsx';
import type { ReactNode } from 'react';
import { AppLogo } from '../ui/AppLogo';
import css from './AppHeader.module.scss';

type AppHeaderProps = {
  variant?: 'pizzas_page';
  search?: ReactNode;
  cartStatusWidget?: ReactNode;
};

export const AppHeader = ({ cartStatusWidget, search, variant }: AppHeaderProps) => {
  const classNames = clsx(css.header, {
    [css.header_pizzas_page]: variant === 'pizzas_page',
  });

  return (
    <header className={classNames}>
      <AppLogo
        title="React Pizza"
        subtitle="the best pizza in you city"
      />
      {cartStatusWidget && <div className={css.cart_widget_wrap}>{cartStatusWidget}</div>}
      {search && <div className={css.search_wrap}>{search}</div>}
    </header>
  );
};
