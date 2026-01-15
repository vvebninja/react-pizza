import clsx from 'clsx';
import { type ReactNode } from 'react';
import { NavLink } from 'react-router';
import { type ButtonStyles, Button } from '../ui/Button';
import { Spinner } from '../ui/Spinner/Spinner';
import css from './PendingNavLink.module.scss';

type PendingNavLinkProps = {
  to: string;
  children: ReactNode;
} & ButtonStyles;

export const PendingNavLink = ({
  children,
  to,
  className,
  ...buttonStyles
}: PendingNavLinkProps) => {
  return (
    <Button
      as={NavLink}
      to={to}
      viewTransition
      className={clsx(css.root, className)}
      {...buttonStyles}
    >
      {({ isPending }) =>
        isPending ? (
          <>
            <Spinner />
            <span className={css.loading_label}>Loading</span>
          </>
        ) : (
          children
        )
      }
    </Button>
  );
};
