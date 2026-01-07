import { SORT_OPTIONS } from '@/constants';
import { useUrlParam } from '@/hooks/useUrlParam';

export const useSortParam = () => {
  const [sortValue, setSortValue] = useUrlParam('sortBy', SORT_OPTIONS[0]);

  const handleSortOptionClick = (option: string) => {
    setSortValue(option);
  };

  return { handleSortOptionClick, sortValue };
};
