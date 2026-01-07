import { SEARCH_QUERY_DEBOUNCE_TIME } from '@/constants';
import { useDebounce } from '../../hooks/useDebounce';
import { useUrlParam } from '../../hooks/useUrlParam';
import { useEffect, useState, type ChangeEvent } from 'react';

export const useSearchParam = () => {
  const [paramSearchQuery, setParamSearchQuery] = useUrlParam('title');
  const [searchQuery, setSearchQuery] = useState(paramSearchQuery);
  const debouncedSearchQuery = useDebounce(searchQuery, SEARCH_QUERY_DEBOUNCE_TIME);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value);

  const handleResetSearchClick = () => setSearchQuery('');

  useEffect(() => {
    if (debouncedSearchQuery !== paramSearchQuery) {
      setParamSearchQuery(debouncedSearchQuery);
    }
  }, [debouncedSearchQuery, setParamSearchQuery, paramSearchQuery]);

  return {
    searchQuery,
    handleSearchChange,
    handleResetSearchClick,
  };
};
