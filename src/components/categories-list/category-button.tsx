import { clsx } from 'clsx';
import styles from './category-button.module.scss';

export const CategoryButton = ({
  categoryText,
  selectedCategory,
  onClick,
  className,
}: {
  categoryText: string;
  selectedCategory: string;
  onClick: (category: string) => void;
  className?: string;
}) => {
  return (
    <button
      className={clsx(styles.button, className, selectedCategory === categoryText && styles.active)}
      onClick={() => onClick(categoryText)}
    >
      {categoryText}
    </button>
  );
};
