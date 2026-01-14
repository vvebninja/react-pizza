import { Clear } from '@/assets/icons';
import css from './SearchBar.module.scss';
import { useSearchParam } from './useSearchParam';

export const SearchBar = () => {
  const { searchQuery, handleSearchChange, handleResetSearchClick } = useSearchParam();

  return (
    <div className={css.root}>
      <input
        className={css.search_input}
        type="search"
        name="search"
        placeholder="Search"
        value={searchQuery}
        onChange={handleSearchChange}
      />

      {searchQuery && (
        <button
          className={css.reset_search_btn}
          onClick={handleResetSearchClick}
        >
          <Clear />
        </button>
      )}
    </div>
  );
};
