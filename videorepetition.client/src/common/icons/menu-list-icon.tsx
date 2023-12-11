import { FunctionComponent } from 'react';
import { IconProps } from './icon-props';

export const MenuListIcon: FunctionComponent<IconProps> = (props) => {
  const { size, color, className } = props;

  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
  >
    <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
  </svg>
  );
};

MenuListIcon.defaultProps = {
  color: '#000000',
  size: 24,
};
