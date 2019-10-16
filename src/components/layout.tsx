import React from 'react';

import { NavigationBar } from './navigation-bar';
import { Footer } from './footer';
import BannerAd from './banner-ad';

type LayoutProps = {
  children: {};
  path: string;
  showBannerAd?: boolean;
};

export const Layout: React.SFC<LayoutProps> = ({
  children,
  path,
  showBannerAd = false,
}) => {
  const [isNotificationOpen, closeNotification] = React.useState(
    navigator && /(MSIE|Trident)/.test(navigator.userAgent),
  );
  const [isBannerAdOpen, closeBannerAd] = React.useState(showBannerAd);

  const pageWrapperClass = isNotificationOpen
    ? 'page-wrapper-for-unsupported-browser-notification'
    : isBannerAdOpen
    ? 'page-wrapper-for-banner'
    : 'page-wrapper';
  return (
    <div className="ma0 pa0 h-100 overflow-x-hidden">
      <div className={`w-100 h-100 flex flex-column justify-between `}>
        <NavigationBar
          path={path}
          isNotificationOpen={isNotificationOpen}
          closeNotification={closeNotification}
        />
        <div className={`main-container ${pageWrapperClass}`}>
          <BannerAd
            isBannerAdOpen={isBannerAdOpen}
            closeBannerAd={closeBannerAd}
          />
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};
