import { ArrowUp } from '@/assets/icons';
import { SORT_OPTIONS } from '@/constants/constants';
import { useClickOutside } from '@/hooks/useClickOutside';
import clsx from 'clsx';
import { useState } from 'react';
import css from './Sort.module.scss';
import { useSortParam } from './useSortParam';

export const Sort = () => {
  const { sortValue, handleSortOptionClick } = useSortParam();

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => setIsOpen(!isOpen);
  const closePopup = () => setIsOpen(false);

  const sortRef = useClickOutside<HTMLDivElement>(closePopup);

  const handleOptionClick = (option: string) => {
    handleSortOptionClick(option);
    closePopup();
  };

  return (
    <div
      className={css.root}
      ref={sortRef}
    >
      <button
        className={css.popup_trigger}
        onClick={togglePopup}
        aria-expanded={isOpen}
      >
        <ArrowUp className={clsx(css.icon, { [css.is_rotated]: isOpen })} />
        <div>
          <span className={css.title}>sort by:</span>
          <span className={css.selected_sort_wrap}>
            <span className={css.selected_sort}>{sortValue}</span>
          </span>
        </div>
      </button>

      <ul className={clsx(css.sort_popup, { [css.is_visible]: isOpen })}>
        {SORT_OPTIONS.map(option => (
          <li key={option}>
            <button
              className={clsx(css.option, { [css.active]: sortValue === option })}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
