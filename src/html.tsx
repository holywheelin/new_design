import React from 'react';
import { Helmet } from 'react-helmet';

import * as config from '../gatsby-config';

type Props = {
  body: any;
  postBodyComponents: any;
  headComponents: any;
};

export default ({ body, postBodyComponents, headComponents }: Props) => {
  const head = Helmet.renderStatic();

  const verification =
    config.siteMetadata && config.siteMetadata.googleVerification ? (
      <meta
        name="google-site-verification"
        content={config.siteMetadata.googleVerification}
      />
    ) : null;

  return (
    <html lang="en">
      <head>
        {headComponents}
        <title>HolyWheelin' Official WebSite</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>
        <link rel="stylesheet" type="text/css" href="./css/starwarsintro.css"></link>
        <script src="https://unpkg.com/react-leaflet/dist/react-leaflet.min.js"></script>
        <script src="https://unpkg.com/react-leaflet/dist/react-leaflet.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react-leaflet/2.0.0/react-leaflet.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react-leaflet/2.0.0/react-leaflet.js"></script>
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}
        {verification}
        <script src="https://checkout.stripe.com/checkout.js"></script>
      </head>
      <body>
        <div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
        {postBodyComponents}
      </body>
    </html>
  );
};
