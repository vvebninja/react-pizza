import ShoppingCartIcon from '@/assets/icons/shopping-cart-icon.svg?react';
import TrashBinIcon from '@/assets/icons/trash-bin-icon.svg?react';
import css from './CartHeader.module.scss';

type CartHeaderProps = {
  title: string;
  onClear: VoidFunction;
};

export const CartHeader = ({ title, onClear }: CartHeaderProps) => {
  return (
    <header className={css.cart_header}>
      <h2 className={css.cart_header_title}>
        <ShoppingCartIcon />
        <span>{title}</span>
      </h2>

      <button
        className={css.cart_header_clear}
        type="button"
        onClick={onClear}
      >
        <TrashBinIcon />
        <span>Clear cart</span>
      </button>
    </header>
  );
};
