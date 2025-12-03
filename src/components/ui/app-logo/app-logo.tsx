import { routePaths } from '@/constants/constants';
import styles from './app-logo.module.scss';
import { Link } from 'react-router';
import PizzaSliceIcon from '@/assets/icons/pizza-slice-icon.svg?react';

export const AppLogo = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <Link
      className={styles.link}
      to={routePaths.HOME}
    >
      <PizzaSliceIcon className={styles.icon} />
      <div>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
      </div>
    </Link>
  );
};
