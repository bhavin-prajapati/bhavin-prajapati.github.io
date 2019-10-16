import * as React from 'react';
import Icon from './icon';
import Icons from './icon/icon-manifest';
import IntlLink from './intlLink';

type SocialButtonProps = {
  logoIconType: keyof typeof Icons;
  location: string;
  dataQaId?: string;
  className?: string;
  hover?: string;
  target?: string;
};

export const SocialButton: React.SFC<SocialButtonProps> = ({
  logoIconType,
  location,
  dataQaId,
  className = '',
  hover = 'hover-shadow-ownr-light-purple',
  target = '_blank',
}) => {
  return (
    <IntlLink
      dataQaId={dataQaId}
      target={target}
      location={location}
      className={`bg-ownr-white br-100 pa2 ${hover} ${className}`}
      isExternal={true}
    >
      <Icon
        type={logoIconType}
        height="0.9rem"
        width="0.9rem"
        color="ownr-brand-purple"
      />
    </IntlLink>
  );
};
