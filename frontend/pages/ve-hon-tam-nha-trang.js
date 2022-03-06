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
import data from '../data/veHonTam'

export default function VeHonTam() {
  return (
    <>
      {data.map((item, index) => (
        <Layout key={index}>
          <SEO
            title={item.title}
            description={item.description}
            image={item.image}
            url={item.url}
          />
          <Hero
            title={item.hero.title}
            description={item.hero.description}
            phone={item.hero.phone}
          />
          <Video
            title={item.video.title}
            description={item.video.description}
            video={item.video.videoUrl}
            image1={item.video.image1}
            image2={item.video.image2}
          />
          <Warning
            title={item.warning.title}
            description={item.warning.description}
            subTitle={item.warning.subTitle}
          />
          <Schedule
            title={item.schedule.title}
            detail={item.schedule.detail}
          />
          <BoxCallAction
            data={item.callBox}
          />
          <MenuWithForm
            title={item.menu.title}
            description={item.menu.description}
            price={item.menu.price}
            menu={item.menu.list}
            phone={item.callBox}
          />
          <Achievements
            data={item.achievements}
          />
          <PriceTable
            title={item.priceTable.title}
            description={item.priceTable.description}
            priceList={item.priceTable.priceList}
            phone1={item.priceTable.phone1}
            phone2={item.priceTable.phone2}
            zalo={item.priceTable.zalo}
            note={item.priceTable.note}
            packageNumber='4'
          />
          <Album
            before={item.gallery.before}
            after={item.gallery.after}
          />
          <Testimonial
            title={item.testimonial.title}
            description={item.testimonial.description}
            data={item.testimonial.list}
          />
        </Layout>
      ))}
    </>
  )
}
