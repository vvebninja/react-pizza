import { clsx } from 'clsx';
import type { FC, ReactNode } from 'react';
import { AppLogo } from '../ui/AppLogo';
import css from './AppHeader.module.scss';

type AppHeaderProps = {
  variant?: 'pizzas_page';
  search?: ReactNode;
  cartStatusWidget?: ReactNode;
};

export const AppHeader: FC<AppHeaderProps> = ({ cartStatusWidget, search, variant }) => {
  const classNames = clsx(css.header, {
    [css.header_home]: variant === 'pizzas_page',
  });

  return (
    <header className={classNames}>
      <AppLogo
        title="React Pizza"
        subtitle="the best pizza in you city"
      />
      {cartStatusWidget && <div className={css.header_cart_widget_wrap}>{cartStatusWidget}</div>}
      {search && <div className={css.header_search_wrap}>{search}</div>}
    </header>
  );
};
