import RemoveIcon from '@/assets/icons/remove-icon.svg?react';
import styles from './remove-button.module.scss';
import clsx from 'clsx';

export const RemoveButton = ({
  onRemove,
  className,
}: {
  onRemove: () => void;
  className?: string;
}) => {
  return (
    <button
      className={clsx(styles.button, className)}
      type="button"
      onClick={onRemove}
    >
      <RemoveIcon className={styles.icon} />
    </button>
  );
};
