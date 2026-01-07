import { useSearchParams } from 'react-router';

export const useUrlParam = (key: string, initialValue = '') => {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get(key) ?? initialValue;

  const updateParam = (nextValue: string) => {
    setSearchParams(
      prev => {
        const nextParam = new URLSearchParams(prev);
        if (nextValue && nextValue !== initialValue) {
          nextParam.set(key, nextValue.toLowerCase());
        } else {
          nextParam.delete(key);
        }
        return nextParam;
      },
      { replace: true },
    );
  };

  return [value, updateParam] as const;
};
