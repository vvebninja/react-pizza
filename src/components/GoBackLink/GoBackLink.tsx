import { NavLink } from 'react-router';
import { Button, type ButtonStyles } from '../ui/Button';
import { Spinner } from '../ui/Spinner/Spinner';
import css from './GoBackLink.module.scss';
import { GoArrowLeft } from 'react-icons/go';

type GoHomeLinkProps = {
  to: string;
} & ButtonStyles;

export const GoBackLink = ({ to, ...buttonStyles }: GoHomeLinkProps) => {
  return (
    <Button
      as={NavLink}
      to={to}
      viewTransition
      className={css.root}
      {...buttonStyles}
    >
      {({ isPending }) =>
        isPending ? (
          <>
            <Spinner />
            <span className={css.loading_label}>Loading</span>
          </>
        ) : (
          <>
            <GoArrowLeft />
            Go back
          </>
        )
      }
    </Button>
  );
};
