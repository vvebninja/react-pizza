import ClearIcon from '@/assets/icons/remove-icon.svg?react';
import css from './search.module.scss';
import { useSearchQuery } from '@/hooks/useSearchQuery';

export const Search = () => {
  const { query, handleQuery, resetQuery } = useSearchQuery();

  return (
    <div className={css.search}>
      <input
        className={css.search_input}
        type="search"
        name="search"
        placeholder="Search"
        value={query}
        onChange={handleQuery}
      />

      {query && (
        <button
          className={css.search_clear_btn}
          onClick={resetQuery}
        >
          <ClearIcon className={css.search_clear_icon} />
        </button>
      )}
    </div>
  );
};
