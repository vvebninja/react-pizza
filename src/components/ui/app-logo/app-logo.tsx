import { routePaths } from '@/constants/constants';
import css from './app-logo.module.scss';
import { Link } from 'react-router';
import PizzaSliceIcon from '@/assets/icons/pizza-slice-icon.svg?react';

type AppLogoProps = {
  title: string;
  subtitle: string;
};

export const AppLogo = ({ title, subtitle }: AppLogoProps) => {
  return (
    <Link
      className={css.app_logo}
      to={routePaths.HOME}
    >
      <PizzaSliceIcon className={css.app_logo_icon} />
      <div>
        <div className={css.app_logo_title}>{title}</div>
        <div className={css.app_logo_subtitle}>{subtitle}</div>
      </div>
    </Link>
  );
};
