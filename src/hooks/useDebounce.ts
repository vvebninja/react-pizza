import { useEffect, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useDebounce = (value: any, delay: number) => {
  const [debauncedValue, setDebauncedValue] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => {
      setDebauncedValue(value);
    }, delay);

    return () => clearTimeout(id);
  }, [value, delay]);

  return debauncedValue;
};
