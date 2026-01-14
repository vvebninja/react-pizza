import { PIZZA_CATEGORIES } from '@/constants/constants.ts';
import { Button } from '../ui/Button';
import css from './CategoriesList.module.scss';
import { useCategoryParam } from './useCategoryParam';

export const CategoriesList = () => {
  const { activeCategory, handleCategoryClick } = useCategoryParam();

  const isActive = (category: string) => category.toLowerCase() === activeCategory.toLowerCase();

  return (
    <ul className={css.category_list}>
      {PIZZA_CATEGORIES.map(category => (
        <li key={category}>
          <Button
            type="button"
            variant="solid"
            color="gray"
            size="sm"
            weight="bold"
            active={isActive(category)}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </Button>
        </li>
      ))}
    </ul>
  );
};
