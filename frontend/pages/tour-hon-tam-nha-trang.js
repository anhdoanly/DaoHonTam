import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Achievements from '../sections/TourHonTam/Achievements'
import Album from '../sections/TourHonTam/Album'
import BoxCallAction from '../sections/TourHonTam/BoxCallAction'
import Hero from '../sections/TourHonTam/hero'
import MenuWithForm from '../sections/TourHonTam/menuWithForm'
import PriceTable from '../sections/TourHonTam/priceTable'
import Schedule from '../sections/TourHonTam/schedule'
import Testimonial from '../sections/TourHonTam/Testimonial'
import Video from '../sections/TourHonTam/video'
import Warning from '../sections/TourHonTam/warning'

export default function TourHonTam() {
  return (
    <Layout>
      <SEO 
        title="Tour Đảo Hòn Tằm Nha Trang" 
        description="Tour Đảo Hòn Tằm Nha Trang" 
        image="/images/tour-hon-tam-nha-trang.jpg" 
        url="https://daohontam.com/tour-hon-tam-nha-trang" 
      />
      <Hero />
      <Video />
      <Warning />
      <Schedule />
      <BoxCallAction />
      <MenuWithForm />
      <Achievements />
      <PriceTable />
      <Album />
      <Testimonial />
    </Layout>
  )
}
