import * as React from 'react';

interface HeadingProps {
  size: 1 | 2 | 3 | 4 | 5;
  children?: {};
  className?: string;
}

export const Heading: React.SFC<HeadingProps> = ({
  size,
  children,
  className = '',
}) => {
  const Element = `h${size}`;
  return (
    // @ts-ignore
    <Element className={`heading-${size} ${className}`}>{children}</Element>
  );
};
