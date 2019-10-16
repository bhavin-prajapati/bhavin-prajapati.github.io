import * as React from 'react';
import { Link } from 'gatsby';
import { LOCATION } from '../core/location/location.types';

type IntlLinkPropsT = {
  location: LOCATION | string;
  isExternal?: boolean;
  children?: {};
  className?: string;
  onClick?: () => {} | void;
  target?: string;
  dataQaId?: string;
};

const IntlLink: React.SFC<IntlLinkPropsT> = ({
  location,
  children,
  className = '',
  target,
  dataQaId,
  isExternal,
  onClick,
}) => {
  if (isExternal) {
    return (
      <a
        href={location}
        className={className}
        target={target}
        data-qa-id={dataQaId}
        onClick={onClick}
      >
        {children}
      </a>
    );
  } else {
    return (
      <Link
        to={location}
        className={className}
        target={target}
        data-qa-id={dataQaId}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }
};

export default IntlLink;
