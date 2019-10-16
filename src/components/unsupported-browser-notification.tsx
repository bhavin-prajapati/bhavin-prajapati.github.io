import * as React from 'react';
import { Icon } from '.';

interface UnsupportedBrowserNotificationPropsT {
  isNotificationOpen: boolean;
  closeNotification: (newValue: boolean) => void;
}

export const UnsupportedBrowserNotification: React.SFC<
  UnsupportedBrowserNotificationPropsT
> = ({ isNotificationOpen, closeNotification }) => {
  return (
    isNotificationOpen && (
      <div className="w-100 bg-white">
        <div className="flex flex-row justify-between mw7 items-center center ph4 ph0-l">
          <Icon
            type="caution"
            width="32px"
            height="29px"
            className="caution-yellow"
          />
          <p className="mh3 w-100 f5 fw3 lato ownr-dark-gray lh-copy tracking db">
            We have detected that you're using an unsupported browser, the site
            may not function correctly. We recommend you use the latest version
            of Chrome or Safari.
          </p>
          <button
            className="bw0 pa0 lh-none pointer bg-transparent"
            onClick={() => closeNotification(false)}
          >
            <Icon type="close" color="light-silver" />
          </button>
        </div>
      </div>
    )
  );
};
