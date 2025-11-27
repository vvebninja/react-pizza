import styles from './app-header.module.scss';
import { AppLogo } from '@/components/app-logo';

export const AppHeader = ({
  search,
  headerCartButton,
}: {
  search?: React.ReactElement;
  headerCartButton?: React.ReactElement;
}) => {
  return (
    <header className={styles.header}>
      <AppLogo
        title="React Pizza"
        subtitle="the best pizza in you city"
      />
      <div className={styles.cart_button_wrap}>{headerCartButton}</div>
      <div className={styles.search_wrap}>{search}</div>
    </header>
  );
};
