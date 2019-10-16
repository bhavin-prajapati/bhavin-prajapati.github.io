import React from 'react';
import Icon from './icon';
import { useStaticQuery, graphql } from 'gatsby';
import { LOCATION } from '../core/location/location.types';
import IntlLink from './intlLink';
import { Button, SocialButton } from '.';

export const Footer: React.SFC = () => {
  const { contentfulFooter } = useStaticQuery(graphql`
    {
      contentfulFooter {
        ownrLinks {
          title
          url
          isExternal
          dataQaId
          target
          id
        }
        resourcesLinks {
          dataQaId
          title
          url
          isExternal
          target
          id
        }
        supportLinks {
          dataQaId
          title
          url
          isExternal
          target
          id
        }
        joinTheAffiliateProgram {
          url
          isExternal
          title
          target
          id
        }
      }
    }
  `);
  const footerLink = ({ url, dataQaId, isExternal, title, target, id }) => {
    return (
      <IntlLink
        location={url}
        dataQaId={dataQaId}
        isExternal={isExternal}
        target={target}
        key={id}
      >
        <div className="lato fw3-l ownr-white-purple tracking f-14 mv2 link hover-ownr-white pointer lh-2">
          {title}
        </div>
      </IntlLink>
    );
  };
  return (
    <div className="w-100 bg-ownr-dark-purple-gradient">
      <div className="w-100 flex flex-column justify-center items-center bt b--light-gray bg-ownr-dark-purple-gradient pa4 pa5-ns pb4-ns">
        <div className="w-100 mw7 flex flex-row justify-between flex-wrap">
          <div className="w-40 w-20-ns mh1 flex-column mv3 mv0-ns">
            <IntlLink dataQaId="footer-ownr" location={LOCATION.ROOT}>
              <Icon
                className="mb2 pointer"
                type="logo"
                width="60"
                color="white"
              />
            </IntlLink>
            {contentfulFooter.ownrLinks.map(link => {
              return footerLink(link);
            })}
          </div>
          <div className="w-40 w-20-ns mh1 flex-column mv3 mv0-ns">
            <div className="lato fw4 f-14 ttu white mb3 pb1">
              <span>Support</span>
            </div>
            {contentfulFooter.supportLinks.map(link => {
              return footerLink(link);
            })}
          </div>
          <div className="w-40 w-20-ns mh1 flex-column mv3 mv0-ns">
            <div className="lato fw4 f-14 ttu white mb3 pb1">
              <span>Resources</span>
            </div>
            {contentfulFooter.resourcesLinks.map(link => {
              return footerLink(link);
            })}
          </div>
        </div>
      </div>
      <div className="bt b--ownr-white-purple o-10" />
      <div className="w-100 flex flex-column justify-center items-center bg-ownr-dark-purple-gradient pa4">
        <div className="w-100 mw7 flex flex-row justify-between flex-wrap">
          <div className="w-30-ns w-50-m w-100">
            <IntlLink
              target={contentfulFooter.joinTheAffiliateProgram.target}
              location={contentfulFooter.joinTheAffiliateProgram.url}
              isExternal={contentfulFooter.joinTheAffiliateProgram.isExternal}
              dataQaId={contentfulFooter.joinTheAffiliateProgram.dataQaId}
            >
              <Button styles="purple-reverse" className="pv2 f-14 fw5">
                <span>{contentfulFooter.joinTheAffiliateProgram.title}</span>
              </Button>
            </IntlLink>
          </div>
          <div className="w-70-ns w-50-m w-100 justify-center justify-end-ns flex flex-row items-center mt4 mt0-ns">
            <SocialButton
              dataQaId="social-facebook"
              logoIconType="facebookLogo"
              location="https://www.facebook.com/OwnrCo/"
              className="mh2"
            />
            <SocialButton
              dataQaId="social-twitter"
              logoIconType="twitterLogo"
              location="https://twitter.com/OwnrCo"
              className="mh2"
            />
            <SocialButton
              dataQaId="social-instagram"
              logoIconType="instagramLogo"
              location="https://www.instagram.com/ownr.co/"
              className="mh2"
            />
            <SocialButton
              dataQaId="social-linkedin"
              logoIconType="linkedinLogo"
              location="https://ca.linkedin.com/company/ownrco"
              className="mh2"
            />
          </div>
        </div>
      </div>
      <div className="w-100 flex flex-column justify-center items-center bg-ownr-darkest-purple ph4 pb3 pv2">
        <div className="w-100 mw7 flex flex-column justify-start mt3 pb3">
          <div className="f6 lato fw3 tracking ownr-white-purple lh-17">
            <span>Ownr™ is a trademark used under license.</span>
            <div>
              <span>RBC Ventures Inc. website, © 2019</span>
            </div>
          </div>
          <div className="w-100 flex flex-row flex-wrap">
            <IntlLink
              dataQaId="footer-legal"
              target="_newtab"
              location="http://www.rbc.com/legal/?_ga=2.72311255.538839980.1510681329-477218029.1505155480"
              isExternal={true}
            >
              <div className="lato fw3 tracking f6 ownr-white-purple mb3-ns link hover-ownr-white  pointer lh-17 underline mr2">
                <span>Legal</span>
              </div>
            </IntlLink>
            <IntlLink
              dataQaId="footer-privacy-security"
              target="_newtab"
              location="http://www.rbc.com/privacysecurity/ca/?_ga=1.151256698.2139969263.1475008159"
              isExternal={true}
            >
              <div className="lato fw3 tracking mr2 f6 ownr-white-purple mb3-ns link hover-ownr-white pointer lh-17 underline">
                <span>Privacy &amp; Security</span>
              </div>
            </IntlLink>
            <IntlLink
              location={`${process.env.REACT_APP_FRONTEND_URL}/email-terms-and-conditions`}
              isExternal={true}
              dataQaId="footer-terms-conditions"
            >
              <div className="lato fw3 tracking mr2 f6 ownr-white-purple mb3-ns link hover-ownr-white pointer lh-17 underline">
                <span>Terms &amp; Conditions</span>
              </div>
            </IntlLink>
            <IntlLink
              target="_newtab"
              location="http://www.rbc.com/accessibility/"
              dataQaId="footer-accessibility"
              isExternal={true}
            >
              <div className="lato fw3 tracking mr2 f6 ownr-white-purple mb3-ns link hover-ownr-white pointer lh-17 underline">
                <span>Accessibility</span>
              </div>
            </IntlLink>
          </div>
        </div>
      </div>
    </div>
  );
};
