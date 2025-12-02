import styles from './quantity-control.module.scss';
import PlusIcon from '@/assets/icons/plus-icon.svg?react';
import MinusIcon from '@/assets/icons/minus-icon.svg?react';
import clsx from 'clsx';

export const QuantityControl = ({
  quantity,
  onDecrease,
  onIncrease,
  className,
}: {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
  className?: string;
}) => {
  return (
    <div className={clsx(styles.quantity_control, className)}>
      <button
        className={styles.decrease_button}
        type="button"
        onClick={onDecrease}
        disabled={quantity === 1}
      >
        <MinusIcon className={styles.decrease_button_icon} />
      </button>
      <span>{quantity}</span>
      <button
        className={styles.increase_button}
        type="button"
        onClick={onIncrease}
      >
        <PlusIcon className={styles.increase_button_icon} />
      </button>
    </div>
  );
};
