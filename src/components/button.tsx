import * as React from 'react';

type ButtonProps = {
  onClick?: (e?: React.MouseEvent<HTMLElement>) => {} | void;
  type?: 'button' | 'submit' | 'reset';
  children?: {};
  styles?: string;
  className?: string;
  disabled?: boolean;
  dataQaId?: string;
};

export const Button: React.SFC<ButtonProps> = ({
  children,
  className,
  disabled,
  onClick,
  styles,
  type = 'button',
  dataQaId,
}) => {
  const buttonStyles = {
    'purple-reverse':
      'dib fw3 pointer w-100 lato br2 fw4 pv-28 f-18 bg-ownr-white ownr-dark-purple shadow-ownr-light-purple hover-shadow-ownr-light-purple outline-0 bn lh-copy no-text-decoration',
    orange:
      'dib fw4 w-100 pointer ph3 lato br2 pv-large-3 f-18 ownr-white bg-ownr-brand-orange hover-bg-ownr-orange-dark transition-4 bn outline-0 no-text-decoration',
    'orange-reverse':
      'dib fw4 w-100 pointer ph3 lato br2 pv-large-3 f-18 ownr-brand-orange bg-transparent hover-bg-ownr-brand-orange hover-white transition-4 ba outline-0 b--ownr-brand-orange no-text-decoration',
  };
  return (
    <button
      className={`${buttonStyles[styles]} ${className}`}
      disabled={disabled}
      onClick={onClick}
      type={type}
      data-qa-id={dataQaId}
    >
      {children}
    </button>
  );
};

export default Button;
