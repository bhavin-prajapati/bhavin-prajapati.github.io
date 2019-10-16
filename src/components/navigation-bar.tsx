import * as React from 'react';
import { isEmpty, isNil } from 'ramda';
import { slide as Menu, State } from 'react-burger-menu';
import { LOCATION } from '../core/location/location.types';
import { Icon, Button } from '.';
import IntlLink from './intlLink';
import { useStaticQuery, graphql } from 'gatsby';
import { UnsupportedBrowserNotification } from './unsupported-browser-notification';

interface NavigationBarProps {
  path: string;
  isNotificationOpen: boolean;
  closeNotification: (newVal: boolean) => void;
}

export const NavigationBar: React.SFC<NavigationBarProps> = ({
  path,
  isNotificationOpen,
  closeNotification,
}) => {
  const [isMenuOpen, closeMenu] = React.useState(false);
  const { contentfulNavigation } = useStaticQuery(graphql`
    {
      contentfulNavigation {
        navigationItem {
          id
          section
          link {
            isExternal
            title
            url
            dataQaId
            target
            id
          }
          dropdownItems {
            title
            url
            isExternal
            dataQaId
            target
            id
          }
        }
      }
    }
  `);

  const getNavLinkClasses = (navLinkLocationType?: LOCATION) => {
    if (navLinkLocationType === path) {
      return 'light-navbar-link light-navbar-active-location';
    } else {
      return 'light-navbar-link';
    }
  };

  const mobileNavLink = ({ title, url, isExternal, dataQaId, target, id }) => {
    return (
      <IntlLink
        location={url}
        isExternal={isExternal}
        className="db bb b--nav-light-line pv2"
        onClick={() => closeMenu(false)}
        dataQaId={dataQaId}
        target={target}
        key={id}
      >
        <span className="heading-5 fw5">{title}</span>
      </IntlLink>
    );
  };

  return (
    <div className="z-999 fixed top-after-nav">
      {/* Mobile Nav */}
      <div className="dn-l">
        <Menu
          isOpen={isMenuOpen}
          onStateChange={(state: State) => {
            closeMenu(state.isOpen);
          }}
          width="100%"
          customCrossIcon={false}
          customBurgerIcon={
            isMenuOpen ? (
              <Icon
                type="close"
                height="1.1rem"
                width="auto"
                color="ownr-brand-orange"
                dataQaId="close-nav"
              />
            ) : (
              <Icon
                type="menu"
                height="1.1rem"
                width="auto"
                color="ownr-brand-orange"
                dataQaId="open-nav"
              />
            )
          }
        >
          <div className="pv3 ph4 flex flex-column">
            <div className="w-100 ttu ownr-pink lato f-12 fw5 bb b--nav-light-line pb2">
              Services
            </div>
            {contentfulNavigation.navigationItem.map(navItem => {
              if (navItem.section === 'services') {
                return (
                  <div>
                    {mobileNavLink(navItem.link)}
                    {!isEmpty(navItem.dropdownItems) &&
                      !isNil(navItem.dropdownItems) && (
                        <div className="mh3">
                          {navItem.dropdownItems.map(link => {
                            return mobileNavLink(link);
                          })}
                        </div>
                      )}
                  </div>
                );
              }
            })}
            <div className="bt bb b--nav-dark-line">
              {contentfulNavigation.navigationItem.map(navItem => {
                if (navItem.section === 'general') {
                  return mobileNavLink(navItem.link);
                }
              })}
            </div>
            <div>
              <IntlLink
                location={`${process.env.REACT_APP_FRONTEND_URL}/login`}
                isExternal={true}
                onClick={() => closeMenu(false)}
                className="db pv2"
                dataQaId="login-mobile"
              >
                <span className="heading-5 fw5">Login</span>
              </IntlLink>
              <IntlLink
                location={`${process.env.REACT_APP_FRONTEND_URL}/register-account`}
                isExternal={true}
                onClick={() => closeMenu(false)}
              >
                <Button
                  styles="orange"
                  className="mv3 f5"
                  dataQaId="sign-up-mobile"
                >
                  <span>Sign Up</span>
                </Button>
              </IntlLink>
            </div>
          </div>
        </Menu>
      </div>

      {/* Desktop Nav */}
      <div className="z-5 top-0 w-100 fixed">
        <UnsupportedBrowserNotification
          isNotificationOpen={isNotificationOpen}
          closeNotification={closeNotification}
        />
        <div className="w-100 flex justify-center bg-ownr-brand-light-gray">
          <div className="w-90-l flex flex-row justify-between items-center nav-spacing">
            <div
              className="w-10-l w-100 flex flex-row justify-center justify-start-l mr3-l pr2-l"
              onClick={() => closeMenu(false)}
            >
              <IntlLink
                location={LOCATION.ROOT}
                dataQaId="logo"
                className="w-100"
              >
                <Icon
                  className="pointer"
                  type="logo"
                  height="1.2rem"
                  width="auto"
                  color="ownr-brand-orange"
                />
              </IntlLink>
            </div>
            <div className="w-90 h-100 dn flex-l flex-row justify-between items-center">
              <div className="flex flex-row h-100 items-center">
                {contentfulNavigation.navigationItem.map(navItem => {
                  if (
                    !isEmpty(navItem.dropdownItems) &&
                    !isNil(navItem.dropdownItems)
                  ) {
                    return (
                      <span
                        className="flex flex-row h-100 items-center"
                        key={navItem.id}
                      >
                        <div className="dropdown flex flex-row h-100 items-center">
                          <IntlLink
                            location={navItem.link.url}
                            isExternal={navItem.link.isExternal}
                            className="flex flex-row h-100 items-center"
                            dataQaId={navItem.link.dataQaId}
                            target={navItem.link.target}
                            key={navItem.link.id}
                          >
                            <div
                              className={getNavLinkClasses(navItem.link.url)}
                            >
                              {navItem.link.title}
                            </div>
                          </IntlLink>
                          <div
                            className="dropdown-content"
                            id="light-navbar-dropdown-content"
                          >
                            <div className="bg-ownr-white br2 dropdown-shadow pb3">
                              {navItem.dropdownItems.map(link => {
                                return (
                                  <IntlLink
                                    location={link.url}
                                    isExternal={link.isExternal}
                                    className="dropdown-link hover-ownr-orange pt3"
                                    dataQaId={link.dataQaId}
                                    target={link.target}
                                    key={link.id}
                                  >
                                    {link.title}
                                  </IntlLink>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </span>
                    );
                  } else {
                    return (
                      <IntlLink
                        location={navItem.link.url}
                        isExternal={navItem.link.isExternal}
                        dataQaId={navItem.link.dataQaId}
                        target={navItem.link.target}
                        key={navItem.link.id}
                      >
                        <div className={getNavLinkClasses(navItem.link.url)}>
                          {navItem.link.title}
                        </div>
                      </IntlLink>
                    );
                  }
                })}
              </div>
              <div className="flex flex-row justify-between">
                <IntlLink
                  location={`${process.env.REACT_APP_FRONTEND_URL}/login`}
                  isExternal={true}
                  className="mr3 pr1"
                  dataQaId="login"
                >
                  <Button className="f5 pv2" styles="orange-reverse">
                    Login
                  </Button>
                </IntlLink>
                <IntlLink
                  location={`${process.env.REACT_APP_FRONTEND_URL}/register-account`}
                  isExternal={true}
                  dataQaId="signup"
                >
                  <Button className="f5 pv2" styles="orange">
                    Sign Up
                  </Button>
                </IntlLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
