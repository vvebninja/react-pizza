import ClearIcon from '@/assets/icons/remove-icon.svg?react';
import css from './SearchBar.module.scss';
import { useSearchParam } from './useSearchParam';

export const SearchBar = () => {
  const { searchQuery, handleSearchChange, handleResetSearchClick } = useSearchParam();

  return (
    <div className={css.search}>
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
          className={css.search_clear_btn}
          onClick={handleResetSearchClick}
        >
          <ClearIcon className={css.search_clear_icon} />
        </button>
      )}
    </div>
  );
};
