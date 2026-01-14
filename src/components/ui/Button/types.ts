export type ButtonSizes = 'sm' | 'md' | 'lg';
export type ButtonVariants = 'solid' | 'subtle';
export type ButtonColors = 'accent' | 'dark' | 'gray';
export type ButtonWeights = 'normal' | 'bold';

export type ButtonStyles = {
  size?: ButtonSizes;
  variant?: ButtonVariants;
  color?: ButtonColors;
  weight?: ButtonWeights;
  className?: string;
};

export type ButtonOwnProps<E extends React.ElementType> = {
  active?: boolean;
  as?: E;
} & ButtonStyles;
