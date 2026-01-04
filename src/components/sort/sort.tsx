import clsx from 'clsx';
import css from './sort.module.scss';
import { useState } from 'react';
import ArrowUpIcon from '@/assets/icons/arrow-up-icon.svg?react';
import { SORT_OPTIONS } from '@/constants/constants';
import { useClickOutside } from '@/hooks/useClickOutside';
import { useSearchParams } from 'react-router';

export const Sort = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const selectedSort = searchParams.get('sortBy') ?? SORT_OPTIONS[0];

  const { ref: sortContainerRef } = useClickOutside<HTMLDivElement>({
    onClose: () => setIsOpen(false),
    isOpen,
  });

  const handleTogglePopup = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => () => {
    setIsOpen(false);

    setSearchParams(prev => {
      const nextParam = new URLSearchParams(prev);
      if (option !== SORT_OPTIONS[0]) {
        nextParam.set('sortBy', option);
      } else {
        nextParam.delete('sortBy');
      }
      return nextParam;
    });
  };

  return (
    <div
      className={css.sort}
      ref={sortContainerRef}
    >
      <button
        className={css.sort_trigger}
        onClick={handleTogglePopup}
      >
        <ArrowUpIcon className={clsx(css.sort_icon, { [css.rotate]: isOpen })} />
        <div className={css.sort_text_wrap}>
          <span className={css.sort_title}>sort by:</span>
          <span className={css.sort_selected_sort_wrap}>
            <span className={css.sort_selected_sort}>{selectedSort}</span>
          </span>
        </div>
      </button>

      <ul className={clsx(css.sort_popover, { [css.is_visible]: isOpen })}>
        {SORT_OPTIONS.map(option => (
          <li key={option}>
            <button
              className={clsx(css.sort_option, { [css.active]: selectedSort === option })}
              onClick={handleOptionClick(option)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
