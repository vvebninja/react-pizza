import { Outlet } from 'react-router';
import { OrderContextProvider } from './contexts/order-context';

export const Root = () => {
  return (
    <OrderContextProvider>
      <Outlet />
    </OrderContextProvider>
  );
};
