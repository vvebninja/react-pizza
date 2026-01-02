import { CATEGORY_LOOKUP, PIZZA_CATEGORIES } from '@/constants';
import { useSearchParams } from 'react-router';

export const useCategoryParam = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const paramCategory = searchParams.get('category')?.toLowerCase() || '';

  const activeCategory = CATEGORY_LOOKUP[paramCategory] || PIZZA_CATEGORIES[0];

  const updateCategory = (category: string) => {
    setSearchParams(
      prev => {
        const nextParam = new URLSearchParams(prev);

        if (category !== PIZZA_CATEGORIES[0]) {
          nextParam.set('category', category.toLocaleLowerCase());
        } else {
          nextParam.delete('category');
        }

        return nextParam;
      },
      { replace: true },
    );
  };

  return { activeCategory, updateCategory };
};
