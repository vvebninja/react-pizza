import { routePaths } from '@/constants/constants';
import { Link } from 'react-router';
import styles from './header.module.scss';
import PizzaSliceIcon from '@/assets/icons/pizza-slice-icon.svg?react';

export const Header = ({
  searchSlot,
  cartButtonSlot,
}: {
  searchSlot?: React.ReactElement;
  cartButtonSlot?: React.ReactElement;
}) => {
  return (
    <header className={styles.header}>
      <Link
        className={styles.logo_link}
        to={routePaths.HOME}
      >
        <PizzaSliceIcon className={styles.logo_icon} />
        <div>
          <div className={styles.logo_title}>React Pizza</div>
          <div className={styles.logo_subtitle}>the best pizza in you city</div>
        </div>
      </Link>
      <div className={styles.cart_button_wrap}>{cartButtonSlot}</div>
      <div className={styles.search_wrap}>{searchSlot}</div>
    </header>
  );
};
