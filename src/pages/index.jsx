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
    contentfulPage(slug: { eq: "home" }) {
      description
      title
    }
  }
`;

export default IndexPage;
