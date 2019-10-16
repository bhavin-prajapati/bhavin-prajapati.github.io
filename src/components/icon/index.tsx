import * as React from 'react';
import SVGInline from 'react-svg-inline';
import Icons from './icon-manifest';

type SVGInlineTypes = {
  cleanup?: boolean;
  width?: string;
  height?: string;
};

type IconTypes = {
  type: keyof typeof Icons;
  color?: string;
  className?: string;
  cleanup?: boolean;
  width?: string;
  height?: string;
  dataQaId?: string;
  svgInlineProps?: SVGInlineTypes;
};

export const Icon: React.SFC<IconTypes> = ({
  type,
  color,
  className,
  dataQaId,
  ...svgInlineProps
}) => {
  const iconStyles = `${color} ${className}`;

  return (
    <SVGInline
      svg={Icons[type]}
      data-qa-id={dataQaId}
      className={iconStyles}
      classSuffix={''}
      fill="currentColor"
      {...svgInlineProps}
    />
  );
};

Icon.defaultProps = {
  cleanup: true,
  width: '1em',
  height: '1em',
};

export default Icon;
