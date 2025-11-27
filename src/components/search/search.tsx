import { useLocation } from 'react-router';
import CancelIcon from '@/assets/icons/cancel-icon.svg?react';
import styles from './search.module.scss';
import { routePaths } from '@/constants/constants';

export const Search = ({
  value,
  onChange,
  onClick,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}) => {
  const location = useLocation();
  const isHomePage = location.pathname === routePaths.HOME;

  if (!isHomePage) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <input
        type="search"
        name="search"
        className={styles.search_input}
        value={value}
        onChange={onChange}
        placeholder="Search"
      />
      {value && (
        <CancelIcon
          className={styles.cancel_icon}
          onClick={onClick}
          tabIndex={0}
        />
      )}
    </div>
  );
};
