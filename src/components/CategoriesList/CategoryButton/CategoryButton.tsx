import { clsx } from 'clsx';
import css from './CategoryButton.module.scss';

type CategoryBtnProps = {
  category: string;
  selectedCategory: string;
  onClick: (category: string) => void;
  className?: string;
};

export const CategoryButton = ({
  category,
  selectedCategory,
  onClick,
  className,
}: CategoryBtnProps) => {
  const handleClick = () => onClick(category);

  const classNames = clsx(
    css.category_btn,
    className,
    category.toLocaleLowerCase() === selectedCategory.toLocaleLowerCase() && css.active,
  );

  return (
    <button
      className={classNames}
      onClick={handleClick}
    >
      {category}
    </button>
  );
};
