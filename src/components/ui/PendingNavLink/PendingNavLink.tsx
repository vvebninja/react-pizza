import clsx from 'clsx';
import { type ReactNode } from 'react';
import { NavLink, type NavLinkRenderProps } from 'react-router';
import { Button, type ButtonStyles } from '../Button';
import css from './PendingNavLink.module.scss';

type PendingNavLinkProps = {
  to: string;
  children: ReactNode;
} & ButtonStyles;

const isPending =
  (node: ReactNode) =>
  ({ isPending }: NavLinkRenderProps) => {
    if (isPending) {
      return <span className={css.loading_label}>...LOADING</span>;
    }
    return node;
  };

export const PendingNavLink = ({
  children,
  size = 'lg',
  variant = 'solid',
  color = 'dark',
  weight = 'normal',
  to,
  className,
}: PendingNavLinkProps) => {
  return (
    <Button
      as={NavLink}
      to={to}
      viewTransition
      className={clsx(css.root, className)}
      color={color}
      variant={variant}
      size={size}
      weight={weight}
    >
      {isPending(children)}
    </Button>
  );
};
