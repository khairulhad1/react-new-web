import React from 'react'
import Breadcrumb from '../components/Breadcrumb/Index'
import ProductDetails from '../parts/Details/ProductDetails'
import Suggestion from '../parts/Details/Suggestion'
import Footer from '../parts/Footer'
import Header from '../parts/Header'
import Sitemap from '../parts/Sitemap'

function Details() {
  return (
    <>
      <Header theme="black"/>
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/catagories/1234", name: "Office Room" },
          { url: "/catagories/1234/Product/16846", name: "Details" },
        ]}
      />
      <ProductDetails/>
      <Suggestion/>
      <Sitemap />
      <Footer />
    </>
  )
}

export default Details