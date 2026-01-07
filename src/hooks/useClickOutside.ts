import { useEffect, useRef } from 'react';

export const useClickOutside = <T extends HTMLElement>(onOutsideClick: () => void) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onOutsideClick();
      }
    };

    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onOutsideClick]);

  return ref;
};
