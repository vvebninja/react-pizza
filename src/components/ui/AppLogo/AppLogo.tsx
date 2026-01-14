import { PizzaSlice } from '@/assets/icons';
import { routePaths } from '@/constants/constants';
import { NavLink } from 'react-router';
import css from './AppLogo.module.scss';

type AppLogoProps = {
  title: string;
  subtitle: string;
};

export const AppLogo = ({ title, subtitle }: AppLogoProps) => {
  return (
    <NavLink
      viewTransition
      className={css.root}
      to={routePaths.PIZZAS}
    >
      <PizzaSlice className={css.icon} />
      <div>
        <div className={css.title}>{title}</div>
        <div className={css.subtitle}>{subtitle}</div>
      </div>
    </NavLink>
  );
};
