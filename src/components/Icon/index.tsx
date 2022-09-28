import { ComponentProps } from 'react';
import { CHEVRON_DOWN, CHEVRON_UP } from './IconsList';

interface IconProps extends ComponentProps<'img'> {
  icon: typeof CHEVRON_DOWN | typeof CHEVRON_UP;
}

export const Icon = ({ icon, className }: IconProps) => {
  return <img src={icon} className={className} />;
};
