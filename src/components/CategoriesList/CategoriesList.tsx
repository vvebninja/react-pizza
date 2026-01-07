import { PIZZA_CATEGORIES } from '@/constants/constants.ts';
import css from './CategoriesList.module.scss';
import { useCategoryParam } from './useCategoryParam';
import { CategoryButton } from './CategoryButton';

export const CategoriesList = () => {
  const { activeCategory, handleCategoryClick } = useCategoryParam();


  return (
    <ul className={css.category_list}>
      {PIZZA_CATEGORIES.map(category => (
        <li key={category}>
          <CategoryButton
            category={category}
            selectedCategory={activeCategory}
            onClick={handleCategoryClick}
          />
        </li>
      ))}
    </ul>
  );
};
