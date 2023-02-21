import React from 'react'
import Clients from '../parts/Clients'
import Footer from '../parts/Footer'
import Header from '../parts/Header'
import Hero from '../parts/HomePage/Hero'
import BrowseRoom from '../parts/HomePage/BrowseRoom'
import JustArrived from '../parts/HomePage/JustArrived'
import Sitemap from '../parts/Sitemap'
import useScrollAnchor from '../helpers/hooks/useScrollAnchor'
import Modal from '../helpers/hooks/Modal'

function Homepage() {
  Modal();
  useScrollAnchor();
  return (
    <>
    <Header theme="white" possition="absolute"/>
    <Hero/>
    <BrowseRoom/>
    <JustArrived/>
    <Clients/>
    <Sitemap/>
    <Footer/>
    </>
  )
}

export default Homepage