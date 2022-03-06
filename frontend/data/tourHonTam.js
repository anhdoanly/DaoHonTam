import { FiUserPlus } from 'react-icons/fi'
import { HiShieldCheck } from 'react-icons/hi'
import { FaAward } from 'react-icons/fa'
export default [
    {
        title: 'Tour Đảo Hòn Tằm Nha Trang',
        description: 'Tour Đảo Hòn Tằm Nha Trang',
        image: '/images/tour-hon-tam-nha-trang.jpg',
        url: 'https://daohontam.com/tour-hon-tam-nha-trang',
        keywords: 'Tour Đảo Hòn Tằm Nha Trang',
        price: '500.000đ',
        hero: {
            title: 'Tour Đảo Hòn Tằm Nha Trang',
            description: 'Tham quan & khám phá Tour đảo Hòn Tằm Nha Trang hàng ngày',
            phone: '0938511948',
        },
        video: {
            title: 'Hãy Cùng Khám Phá Cảnh Đẹp trên Đảo Hòn Tằm',
            description: 'Tổ hợp nghỉ dưỡng và tham quan của khu du lịch trên đảo Hòn Tằm đáp ứng nhu cầu của nhiều sở thích và mong muốn khác nhau của khách hàng trên khắp thế giới.',
            image1: '/images/video-img-01.jpg',
            image2: '/images/video-img-02.jpg',
            videoUrl: 'https://www.youtube.com/embed/Q_Z-_q-_Zz4',
        },
        warning: {
            title: 'Cảnh báo',
            subTitle: 'Giả mạo Hòn Tằm để bán dịch vụ',
            description: 'Chọn ngay tour hôm nay và bạn sẽ được giảm giá 50% \nvà bạn có thể tin tưởng chúng tôi sẽ hỗ trợ trong vòng chưa đầy 24h',
        },
        schedule: {
            title: 'Lịch trình',
            detail: [
                {
                    number: '1',
                    time: '08h00 - 09h00',
                    description: 'Xe và hướng dẫn viên Nha Trang Today đón khách tại điểm hẹn. Đoàn di chuyển xuống cảng Du Lịch Nha Trang Vĩnh Trường - tham quan Vịnh Nha Trang.\n',
                },
                {
                    number: '2',
                    time: '09h00 - 11h30',
                    description: 'Cano di chuyển chở du khách đến với đảo Hòn Tằm. Đến đây du khách sẽ nhận được đồ tắm, khăn cho mình.\n' 
                        + 'Sau đó du khách sẽ được xe điện chở đến với khu tắm bùn và hồ bơi vô cực. bạn sẽ trải nghiệm các dịch vụ tại đây. Quý khách nghỉ ngơi và thư giãn tại Khu tắm bùn Hòn Tằm, đạt tiêu chuẩn 4 sao.\n'
                        + 'Với các dịch vụ và tiện ích cao cấp như:\n'
                        + '- Miễn phí sử dụng khăn, đồ tắm, tủ gửi đồ\n'
                        + '- Quý khách nghỉ ngơi tại chòi lá ,dù nệm, ghế lều\n'
                        + '- Tắm khoáng thuỷ lực\n'
                        + '- Ngâm bồn bùn nóng hoặc bồn thảo dược trong vòng 30 phút\n'
                        + '- Massage toàn thân bằng hệ thống ôn tuyền thuỷ liệu pháp\n'
                        + '- Tự do thả mình trong hồ bơi vô cực rộng 1350m2 & hồ Jacuzzi với vị trí cao nhất khu resort\n'
                        + '- Trải nghiệm tắm thác\n',
                },
                {
                    number: '3',
                    time: '11h30 - 14h00',
                    description: 'Ăn trưa, nghỉ ngơi tại nhà hàng Hồn Việt\n',
                },
                {
                    number: '4',
                    time: '14h00 - 15h30',
                    description: 'Khách tự do nghỉ ngơi, tham quan chụp ảnh và tắm hồ bơi vo cực thoải mái. Sau đó xe điện chở bạn lại quầy nhận đồ và lấy đồ.\n',
                },
                {
                    number: '5',
                    time: '16h00',
                    description: 'Quý khách rời Vịnh Nha Trang. HDV chào tạm biệt quý khách và trả về điểm hẹn.\n',
                },
            ],
        },
        callBox: [
            {
                label: '0938.511.948',
                value: '0938511948',
                color: 'cyan.400'
            },
            {
                label: '0938.511.948',
                value: '0938511948',
                color: 'red.400'
            },
            {
                label: '0938.511.948',
                value: '0938511948',
                color: 'pink.400'
            }
        ],
        menu: {
            title: 'Thực đơn của Tour',
            description: 'Thực đơn tour có thể thay đổi theo ngày/mùa',
            price: '500.000đ',
            list: [
                {
                    name: 'Salad dầu giấm',
                },
                {
                    name: 'Chả ram',
                },
                {
                    name: 'Tôm thẻ cháy tỏi',
                },
                {
                    name: 'Nghêu hấp',
                },
                {
                    name: 'Gà kho',
                },
                {
                    name: 'Rau xào tỏi',
                },
                {
                    name: 'Canh chua cá',
                },
                {
                    name: 'Cơm trắng',
                },
                {
                    name: 'Trái cây + trà đá',
                },
            ],
        },
        achievements: [
            {
                title: 'Khách hàng mới',
                description: 'Mô tả thông tin có giá trị, những điểm nổi bật, lời giới thiệu hấp dẫn về sản phẩm dịch vụ, giúp người xem dễ dàng tìm thấy nội dung.',
                number: 3579,
                icon: FiUserPlus,
            },
            {
                title: 'Tour hoàn thành',
                description: 'Mô tả thông tin có giá trị, những điểm nổi bật, lời giới thiệu hấp dẫn về sản phẩm dịch vụ, giúp người xem dễ dàng tìm thấy nội dung.',
                number: 461,
                icon: HiShieldCheck,
            },
            {
                title: 'Lượt thích',
                description: 'Mô tả thông tin có giá trị, những điểm nổi bật, lời giới thiệu hấp dẫn về sản phẩm dịch vụ, giúp người xem dễ dàng tìm thấy nội dung.',
                number: 1684,
                icon: FaAward,
            },
        ],
        priceTable: {
            title: 'Bảng giá Tour',
            description: 'Mô tả tóm tắt nội dung về các loại giá của Tour đang cung cấp. Để khách hàng biết được thông tin dễ dàng',
            priceList: [
                {
                    title: 'Gói Tour 1',
                    priceAdult: '550.000',
                    priceChild: '385.000',
                    bgColor: 'white',
                    services: [
                        {
                            name: 'Tắm bùn',
                        },
                        {
                            name: 'Ăn trưa',
                        },
                        {
                            name: 'Cano vận chuyển 2 chiều',
                        },
                    ],
                },
                {
                    title: 'Gói Tour 2',
                    priceAdult: '450.000',
                    priceChild: '315.000',
                    bgColor: 'cyan.500',
                    services: [
                        {
                            name: 'Tắm bùn',
                        },
                        {
                            name: 'Ăn trưa',
                        },
                    ],
                },
                {
                    title: 'Gói Tour 3',
                    priceAdult: '350.000',
                    priceChild: '245.000',
                    bgColor: 'white',
                    services: [
                        {
                            name: 'Tắm bùn',
                        },
                        {
                            name: 'Cano vận chuyển 2 chiều',
                        },
                    ],
                },
                {
                    title: 'Gói Tour 4',
                    priceAdult: '250.000',
                    priceChild: '175.000',
                    bgColor: 'cyan.500',
                    services: [
                        {
                            name: 'Tắm bùn',
                        },
                    ],
                },
            ],
            phone1: '0938511948',
            phone2: '0979853348',
            zalo: '0938511948',
            note: [
                {
                    title: 'Giá đã bao gồm',
                    description: {
                        list: [
                            'Xe du lịch đưa đón',
                            'Ăn trưa',
                            'Cano cao tốc',
                            'Hướng dẫn viên chuyên nghiệp',
                            'Áo phao + Bảo hiểm',
                            'Vé Hòn Tằm tắm bùn',
                        ],
                    },
                },
                {
                    title: 'Giá không bao gồm',
                    description: {
                        list: [
                            'Xe du lịch đưa đón',
                            'Ăn trưa',
                            'Cano cao tốc',
                            'Hướng dẫn viên chuyên nghiệp',
                            'Áo phao + Bảo hiểm',
                            'Vé Hòn Tằm tắm bùn',
                        ],
                    },
                },
                {
                    title: 'Quy định về giá trẻ em',
                    description: {
                        list: [
                            'Xe du lịch đưa đón',
                            'Ăn trưa',
                            'Cano cao tốc',
                            'Hướng dẫn viên chuyên nghiệp',
                            'Áo phao + Bảo hiểm',
                            'Vé Hòn Tằm tắm bùn',
                        ],
                    },
                },
            ],
        },
        gallery: {
            before: [
                {
                    src: '/images/album-1.jpg',
                },
                {
                    src: '/images/album-2.jpg',
                },
                {
                    src: '/images/album-3.jpg',
                },
            ],
            after: [
                {
                    src: '/images/album-4.jpg',
                },
                {
                    src: '/images/album-5.jpg',
                },
                {
                    src: '/images/album-6.jpg',
                },
            ],
        },
        testimonial: {
            title: '15,000+ khách hàng nói về chúng tôi',
            description: 'Chúng tôi nỗ lực mỗi ngày để mang đến cho khách hàng sản phẩm và dịch vụ tốt nhất',
            list: [
                {
                    name: 'Nguyễn Văn A, Giám đốc kinh doanh',
                    company: 'Bảo hiểm Prudential',
                    avatar: '/images/people-1.jpg',
                    content: 'Tôi rất hài lòng về sản phẩm dịch vụ của bạn. Hy vọng chúng ta có nhiều cơ hội làm việc với nhau hơn',
                },
                {
                    name: 'Nguyễn Văn A, Giám đốc kinh doanh',
                    company: 'Bảo hiểm Prudential',
                    avatar: '/images/people-2.jpg',
                    content: 'Tôi rất hài lòng về sản phẩm dịch vụ của bạn. Hy vọng chúng ta có nhiều cơ hội làm việc với nhau hơn',
                },
                {
                    name: 'Nguyễn Văn A, Giám đốc kinh doanh',
                    company: 'Bảo hiểm Prudential',
                    avatar: '/images/people-3.jpg',
                    content: 'Tôi rất hài lòng về sản phẩm dịch vụ của bạn. Hy vọng chúng ta có nhiều cơ hội làm việc với nhau hơn',
                },
            ],
        },
    }
]