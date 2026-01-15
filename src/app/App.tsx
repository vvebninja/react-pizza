import { NavigationOverlay } from '@/components/NavigationOverlay';
import { Outlet } from 'react-router';
import { SWRConfig } from 'swr';

export const App = () => {
  return (
    <SWRConfig
      value={{
        onError: (error, key) => {
          if (error.status !== 403 && error.status !== 404) {
            console.error(`Error key: ${key}:`, error);
          }
        },
        shouldRetryOnError: false,
      }}
    >
      <NavigationOverlay />
      <Outlet />
    </SWRConfig>
  );
};
