import ClearIcon from '@/assets/icons/remove-icon.svg?react';
import css from './search.module.scss';

export const Search = () => {
  const query = false;

  return (
    <div className={css.search}>
      <input
        type="search"
        name="search"
        className={css.search_input}
        placeholder="Search"
      />

      {query && (
        <button className={css.search_clear_btn}>
          <ClearIcon className={css.search_clear_icon} />
        </button>
      )}
    </div>
  );
};
