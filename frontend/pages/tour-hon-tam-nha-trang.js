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
import data from '../data/tourHonTam'

export default function TourHonTam() {
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
          {/* <PriceTable
            title={item.priceTable.title}
            description={item.priceTable.description}
            price={item.priceTable.price}
            childPrice={item.priceTable.childPrice}
            oldPrice={item.priceTable.oldPrice}
            phone1={item.priceTable.phone1}
            phone2={item.priceTable.phone2}
            zalo={item.priceTable.zalo}
            note={item.priceTable.note}
          /> */}
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
    //   <Layout>
    //   <SEO
    //     title="Tour Đảo Hòn Tằm Nha Trang"
    //     description="Tour Đảo Hòn Tằm Nha Trang"
    //     image="/images/tour-hon-tam-nha-trang.jpg"
    //     url="https://daohontam.com/tour-hon-tam-nha-trang"
    //   />
    //   <Hero />
    //   <Video />
    //   <Warning />
    //   <Schedule />
    //   <BoxCallAction />
    //   <MenuWithForm />
    //   <Achievements />
    //   <PriceTable />
    //   <Album />
    //   <Testimonial />
    // </Layout>
  )
}

// const data = {
//   title: 'Tour Đảo Hòn Tằm Nha Trang',
//   description: 'Tour Đảo Hòn Tằm Nha Trang',
//   image: '/images/tour-hon-tam-nha-trang.jpg',
//   url: 'https://daohontam.com/tour-hon-tam-nha-trang',
//   keywords: 'Tour Đảo Hòn Tằm Nha Trang',
//   price: '500.000đ',
//   hero: {
//     title: 'Tour Đảo Hòn Tằm Nha Trang',
//     description: 'Tham quan &amp; khám phá Tour đảo Hòn Tằm Nha Trang hàng ngày',
//     phone: '0938511948',
//   },
//   video: {
//     title: 'Hãy Cùng Khám Phá Cảnh Đẹp trên Đảo Hòn Tằm',
//     description: 'Tổ hợp nghỉ dưỡng và tham quan của khu du lịch trên đảo Hòn Tằm đáp ứng nhu cầu của nhiều sở thích và mong muốn khác nhau của khách hàng trên khắp thế giới.',
//     image1: '/images/video-img-01.jpg',
//     image2: '/images/video-img-02.jpg',
//     videoUrl: 'https://www.youtube.com/embed/Q_Z-_q-_Zz4',
//   },
//   warning: {
//     title: 'Cảnh báo',
//     subTitle: 'Giả mạo Hòn Tằm để bán dịch vụ',
//     description: 'Chọn ngay tour hôm nay và bạn sẽ được giảm giá 50%<br />và bạn có thể tin tưởng chúng tôi sẽ hỗ trợ trong vòng chưa đầy 24h',
//   },
//   schedule: {
//     title: 'Lịch trình',
//     detail: [
//       {
//         time: '08h00 - 09h00',
//         description: 'Xe và hướng dẫn viên Nha Trang Today đón khách tại điểm hẹn. Đoàn di chuyển xuống cảng Du Lịch Nha Trang Vĩnh Trường - tham quan Vịnh Nha Trang.',
//       },
//       {
//         time: '09h00 - 11h30',
//         description: 'Cano di chuyển chở du khách đến với đảo Hòn Tằm. Đến đây du khách sẽ nhận được đồ tắm, khăn cho mình.\n' + 'Sau đó du khách sẽ được xe điện chở đến với khu tắm bùn và hồ bơi vô cực. bạn sẽ trải nghiệm các dịch vụ tại đây. Quý khách nghỉ ngơi và thư giãn tại Khu tắm bùn Hòn Tằm, đạt tiêu chuẩn 4 sao.\n'
//           + 'Với các dịch vụ và tiện ích cao cấp như:\n',
//         list: [
//           'Miễn phí sử dụng khăn, đồ tắm, tủ gửi đồ',
//           'Quý khách nghỉ ngơi tại chòi lá ,dù nệm, ghế lều',
//           'Tắm khoáng thuỷ lực',
//           'Ngâm bồn bùn nóng hoặc bồn thảo dược trong vòng 30 phút',
//           'Massage toàn thân bằng hệ thống ôn tuyền thuỷ liệu pháp',
//           'Tự do thả mình trong hồ bơi vô cực rộng 1350m2 & hồ Jacuzzi với vị trí cao nhất khu resort',
//           'Trải nghiệm tắm thác'
//         ],
//       },
//       {
//         time: '11h30 - 14h00',
//         description: 'Ăn trưa, nghỉ ngơi tại nhà hàng Hồn Việt',
//       },
//       {
//         time: '14h00 - 15h30',
//         description: 'Khách tự do nghỉ ngơi, tham quan chụp ảnh và tắm hồ bơi vo cực thoải mái. Sau đó xe điện chở bạn lại quầy nhận đồ và lấy đồ.',
//       },
//       {
//         time: '16h00',
//         description: 'Quý khách rời Vịnh Nha Trang. HDV chào tạm biệt quý khách và trả về điểm hẹn.',
//       },
//     ],
//   },
//   callBox: [
//     {
//       label: '0938.511.948',
//       value: '0938511948',
//     },
//     {
//       label: '0938.511.948',
//       value: '0938511948',
//     },
//     {
//       label: '0938.511.948',
//       value: '0938511948',
//     }
//   ],
//   menu: {
//     title: 'Thực đơn của Tour',
//     description: 'Thực đơn tour có thể thay đổi theo ngày/mùa',
//     list: [
//       {
//         name: 'Salad dầu giấm',
//       },
//       {
//         name: 'Chả ram',
//       },
//       {
//         name: 'Tôm thẻ cháy tỏi',
//       },
//       {
//         name: 'Nghêu hấp',
//       },
//       {
//         name: 'Gà kho',
//       },
//       {
//         name: 'Rau xào tỏi',
//       },
//       {
//         name: 'Canh chua cá',
//       },
//       {
//         name: 'Cơm trắng',
//       },
//       {
//         name: 'Trái cây + trà đá',
//       },
//     ],
//   },
//   achievements: [
//     {
//       title: 'Khách hàng mới',
//       description: 'Mô tả thông tin có giá trị, những điểm nổi bật, lời giới thiệu hấp dẫn về sản phẩm dịch vụ, giúp người xem dễ dàng tìm thấy nội dung.',
//       number: '3579',
//     },
//     {
//       title: 'Tour hoàn thành',
//       description: 'Mô tả thông tin có giá trị, những điểm nổi bật, lời giới thiệu hấp dẫn về sản phẩm dịch vụ, giúp người xem dễ dàng tìm thấy nội dung.',
//       number: '461',
//     },
//     {
//       title: 'Lượt thích',
//       description: 'Mô tả thông tin có giá trị, những điểm nổi bật, lời giới thiệu hấp dẫn về sản phẩm dịch vụ, giúp người xem dễ dàng tìm thấy nội dung.',
//       number: '1684',
//     },
//   ],
//   priceTable: {
//     title: 'Bảng giá Tour',
//     description: 'Mô tả tóm tắt nội dung về các loại giá của Tour đang cung cấp. Để khách hàng biết được thông tin dễ dàng',
//     price: '550.000đ',
//     childPrice: '450.000đ',
//     oldPrice: '510.000đ',
//     phone1: '0938511948',
//     phone2: '0979853348',
//     zalo: '0938511948',
//     note: [
//       {
//         title: 'Giá đã bao gồm',
//         description: {
//           list: [
//             'Xe du lịch đưa đón',
//             'Ăn trưa',
//             'Cano cao tốc',
//             'Hướng dẫn viên chuyên nghiệp',
//             'Áo phao + Bảo hiểm',
//             'Vé Hòn Tằm tắm bùn',
//           ],
//         },
//       },
//       {
//         title: 'Giá không bao gồm',
//         description: {
//           list: [
//             'Xe du lịch đưa đón',
//             'Ăn trưa',
//             'Cano cao tốc',
//             'Hướng dẫn viên chuyên nghiệp',
//             'Áo phao + Bảo hiểm',
//             'Vé Hòn Tằm tắm bùn',
//           ],
//         },
//       },
//       {
//         title: 'Quy định về giá trẻ em',
//         description: {
//           list: [
//             'Xe du lịch đưa đón',
//             'Ăn trưa',
//             'Cano cao tốc',
//             'Hướng dẫn viên chuyên nghiệp',
//             'Áo phao + Bảo hiểm',
//             'Vé Hòn Tằm tắm bùn',
//           ],
//         },
//       },
//     ],
//   },
//   gallery: {
//     before: [
//       {
//         src: 'https://www.vietnamtourism.gov.vn/uploads/images/tour/tour-du-lich-viet-nam-1.jpg',
//       },
//       {
//         src: 'https://www.vietnamtourism.gov.vn/uploads/images/tour/tour-du-lich-viet-nam-2.jpg',
//       },
//       {
//         src: 'https://www.vietnamtourism.gov.vn/uploads/images/tour/tour-du-lich-viet-nam-3.jpg',
//       },
//     ],
//     after: [
//       {
//         src: 'https://www.vietnamtourism.gov.vn/uploads/images/tour/tour-du-lich-viet-nam-1.jpg',
//       },
//       {
//         src: 'https://www.vietnamtourism.gov.vn/uploads/images/tour/tour-du-lich-viet-nam-2.jpg',
//       },
//       {
//         src: 'https://www.vietnamtourism.gov.vn/uploads/images/tour/tour-du-lich-viet-nam-3.jpg',
//       },
//     ],
//   },
//   testimonial: {
//     title: '15,000+ khách hàng nói về chúng tôi',
//     description: 'Chúng tôi nỗ lực mỗi ngày để mang đến cho khách hàng sản phẩm và dịch vụ tốt nhất',
//     list: [
//       {
//         name: 'Nguyễn Văn A, Giám đốc kinh doanh',
//         company: 'Bảo hiểm Prudential',
//         avatar: '/images/people-1.jpg',
//         content: 'Tôi rất hài lòng về sản phẩm dịch vụ của bạn. Hy vọng chúng ta có nhiều cơ hội làm việc với nhau hơn',
//       },
//       {
//         name: 'Nguyễn Văn A, Giám đốc kinh doanh',
//         company: 'Bảo hiểm Prudential',
//         avatar: '/images/people-2.jpg',
//         content: 'Tôi rất hài lòng về sản phẩm dịch vụ của bạn. Hy vọng chúng ta có nhiều cơ hội làm việc với nhau hơn',
//       },
//       {
//         name: 'Nguyễn Văn A, Giám đốc kinh doanh',
//         company: 'Bảo hiểm Prudential',
//         avatar: '/images/people-3.jpg',
//         content: 'Tôi rất hài lòng về sản phẩm dịch vụ của bạn. Hy vọng chúng ta có nhiều cơ hội làm việc với nhau hơn',
//       },
//     ],
//   },
// }



