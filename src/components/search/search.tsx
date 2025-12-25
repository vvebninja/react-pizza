import ClearIcon from '@/assets/icons/remove-icon.svg?react';
import { SEARCH_QUERY_DEBOUNCE_TIME } from '@/constants';
import { useDebounce } from '@/hooks/useDebounce';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import css from './search.module.scss';

export const Search = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [query, setQuery] = useState(searchParams.get('title') ?? '');
  const debouncedQ = useDebounce(query, SEARCH_QUERY_DEBOUNCE_TIME);

  useEffect(() => {
    const params = new URLSearchParams();
    if (debouncedQ) params.set('title', debouncedQ);
    navigate(`?${params.toString()}`, { replace: true });
  }, [debouncedQ, navigate]);

  return (
    <div className={css.search}>
      <input
        className={css.search_input}
        type="search"
        name="search"
        placeholder="Search"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      {query && (
        <button
          className={css.search_clear_btn}
          onClick={() => setQuery('')}
        >
          <ClearIcon className={css.search_clear_icon} />
        </button>
      )}
    </div>
  );
};
