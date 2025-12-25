import { useEffect, useRef } from 'react';

export const useIsInitialMountRef = () => {
  const isInitialMountRef = useRef(true);

  useEffect(() => {
    isInitialMountRef.current = false;
  }, []);

  return isInitialMountRef;
};
