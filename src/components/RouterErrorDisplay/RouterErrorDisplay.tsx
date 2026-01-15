import { isRouteErrorResponse, useRouteError } from 'react-router';
import css from './RouterErrorDisplay.module.scss';
import { TryAgainButton } from '../TryAgainButton';
import { GoBackLink } from '../GoBackLink';
import { routePaths } from '@/constants';

export const RouterErrorDisplay = () => {
  const error = useRouteError();
  let errorMessage = '';

  const is404 = isRouteErrorResponse(error) && error?.status === 404;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.data;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else {
    errorMessage = 'Unknown Error';
  }

  return (
    <section className={css.root}>
      <h2 className={css.title}>Oops! Something went wrong</h2>
      <p className={css.subtitle}>{errorMessage}</p>
      {is404 ? (
        <GoBackLink
          to={routePaths.PIZZAS}
          color="dark"
        />
      ) : (
        <TryAgainButton />
      )}
    </section>
  );
};
