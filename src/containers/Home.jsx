import React from 'react';
import { Helmet } from 'react-helmet';
import initialState from '../initialState';
import Products from '../components/Products';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>React Conf Merch - Productos</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@hadmarcano" />
        <meta name="twitter:creator" content="@hadmarcano" />
        <meta name="twitter:title" content="React Conf Store" />
        <meta name="twitter:description" content="React Conf Store" />
        <meta
          name="twitter:image"
          content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
        />
        <meta property="og:title" content="React Conf Store" />
        <meta property="og:description" content="React Conf Store" />
        <meta
          property="og:image"
          content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
        />
        <meta property="og:url" content="reactstore.xyz" />
        <meta property="og:site_name" content="React Conf Store" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
      </Helmet>
      <Products products={initialState.products} />
    </>
  );
};

export default Home;
