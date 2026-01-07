import { PIZZA_CATEGORIES } from '@/constants';
import { useUrlParam } from '@/hooks/useUrlParam';

export const useCategoryParam = () => {
  const [activeCategory, setCategory] = useUrlParam('category', PIZZA_CATEGORIES[0]);

  const handleCategoryClick = (category: string) => {
    setCategory(category);
  };

  return { activeCategory, handleCategoryClick };
};
