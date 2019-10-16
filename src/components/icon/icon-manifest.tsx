/**
 * Icon Manifest
 *
 * Manually specifying a loader here is brittle
 * however, we can add this to the webpack config
 * if/when we eject.
 *
 * Also, please make sure that the svg files for all the
 * icons are run them svgo first. This is something
 * we could automate using webpack and/or npm task.
 *
 * You get placeholder icons from:
 *  - https://icon.now.sh
 *  - https://iconmonstr.com
 */
export default {
  caution: require('!raw-loader!../../icons/caution.svg'),
  chevronRight: require('!raw-loader!../../icons/next.svg'),
  close: require('!raw-loader!../../icons/close.svg'),
  facebookLogo: require('!raw-loader!../../icons/facebook-logo.svg'),
  instagramLogo: require('!raw-loader!../../icons/instagram-logo.svg'),
  linkedinLogo: require('!raw-loader!../../icons/linkedin-logo.svg'),
  logo: require('!raw-loader!../../icons/ownr-logo.svg'),
  menu: require('!raw-loader!../../icons/menu.svg'),
  twitterLogo: require('!raw-loader!../../icons/twitter-logo.svg'),
};
