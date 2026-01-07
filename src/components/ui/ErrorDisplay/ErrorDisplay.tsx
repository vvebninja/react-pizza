import { isRouteErrorResponse, useRouteError } from 'react-router';
import ArrowLeftIcon from '@/assets/icons/arrow-left-icon.svg?react';
import css from './ErrorDisplay.module.scss';
import { routePaths } from '@/constants';
import { LinkButton } from '@/components/ui/LinkButton';

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
    <section className={css.error}>
      <h2 className={css.error_title}>Oops! Something went wrong</h2>
      <p className={css.error_message}>{errorMessage}</p>
      <LinkButton
      className={css.error_go_back}
        to={routePaths.HOME}
        variant="solid"
        color="dark"
        size="md"
      >
        <ArrowLeftIcon />
        Back to Home
      </LinkButton>
    </section>
  );
};
