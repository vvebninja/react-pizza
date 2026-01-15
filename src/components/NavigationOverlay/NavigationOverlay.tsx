import css from './NavigationOverlay.module.scss';
import clsx from 'clsx';
import { useNavigation } from 'react-router';

export const NavigationOverlay = () => {
  const { state } = useNavigation();

  return (
    <div
      className={clsx(css.overlay, {
        [css.is_navigating]: state === 'loading',
      })}
    />
  );
};
