import * as React from 'react';
import { graphql } from 'gatsby';

const IndexPage = props => {
  return (
    <div>
      <div>Home</div>
    </div>
  );
};

export const pageQuery = graphql`
  query {
    contentfulPage(pageType: { eq: "homePage" }) {
      description
      title
      showBannerAd
      ogImage {
        file {
          url
        }
      }
    }
  }
`;

export default IndexPage;
