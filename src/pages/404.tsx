import * as React from 'react';
import { Heading, Layout } from '../components';
import { LOCATION } from '../core/location/location.types';

type NotFoundPageProps = {
  path: LOCATION;
};

export const NotFoundPage: React.SFC<NotFoundPageProps> = ({ path }) => {
  return (
    <Layout path={path}>
      <div className="w-100 flex flex-column items-center mt4 mb7">
        <div className="w-100 mw-480 pb3">
          <Heading size={2}>No Page Found</Heading>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
