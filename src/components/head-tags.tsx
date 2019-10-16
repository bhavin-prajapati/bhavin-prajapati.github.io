import React from 'react';
import { pathOr } from 'ramda';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

type HeadTagsProps = {
  title: string;
  description: string;
  ogImageUrl?: string;
};

export const HeadTags: React.SFC<HeadTagsProps> = ({
  title,
  description,
  ogImageUrl,
}) => {
  const { defaultOgImage } = useStaticQuery(graphql`
    query {
      defaultOgImage: file(relativePath: { eq: "og-image-default.jpg" }) {
        childImageSharp {
          original {
            src
          }
        }
      }
    }
  `);
  const ogImage =
    ogImageUrl ||
    pathOr(undefined, ['childImageSharp', 'original', 'src'], defaultOgImage);
  return (
    <Helmet>
      <link rel="shortcut icon" href="favicon.ico" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
    </Helmet>
  );
};
