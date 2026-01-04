import { useEffect, useRef } from 'react';

type UseClickOutsideProps = { onClose: () => void; isOpen: boolean };

export const useClickOutside = ({ onClose, isOpen }: UseClickOutsideProps) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [onClose, isOpen]);

  return { ref };
};
