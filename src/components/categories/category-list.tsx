import { PIZZA_CATEGORIES } from '@/constants/constants.ts';
import clsx from 'clsx';
import { CategoryBtn } from './category-btn';
import css from './category-list.module.scss';
import { useCategoryParam } from './use-category-query';

type CategoryListProps = {
  className?: string;
};

export const CategoryList = ({ className }: CategoryListProps) => {
  const { activeCategory, updateCategory } = useCategoryParam();

  const handleCategoryClick = (category: string) => {
    updateCategory(category);
  };

  return (
    <ul className={clsx(css.category_list, className)}>
      {PIZZA_CATEGORIES.map(category => (
        <li key={category}>
          <CategoryBtn
            category={category}
            selectedCategory={activeCategory}
            onClick={handleCategoryClick}
          />
        </li>
      ))}
    </ul>
  );
};
