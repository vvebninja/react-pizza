import ShoppingCartIcon from '@/assets/icons/shopping-cart-icon.svg?react';
import TrashBinIcon from '@/assets/icons/trash-bin-icon.svg?react';
import styles from './cart-header.module.scss';
import clsx from 'clsx';
import { useCartContext } from '@/contexts/cart-context';

export const CartHeader = ({ title, className }: { title: string; className?: string }) => {
  const { clearCart } = useCartContext();

  return (
    <header className={clsx(styles.cart_header, className)}>
      <h2 className={styles.cart_title}>
        <ShoppingCartIcon className={styles.shopping_cart_icon} />
        <span className={styles.cart_title_text}>{title}</span>
      </h2>

      <button
        className={styles.clear_cart_btn}
        type="button"
        onClick={() => clearCart()}
      >
        <TrashBinIcon className={styles.trash_bin_icon} />
        <span className={styles.clear_cart_btn_text}>Clear cart</span>
      </button>
    </header>
  );
};
