import ShoppingCartIcon from '@/assets/icons/shopping-cart-icon.svg?react';
import TrashBinIcon from '@/assets/icons/trash-bin-icon.svg?react';
import styles from './cart-header.module.scss';

export const CartHeader = ({ title, onClear }: { title: string; onClear: () => void }) => {
  return (
    <header className={styles.cart_header}>
      <h2 className={styles.cart_title}>
        <ShoppingCartIcon className={styles.shopping_cart_icon} />
        <span className={styles.cart_title_text}>{title}</span>
      </h2>

      <button
        className={styles.clear_cart_btn}
        type="button"
        onClick={onClear}
      >
        <TrashBinIcon className={styles.trash_bin_icon} />
        <span className={styles.clear_cart_btn_text}>Clear cart</span>
      </button>
    </header>
  );
};
