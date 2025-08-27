import type { ReactElement } from 'react';

interface ICustomIconProps {
  icon: string;
  large?: true;
}

export const CustomIcon = ({ icon, large }: ICustomIconProps): ReactElement => {
  const classes: string[] = ['custom-icon', 'material-symbols-outlined'];

  if (large) classes.push('large');

  return <span className={classes.join(' ')}>{icon}</span>;
};
