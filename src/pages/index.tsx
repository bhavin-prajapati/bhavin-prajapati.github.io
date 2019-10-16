import React from 'react';
import '../index.css';
import 'tachyons/css/tachyons.min.css';
import { HeadTags, Layout } from '../components';
import { graphql } from 'gatsby';
import { LOCATION } from '../core/location/location.types';

type LandingPageProps = {
  path: LOCATION;
  data: {
    contentfulPage: {
      description: string;
      title: string;
      showBannerAd: boolean;
      ogImage: {
        file: {
          url: string;
        };
      };
    };
  };
};

const IndexPage: React.SFC<LandingPageProps> = ({ path, data }) => {
  return (
    <Layout path={path} showBannerAd={data.contentfulPage.showBannerAd}>
      <HeadTags
        title={data.contentfulPage.title}
        description={data.contentfulPage.description}
        ogImageUrl={data.contentfulPage.ogImage.file.url}
      />
      <div>Put homepage here</div>
    </Layout>
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
