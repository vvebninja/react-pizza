import { isRouteErrorResponse, useRouteError } from 'react-router';
import css from './error-display.module.scss';
import { LinkButton } from '../link-button/link-button';
import { routePaths } from '@/constants';

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
    <section className={css.error_container}>
      <h2 className={css.error_title}>Oops! Something went wrong</h2>
      <p className={css.error_message}>{errorMessage}</p>
      <LinkButton
        to={routePaths.HOME}
        variant="solid"
        color="dark"
        size="md"
      >
        Back to Home
      </LinkButton>
    </section>
  );
};
