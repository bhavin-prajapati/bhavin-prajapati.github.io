import * as React from 'react';
import { LOCATION } from '../core/location/location.types';
import { Icon } from '.';
import IntlLink from './intlLink';

export enum LINK_STYLE_TYPES {
  ORANGE_WITH_CHEVRON = 'LINK_STYLE_TYPES/ORANGE_WITH_CHEVRON',
  ORANGE_WITHOUT_CHEVRON = 'LINK_STYLE_TYPES/ORANGE_WITHOUT_CHEVRON',
  PURPLE_WITH_CHEVRON = 'LINK_STYLE_TYPES/PURPLE_WITH_CHEVRON',
  PURPLE_WITHOUT_CHEVRON = 'LINK_STYLE_TYPES/PURPLE_WITHOUT_CHEVRON',
}

interface LinkProps {
  location: LOCATION | string;
  children: {};
  styleType?: LINK_STYLE_TYPES;
  isExternal?: boolean;
  dataQaId?: string;
  className?: string;
  target?: string;
}

export const Link: React.SFC<LinkProps> = ({
  location,
  isExternal = false,
  dataQaId,
  children,
  className = '',
  styleType = LINK_STYLE_TYPES.ORANGE_WITH_CHEVRON,
  target,
}) => {
  const styleCss =
    styleType === LINK_STYLE_TYPES.ORANGE_WITH_CHEVRON ||
    styleType === LINK_STYLE_TYPES.ORANGE_WITHOUT_CHEVRON
      ? 'orange-text-link b padding-bottom-hover-orange-underline'
      : styleType === LINK_STYLE_TYPES.PURPLE_WITH_CHEVRON
      ? 'purple-text-link b padding-bottom-hover-purple-underline'
      : styleType === LINK_STYLE_TYPES.PURPLE_WITHOUT_CHEVRON
      ? 'purple-text-link underline text-decoration-hover-bold'
      : '';
  const chevronColor =
    styleType === LINK_STYLE_TYPES.ORANGE_WITH_CHEVRON
      ? 'ownr-brand-orange'
      : styleType === LINK_STYLE_TYPES.PURPLE_WITH_CHEVRON
      ? 'ownr-brand-dark-purple'
      : '';
  return (
    <span>
      <IntlLink
        location={location}
        isExternal={isExternal}
        dataQaId={dataQaId}
        className={`${styleCss} ${className}`}
        target={target}
      >
        <span>{children}</span>
      </IntlLink>
      {(styleType === LINK_STYLE_TYPES.ORANGE_WITH_CHEVRON ||
        styleType === LINK_STYLE_TYPES.PURPLE_WITH_CHEVRON) && (
        <Icon
          type="chevronRight"
          width="13px"
          height="13px"
          color={chevronColor}
        />
      )}
    </span>
  );
};

export default Link;
