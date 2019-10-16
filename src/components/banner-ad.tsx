import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Icon, Link, LINK_STYLE_TYPES } from '.';

interface BannerAdPropsT {
  isBannerAdOpen: boolean;
  closeBannerAd: (newVal: boolean) => void;
}

export const BannerAd: React.SFC<BannerAdPropsT> = ({
  isBannerAdOpen,
  closeBannerAd,
}) => {
  const { contentfulBannerAd } = useStaticQuery(graphql`
    {
      contentfulBannerAd {
        description
        label
        cta {
          dataQaId
          isExternal
          title
          url
        }
      }
    }
  `);
  return (
    isBannerAdOpen && (
      <div
        className="w-100 flex flex-column items-center bg-ownr-white fixed-ns absolute top-after-nav shadow-2 z-5"
        data-qa-id="banner-ad"
      >
        <div className="pv2 mv1 flex items-start ph4 ph3-m ph0-l">
          <span className="pointer mt1" onClick={() => closeBannerAd(false)}>
            <Icon
              type="close"
              height="0.8rem"
              width="auto"
              dataQaId="close-ad-banner"
              color="ownr-medium-gray"
            />
          </span>
          <span>
            <span className="bg-ownr-orange-pink-gradient br2 mh2 dib">
              <span className="ownr-white fw4 lato ttu ma1 dib f-11">
                {contentfulBannerAd.label}
              </span>
            </span>
            <span className="paragraph f5 banner-text-mobile">
              {contentfulBannerAd.description}
            </span>
            <span>
              {' '}
              <Link
                styleType={LINK_STYLE_TYPES.ORANGE_WITHOUT_CHEVRON}
                dataQaId={contentfulBannerAd.cta.dataQaId || 'banner-ad-cta'}
                location={contentfulBannerAd.cta.url}
                isExternal={contentfulBannerAd.cta.isExternal}
                className="banner-text-mobile nowrap"
              >
                {contentfulBannerAd.cta.title}
              </Link>
            </span>
          </span>
        </div>
      </div>
    )
  );
};

export default BannerAd;
