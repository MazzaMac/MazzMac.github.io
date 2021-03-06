import React from 'react';
import ArtWall from '../components/artwall';
import SEO from '../components/seo';
import Layout from '../components/layout';
import useSiteMetadata from "../hooks/use-site-metadata";

function ShopPage({data, location}){
    const { siteURL } = useSiteMetadata();

    return (
    <Layout currentPath={`${siteURL}${location.pathname}`}>
        <SEO title="Shop" />
        <h1>The Shop</h1>

        // <ArtWall type="product" />

      </Layout>
  )
}

export default ShopPage;
