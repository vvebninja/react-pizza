import { isRouteErrorResponse, useRouteError } from 'react-router';
import { GoBackLink } from '../GoBackLink';
import css from './ErrorDisplay.module.scss';

export const ErrorDisplay = () => {
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.data?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else {
    errorMessage = 'An unknown error occurred';
  }

  return (
    <section className={css.root}>
      <h2 className={css.title}>Oops! Something went wrong</h2>
      <p className={css.subtitle}>{errorMessage}</p>
      <GoBackLink />
    </section>
  );
};
