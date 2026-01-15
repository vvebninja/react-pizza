import clsx from 'clsx';
import { AiOutlineLoading } from 'react-icons/ai';
import css from './Spinner.module.scss';

type SpinnerProps = {
  className?: string;
};
export const Spinner = ({ className }: SpinnerProps) => {
  return <AiOutlineLoading className={clsx(css.spinner, className)} />;
};
