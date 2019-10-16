import * as React from 'react';

type CardSquarePropsT = {
  children?: React.ReactNode;
  className?: string;
  shadow?: boolean;
  dataQaId?: string;
};

export const CardSquare: React.SFC<CardSquarePropsT> = ({
  children,
  className,
  shadow,
  dataQaId,
}) => {
  return (
    <div
      className={`w-100 bg-white ${className} ${
        shadow ? 'diffused-shadow' : ''
      }`}
      data-qa-id={dataQaId}
    >
      {children}
    </div>
  );
};
