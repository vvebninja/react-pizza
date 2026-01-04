import { PIZZA_CATEGORIES } from '@/constants/constants.ts';
import { CategoryBtn } from './category-btn';
import css from './categories-list.module.scss';
import { useCategoryParam } from './use-category-query';

export const CategoriesList = () => {
  const { activeCategory, updateCategory } = useCategoryParam();

  const handleCategoryClick = (category: string) => {
    updateCategory(category);
  };

  return (
    <ul className={css.category_list}>
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
