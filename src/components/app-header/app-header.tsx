import type { FC, ReactNode } from 'react';
import css from './app-header.module.scss';
import { clsx } from 'clsx';
import { AppLogo } from '../ui/app-logo/app-logo.tsx';

type AppHeaderProps = {
  variant?: 'home';
  search?: ReactNode;
  cartStatusWidget?: ReactNode;
};

export const AppHeader: FC<AppHeaderProps> = ({ cartStatusWidget, search, variant }) => {
  const classNames = clsx(css.header, {
    [css.header_home]: variant === 'home',
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
