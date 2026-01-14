import { ShoppingCart, TrashBin } from '@/assets/icons';
import css from './CartHeader.module.scss';

type CartHeaderProps = {
  title: string;
  onClear: VoidFunction;
};

export const CartHeader = ({ title, onClear }: CartHeaderProps) => {
  return (
    <header className={css.root}>
      <h2 className={css.header_title}>
        <ShoppingCart />
        <span>{title}</span>
      </h2>

      <button
        className={css.clear_cart}
        type="button"
        onClick={onClear}
      >
        <TrashBin />
        <span>Clear cart</span>
      </button>
    </header>
  );
};
