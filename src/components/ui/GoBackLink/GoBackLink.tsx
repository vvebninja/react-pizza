import { ArrowLeft } from '@/assets/icons';
import { routePaths } from '@/constants';
import { type ButtonStyles } from '../Button';
import { PendingNavLink } from '../PendingNavLink';
import css from './GoBackLink.module.scss';

type GoBackLinkProps = ButtonStyles;

export const GoBackLink = ({ variant = 'solid', size = 'lg', color = 'dark' }: GoBackLinkProps) => {
  return (
    <PendingNavLink
      to={routePaths.PIZZAS}
      className={css.root}
      size={size}
      variant={variant}
      color={color}
    >
      <ArrowLeft />
      Go back
    </PendingNavLink>
  );
};
