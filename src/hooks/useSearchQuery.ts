import { SEARCH_QUERY_DEBOUNCE_TIME } from '@/constants';
import { useState, useEffect, type ChangeEvent } from 'react';
import { useSearchParams, useNavigate } from 'react-router';
import { useDebounce } from './useDebounce';
import { useIsInitialMountRef } from './useIsInitialMountRef';

export const useSearchQuery = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [query, setQuery] = useState(searchParams.get('title') ?? '');
  const debouncedQ = useDebounce(query, SEARCH_QUERY_DEBOUNCE_TIME);
  const isInitialMountRef = useIsInitialMountRef();

  const handleQuery = (e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);
  const resetQuery = () => setQuery('');

  useEffect(() => {
    if (isInitialMountRef.current) return;

    const newParams = new URLSearchParams(window.location.search);

    if (debouncedQ) {
      newParams.set('title', debouncedQ);
    } else {
      newParams.delete('title');
    }

    navigate(`?${newParams.toString()}`, { replace: true });
  }, [debouncedQ, navigate, isInitialMountRef]);

  return { query, handleQuery, resetQuery };
};
