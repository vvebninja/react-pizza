import { CiRedo } from 'react-icons/ci';
import css from './ErrorDisplay.module.scss';
import { Button } from '../ui/Button';

type ErrorDisplayProps = {
  title?: string;
  error?: Error;
  resetErrorBoundary?: VoidFunction;
};

export const ErrorDisplay = ({
  title = 'Oops! Something went wrong',
  error,
  resetErrorBoundary,
}: ErrorDisplayProps) => {
  return (
    <section className={css.root}>
      <h2 className={css.title}>{title}</h2>
      {error && <p className={css.subtitle}>{error?.message}</p>}

      {resetErrorBoundary && (
        <Button
          className={css.try_again_btn}
          type="button"
          color="dark"
          onClick={resetErrorBoundary}
        >
          <CiRedo /> Try again
        </Button>
      )}
    </section>
  );
};
