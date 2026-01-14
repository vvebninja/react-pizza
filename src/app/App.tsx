import { NavigationOverlay } from '@/components/ui/NavigationOverlay';
import { Outlet } from 'react-router';

export const App = () => {
  return (
    <>
      <NavigationOverlay />
      <Outlet />
    </>
  );
};
