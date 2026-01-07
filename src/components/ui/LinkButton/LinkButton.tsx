import clsx from 'clsx';
import { Link, type LinkProps } from 'react-router';
import styles from './LinkButton.module.scss';

type ButtonSize = 'md' | 'lg';
type ButtonVariant = 'solid' | 'subtle';
type ButtonColor = 'accent' | 'dark';

type LinkButtonProps = LinkProps & {
  size: ButtonSize;
  variant: ButtonVariant;
  color?: ButtonColor;
  className?: string;
};

export const LinkButton = ({
  size,
  variant,
  color,
  children,
  className,
  ...restProps
}: LinkButtonProps) => {
  const buttonClasses = clsx(
    styles.button_base,
    styles[`size_${size}`],
    styles[`variant_${variant}`],
    styles[`color_${color}`],
    className,
  );

  return (
    <Link
      className={buttonClasses}
      {...restProps}
    >
      {children}
    </Link>
  );
};
