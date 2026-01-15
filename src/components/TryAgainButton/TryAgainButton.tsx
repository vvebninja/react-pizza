import { useState } from 'react';
import { CiRedo } from 'react-icons/ci';
import { Button } from '../ui/Button';
import { Spinner } from '../ui/Spinner/Spinner';
import css from './TryAgainButton.module.scss';

export const TryAgainButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleRefresh = () => {
    setIsLoading(true);
    window.location.reload();
  };

  return (
    <Button
      type="button"
      color="dark"
      onClick={handleRefresh}
    >
      {isLoading ? <Spinner /> : <CiRedo />}
      <span className={css.label}>Try again</span>
    </Button>
  );
};
