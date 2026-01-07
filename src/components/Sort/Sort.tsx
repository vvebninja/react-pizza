import ArrowUpIcon from '@/assets/icons/arrow-up-icon.svg?react';
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
      className={css.sort}
      ref={sortRef}
    >
      <button
        className={css.sort_trigger}
        onClick={togglePopup}
        aria-expanded={isOpen}
      >
        <ArrowUpIcon className={clsx(css.sort_icon, { [css.rotate]: isOpen })} />
        <div className={css.sort_text_wrap}>
          <span className={css.sort_title}>sort by:</span>
          <span className={css.sort_selected_sort_wrap}>
            <span className={css.sort_selected_sort}>{sortValue}</span>
          </span>
        </div>
      </button>

      <ul className={clsx(css.sort_popover, { [css.is_visible]: isOpen })}>
        {SORT_OPTIONS.map(option => (
          <li key={option}>
            <button
              className={clsx(css.sort_option, { [css.active]: sortValue === option })}
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
