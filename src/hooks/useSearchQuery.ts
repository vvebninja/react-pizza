import { SEARCH_QUERY_DEBOUNCE_TIME } from '@/constants';
import { useRef, useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router';
import { useDebounce } from './useDebounce';
import { useIsInitialMountRef } from './useIsInitialMountRef';

export const useSearchQuery = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // We store the initial value from the URL to compare later
  const initialUrlQuery = useRef(searchParams.get('title') ?? '');
  const [query, setQuery] = useState<string>(initialUrlQuery.current);

  const debouncedQ = useDebounce(query, SEARCH_QUERY_DEBOUNCE_TIME);
  const isInitialMountRef = useIsInitialMountRef();

  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);
  const resetQuery = () => setQuery('');

  useEffect(() => {
    if (isInitialMountRef.current) return;

    if (debouncedQ === initialUrlQuery.current) return;

    const params = new URLSearchParams(window.location.search);
    if (debouncedQ) {
      params.set('title', debouncedQ);
    } else {
      params.delete('title');
    }

    initialUrlQuery.current = debouncedQ;

    navigate(`?${params.toString()}`, { replace: true });
  }, [debouncedQ, navigate, isInitialMountRef]);

  return { query, handleQuery, resetQuery };
};
