import {
  highlightFirstVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  highlightFourthVideo,
} from "../utils/index";

import { yellowImg, blueImg, blackImg, whiteImg } from "../utils/index";

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Enter A17 Pro.",
      "Game‑changing chip.",
      "Groundbreaking performance.",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Titanium.", "So strong. So light. So Pro."],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "iPhone 15 Pro Max has the",
      "longest optical zoom in",
      "iPhone ever. Far out.",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["All-new Action button.", "What will yours do?."],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

export const models = [
  {
    id: 1,
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "iPhone 15 Pro in Blue Titanium",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "iPhone 15 Pro in White Titanium",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "iPhone 15 Pro in Black Titanium",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

export const AboutImg = [
  {
    img: "/assets/images/aboutshop_1.jpg",
  },
  {
    img: "/assets/images/aboutshop_2.jpg",
  },
  {
    img: "/assets/images/aboutshop_3.jpg",
  },
];

export const collectionsItems = [
  {
    label: "Apple",
    data: [
      {
        id: 1,
        name: "iphone 16",
      },
    ],
  },
];

export const fatherProduct = [
  {
    capacity: "128GB",
    slug: "Iphone-12-pro-max-128GB",
  },
  {
    capacity: "256GB",
    slug: "Iphone-12-pro-max-256GB",
  },
  {
    capacity: "512GB",
    slug: "Iphone-12-pro-max-512GB",
  },
];

export const singleProduct = {
  label: "Iphone 12 Pro Max 128GB",
  capacity: "128GB",
  fatherProductId: "iphone12",
  varients: [
    {
      id: 1,
      color: "Vàng",
      discountPrice: 21990000,
      price: 22990000,
      imgs: [
        "/assets/images/products/product_1-1.jpg",
        "/assets/images/products/product_1-3.jpg",
        "/assets/images/products/product_1-2.jpg",
      ],
      discount: true,
    },
    {
      id: 2,
      color: "Xanh",
      imgs: [
        "/assets/images/products/product_2-1.jpg",
        "/assets/images/products/product_2-3.jpg",
        "/assets/images/products/product_2-2.jpg",
      ],
      discountPrice: 21790000,
      price: 22790000,
      discount: true,
    },
    {
      id: 3,
      color: "Đen",
      imgs: [
        "/assets/images/products/product_3-1.jpg",
        "/assets/images/products/product_3-2.jpg",
        "/assets/images/products/product_3-3.jpg",
      ],
      price: 22490000,
      discount: true,
    },
  ],
};

export const shopHighlight = [
  "Cam kết 100% chính hãng",
  "Bảo hành 3 tháng 1 đổi 1",
  "Bảo hành 24 tháng",
  "Hỗ trợ vận chuyển toàn quốc",
  "Trả góp lãi suất 0%",
  "Hotline: 0987654321",
];

export const promotionData = {
  hasSpecialOffer: true, // flag để kiểm tra có ưu đãi đặc biệt hay không
  packages: {
    main: {
      title: "Chọn gói khuyến mãi:",
      offers: [
        {
          id: 1,
          content: "Xin Vía Thần Tài - Giảm 500,000đ áp dụng đến hết 16/02",
        },
        {
          id: 2,
          content: "Thần Tài Gõ Cửa - Giảm 200,000đ và Voucher 400,000đ",
        },
      ],
    },
    other: {
      title: "Khuyến mãi khác:",
      bundleDeals: [
        {
          title: "Ưu đãi mua kèm máy:",
          items: [
            {
              content:
                "Giảm {discount} khi mua kèm Đồng hồ định vị trẻ em MyAlo",
              discount: "50K",
            },
            {
              content:
                "Giảm {firstDiscount}, từ sản phẩm thứ 3 giảm {secondDiscount} khi mua kèm phụ kiện Chính Hãng",
              firstDiscount: "10%",
              secondDiscount: "20%",
              hasDetail: true,
            },
          ],
        },
      ],
    },
  },
  mainPromotion: {
    title: "Quà tặng và ưu đãi khác",
    content: [
      "Phụ kiện giảm hơn 80%, săn Coupon 200K. Thu Phụ Kiện Cũ - Đổi Phụ Kiện Mới",
      "Bảo hành lên đến 24 tháng và tặng kèm củ sạc hoặc phiếu mua hàng phụ kiện lên đến 400k khi mua kèm gói bảo hành rơi vỡ/vào nước",
      "Liên hệ để được tư vấn giá tốt nhất cho khách hàng doanh nghiệp khi mua số lượng nhiều. Hotline: 19008922.",
      "Giao nhanh Miễn Phí tại Hồ Chí Minh cho hóa đơn trên 500k",
    ],
  },
};

export const Guarantee = [
  "45 ngày 1 đổi 1, dùng thử 168 giờ",
  "Bảo hành phần cứng 6 tháng",
  "Bảo hành nhanh chỉ với số điện thoại",
];

export const productStatus = [
  "Máy được thu lại từ khách bán lại (thu cũ), nguồn gốc xuất xứ rõ ràng.",
  "Sản phẩm là phiên bản quốc tế chính hãng Apple. Máy có thể đã qua bảo hành hãng hoặc thay thế linh kiện để đảm bảo sự ổn định khi dùng.",
  "Quy cách: Máy trần không hộp, đã qua sử dụng. Ngoại hình trầy nhẹ thân máy, mặt kính màn hình.",
];

export const imgAdvertiseCarousel = [
  {
    img: "/assets/images/slider/carousel_slide-1.jpg",
    slug: "bb",
    title: "Apple Store",
  },
  {
    img: "/assets/images/slider/carousel_slide-2.jpg",
    slug: "bb",
    title: "Apple Store",
  },
  {
    img: "/assets/images/slider/carousel_slide-3.jpg",
    slug: "bb",
    title: "Apple Store",
  },
];

export const imgAdvertiseGrid = [
  {
    img: "/assets/images/slider/carousel_slide-1.jpg",
    slug: "bbb",
    title: "Apple Store",
  },
  {
    img: "/assets/images/slider/carousel_slide-2.jpg",
    slug: "bb",
    title: "Apple Store",
  },
  {
    img: "/assets/images/slider/carousel_slide-3.jpg",
    slug: "bb",
    title: "Apple Store",
  },
  {
    img: "/assets/images/slider/carousel_slide-3.jpg",
    slug: "bb",
    title: "Apple Store",
  },
];

export const catergoriesItem = [
  {
    img: "/assets/images/catergories/catergories-1.jpg",
    title: "Điện thoại",
    alt: "Apple Store",
    link: "#",
  },
  {
    img: "/assets/images/catergories/catergories-2.jpg",
    title: "Tablet",
    alt: "Apple Store",
    link: "#",
  },
  {
    img: "/assets/images/catergories/catergories-3.jpg",
    title: "Airpod",
    alt: "Apple Store",
    link: "#",
  },
  {
    img: "/assets/images/catergories/catergories-4.jpg",
    title: "Watch",
    alt: "Apple Store",
    link: "#",
  },
  {
    img: "/assets/images/catergories/catergories-5.jpg",
    title: "Macbook",
    alt: "Apple Store",
    link: "#",
  },
  {
    img: "/assets/images/catergories/catergories-6.jpg",
    title: "Laptop",
    alt: "Apple Store",
    link: "#",
  },
  {
    img: "/assets/images/catergories/catergories-7.jpg",
    title: "Cửa hàng",
    alt: "Apple Store",
    link: "#",
  },
  {
    img: "/assets/images/catergories/catergories-7.jpg",
    title: "Cửa hàng",
    alt: "Apple Store",
    link: "#",
  },
  {
    img: "/assets/images/catergories/catergories-7.jpg",
    title: "Cửa hàng",
    alt: "Apple Store",
    link: "#",
  },
  {
    img: "/assets/images/catergories/catergories-7.jpg",
    title: "Cửa hàng",
    alt: "Apple Store",
    link: "#",
  },
];

export const holidayDealImgs = {
  img: "/assets/images/sunday_saleoff.jpg",
  alt: "Apple Store",
  link: "#",
};

export const hotDealsItem = {
  product: "SUNDAY SPECIAL",
  data: [
    {
      discountGif: "/assets/images/discount_gif.gif",
      instatement: true,
      img: "/assets/images/products/product_1-1.jpg",
      alt: "Apple Store",
      slug: "aa",
      label: "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
      price: 24990000 ,
      discountPrice: 23990000,
    },

    {
      discountGif: "/assets/images/discount_gif.gif",
      instatement: true,
      img: "/assets/images/products/product_1-1.jpg",
      alt: "Apple Store",
      slug: "aa",
      label: "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
      price: 24990000,
      discountPrice: 23990000,
    },

    {
      discountGif: "/assets/images/discount_gif.gif",
      instatement: true,
      img: "/assets/images/products/product_1-1.jpg",
      alt: "Apple Store",
      slug: "aa",
      label: "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
      price: 24990000,
      discountPrice: 23990000,
    },

    {
      discountGif: "/assets/images/discount_gif.gif",
      instatement: true,
      img: "/assets/images/products/product_1-1.jpg",
      alt: "Apple Store",
      slug: "aa",
      label: "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
      price: 24990000,
      discountPrice: 23990000,
    },

    {
      discountGif: "/assets/images/discount_gif.gif",
      instatement: true,
      img: "/assets/images/products/product_1-1.jpg",
      alt: "Apple Store",
      slug: "aa",
      label: "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
      price: 24990000,
      discountPrice: 23990000,
    },
    {
      discountGif: "/assets/images/discount_gif.gif",
      instatement: true,
      img: "/assets/images/products/product_1-1.jpg",
      alt: "Apple Store",
      slug: "aa",
      label: "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
      price: 24990000,
      discountPrice: 23990000,
    },
    {
      discountGif: "/assets/images/discount_gif.gif",
      instatement: true,
      img: "/assets/images/products/product_1-1.jpg",
      alt: "Apple Store",
      slug: "aa",
      label: "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
      price: 24990000,
      discountPrice: 23990000,
    },
    {
      discountGif: "/assets/images/discount_gif.gif",
      instatement: true,
      img: "/assets/images/products/product_1-1.jpg",
      alt: "Apple Store",
      slug: "aa",
      label: "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
      price: 24990000,
      discountPrice: 23990000,
    },
  ],
};

export const carouselItems = [
  {
    product: "Apple chính hãng giá tốt",
    dealImg: [
      {
        link: "#",
        img: "/assets/images/hot-deal-catergories.jpg"
      },
      {
        link: "#",
        img: "/assets/images/hot-deal-catergories.jpg"
      }
    ],
    data: [
      {
        discountGif: "/assets/images/discount_gif.gif",
        instatement: true,
        img: "/assets/images/products/product_1-1.jpg",
        specialDealImg: "/assets/images/product-catergories.png",
        alt: "Apple Store",
        slug: "a",
        label: "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
        price: 24990000,
        discountPrice: 23990000,
      },
      {
        discountGif: "/assets/images/discount_gif.gif",
        instatement: true,
        img: "/assets/images/products/product_1-1.jpg",
        specialDealImg: "/assets/images/product-catergories.png",
        alt: "Apple Store",
        slug: "#",
        label: "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
        price: 24990000,
        discountPrice: 23990000,
      },
      {
        discountGif: "/assets/images/discount_gif.gif",
        instatement: true,
        img: "/assets/images/products/product_1-1.jpg",
        specialDealImg: "/assets/images/product-catergories.png",
        alt: "Apple Store",
        slug: "#",
        label: "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
        price: 24990000,
        discountPrice: 23990000,
      },
      {
        discountGif: "/assets/images/discount_gif.gif",
        instatement: true,
        img: "/assets/images/products/product_1-1.jpg",
        specialDealImg: "/assets/images/product-catergories.png",
        alt: "Apple Store",
        slug: "#",
        label: "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
        price: 24990000,
        discountPrice: 23990000,
      },
      {
        discountGif: "/assets/images/discount_gif.gif",
        instatement: true,
        img: "/assets/images/products/product_1-1.jpg",
        specialDealImg: "/assets/images/product-catergories.png",
        alt: "Apple Store",
        slug: "#",
        label: "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
        price: 24990000,
        discountPrice: 23990000,
      },
      {
        discountGif: "/assets/images/discount_gif.gif",
        instatement: true,
        img: "/assets/images/products/product_1-1.jpg",
        specialDealImg: "/assets/images/product-catergories.png",
        alt: "Apple Store",
        slug: "#",
        label: "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
        price: 24990000,
        discountPrice: 23990000,
      },
      {
        discountGif: "/assets/images/discount_gif.gif",
        instatement: true,
        img: "/assets/images/products/product_1-1.jpg",
        specialDealImg: "/assets/images/product-catergories.png",
        alt: "Apple Store",
        slug: "#",
        label: "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
        price: 24990000,
        discountPrice: 23990000,
      },
      {
        discountGif: "/assets/images/discount_gif.gif",
        instatement: true,
        img: "/assets/images/products/product_1-1.jpg",
        specialDealImg: "/assets/images/product-catergories.png",
        alt: "Apple Store",
        slug: "#",
        label: "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
        price: 24990000,
        discountPrice: 23990000,
      },
    ],
  },

  {
    product: "samsung chính hãng",
    dealImg: [
      {
        link: "#",
        img: "/assets/images/hot-deal-catergories.jpg"
      },
      {
        link: "#",
        img: "/assets/images/hot-deal-catergories.jpg"
      }
    ],
    data: [
      {
        discountGif: "/assets/images/discount_gif.gif",
        instatement: true,
        img: "/assets/images/products/samsung-galaxy-S24.jpg",
        specialDealImg: "/assets/images/product-catergories.png",
        alt: "Apple Store",
        slug: "#",
        label: "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
        price: 24990000,
        discountPrice: 23990000,
      },
      {
        discountGif: "/assets/images/discount_gif.gif",
        instatement: true,
        img: "/assets/images/products/samsung-galaxy-S24.jpg",
        specialDealImg: "/assets/images/product-catergories.png",
        alt: "Apple Store",
        slug: "#",
        label: "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
        price: 24990000,
        discountPrice: 23990000,
      },
      {
        discountGif: "/assets/images/discount_gif.gif",
        instatement: true,
        img: "/assets/images/products/samsung-galaxy-S24.jpg",
        specialDealImg: "/assets/images/product-catergories.png",
        alt: "Apple Store",
        slug: "#",
        label: "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
        price: 24990000,
        discountPrice: 23990000,
      },
      {
        discountGif: "/assets/images/discount_gif.gif",
        instatement: true,
        img: "/assets/images/products/samsung-galaxy-S24.jpg",
        specialDealImg: "/assets/images/product-catergories.png",
        alt: "Apple Store",
        slug: "#",
        label: "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
        price: 24990000,
        discountPrice: 23990000,
      },
      {
        discountGif: "/assets/images/discount_gif.gif",
        instatement: true,
        img: "/assets/images/products/samsung-galaxy-S24.jpg",
        specialDealImg: "/assets/images/product-catergories.png",
        alt: "Apple Store",
        slug: "#",
        label: "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
        price: 24990000,
        discountPrice: 23990000,
      },
      {
        discountGif: "/assets/images/discount_gif.gif",
        instatement: true,
        img: "/assets/images/products/samsung-galaxy-S24.jpg",
        specialDealImg: "/assets/images/product-catergories.png",
        alt: "Apple Store",
        slug: "#",
        label: "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
        price: 24990000,
        discountPrice: 23990000,
      },
      {
        discountGif: "/assets/images/discount_gif.gif",
        instatement: true,
        img: "/assets/images/products/samsung-galaxy-S24.jpg",
        specialDealImg: "/assets/images/product-catergories.png",
        alt: "Apple Store",
        slug: "#",
        label: "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
        price: 24990000,
        discountPrice: 23990000,
      },
        {
        discountGif: "/assets/images/discount_gif.gif",
        instatement: true,
        img: "/assets/images/products/samsung-galaxy-S24.jpg",
        specialDealImg: "/assets/images/product-catergories.png",
        alt: "Apple Store",
        slug: "#",
        label: "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
        price: 24990000,
        discountPrice: 23990000,
      },
    ],
  },

  {
    product: "macbook chính hãng",
    dealImg: [
      {
        link: "#",
        img: "/assets/images/hot-deal-catergories.jpg"
      },
      {
        link: "#",
        img: "/assets/images/hot-deal-catergories.jpg"
      }
    ],
    data: [
      {
        discountGif: "/assets/images/discount_gif.gif",
        instatement: true,
        img: "/assets/images/products/macbook.jpg",
        specialDealImg: "/assets/images/product-catergories.png",
        alt: "Apple Store",
        slug: "#",
        label: "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
        price: 56000000,
        discountPrice: 32990000,
      },
      {
        discountGif: "/assets/images/discount_gif.gif",
        instatement: true,
        img: "/assets/images/products/macbook.jpg",
        specialDealImg: "/assets/images/product-catergories.png",
        alt: "Apple Store",
        slug: "#",
        label: "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
        price: 56000000,
        discountPrice: 32990000,
      },
      {
        discountGif: "/assets/images/discount_gif.gif",
        instatement: true,
        img: "/assets/images/products/macbook.jpg",
        specialDealImg: "/assets/images/product-catergories.png",
        alt: "Apple Store",
        slug: "#",
        label: "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
        price: 56000000,
        discountPrice: 32990000,
      },
      {
        discountGif: "/assets/images/discount_gif.gif",
        instatement: true,
        img: "/assets/images/products/macbook.jpg",
        specialDealImg: "/assets/images/product-catergories.png",
        alt: "Apple Store",
        slug: "#",
        label: "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
        price: 56000000,
        discountPrice: 32990000,
      },
      {
        discountGif: "/assets/images/discount_gif.gif",
        instatement: true,
        img: "/assets/images/products/macbook.jpg",
        specialDealImg: "/assets/images/product-catergories.png",
        alt: "Apple Store",
        slug: "#",
        label: "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
        price: 56000000,
        discountPrice: 32990000,
      },
    ],
  },
];

export const productsImgRelateDeals = [
  {
    img: '/assets/images/slider/product_relate-1.jpg',
    alt: 'Relate 1',
    link: '#'
  },
  {
    img: '/assets/images/slider/product_relate-2.jpg',
    alt: 'Relate 1',
    link: '#'
  },
  {
    img: '/assets/images/slider/product_relate-3.jpg',
    alt: 'Relate 1',
    link: '#'
  },
]

export const aboutStoreImgs = [
  {
    img: '/assets/images/aboutshop_1.jpg',
    alt: 'About Store 1',
  },
  {
    img: '/assets/images/aboutshop_1.jpg',
    alt: 'About Store 1',
  },
  {
    img: '/assets/images/aboutshop_1.jpg',
    alt: 'About Store 1',
  },
  {
    img: '/assets/images/aboutshop_1.jpg',
    alt: 'About Store 1',
  },
  {
    img: '/assets/images/aboutshop_1.jpg',
    alt: 'About Store 1',
  },
]

export const homePageFooterOffers = [
  {
    label: "ưu đãi shop",
    data: [
      {
        img: "/assets/images/shop_endow-2.jpg",
        alt: "Store Edows",
        slug: "#",
      },
      {
        img: "/assets/images/shop_endow-2.jpg",
        alt: "Store Edows",
        slug: "#",
      },
      {
        img: "/assets/images/shop_endow-2.jpg",
        alt: "Store Edows",
        slug: "#",
      },
      {
        img: "/assets/images/shop_endow-2.jpg",
        alt: "Store Edows",
        slug: "#",
      },
      {
        img: "/assets/images/shop_endow-2.jpg",
        alt: "Store Edows",
        slug: "#",
      },
      {
        img: "/assets/images/shop_endow-1.jpg",
        alt: "Store Edows",
        slug: "#",
      },
    ]
  },
  {
    label: "ưu đãi sinh viên",
    data: [
      {
        img: "/assets/images/shop_endow-1.jpg",
        alt: "Store Edows",
        slug: "a",
      },
      {
        img: "/assets/images/shop_endow-1.jpg",
        alt: "Store Edows",
        slug: "#",
      },
      {
        img: "/assets/images/shop_endow-1.jpg",
        alt: "Store Edows",
        slug: "#",
      },
      {
        img: "/assets/images/shop_endow-1.jpg",
        alt: "Store Edows",
        slug: "#",
      },
    ]
  },
]

export const shopImgs = [
  {
    img: '/assets/images/shop/shop-1.jpg',
    alt: 'Shop 1',
  },
  {
    img: '/assets/images/shop/shop-2.jpg',
    alt: 'Shop 2',
  },
  {
    img: '/assets/images/shop/shop-3.jpg',
    alt: 'Shop 3',
  },
  {
    img: '/assets/images/shop/shop-1.jpg',
    alt: 'Shop 1',
  },
  {
    img: '/assets/images/shop/shop-2.jpg',
    alt: 'Shop 2',
  },
]

export const footerSocials = [
  {
    alt: "facebook",
    link: "#",
    img: "/assets/images/facebook-footer.jpg",
  },
  {
    alt: "insta",
    link: "#",
    img: "/assets/images/insta-footer.jpg",
  },
  {
    alt: "facebook",
    link: "#",
    img: "/assets/images/zalo-footer.jpg",
  },
]

export const relateProducts = {
  product: "sản phẩm tương tự",
  datas: [
    {
      discountGif: "/assets/images/discount_gif.gif",
      instatement: true,
      img: "/assets/images/products/product_1-1.jpg",
      absoluteImg: "/assets/images/sunday_discount.png",
      alt: "Apple Store",
      slug: "aa",
      label: "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
      price: 24990000 ,
      discountPrice: 23990000,
    },

    {
      discountGif: "/assets/images/discount_gif.gif",
      instatement: true,
      img: "/assets/images/products/product_1-1.jpg",
      absoluteImg: "/assets/images/sunday_discount.png",
      alt: "Apple Store",
      slug: "aa",
      label: "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
      price: 24990000,
      discountPrice: 23990000,
    },

    {
      discountGif: "/assets/images/discount_gif.gif",
      instatement: true,
      img: "/assets/images/products/product_1-1.jpg",
      absoluteImg: "/assets/images/sunday_discount.png",
      alt: "Apple Store",
      slug: "aa",
      label: "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
      price: 24990000,
      discountPrice: 23990000,
    },

    {
      discountGif: "/assets/images/discount_gif.gif",
      instatement: true,
      img: "/assets/images/products/product_1-1.jpg",
      absoluteImg: "/assets/images/sunday_discount.png",
      alt: "Apple Store",
      slug: "aa",
      label: "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
      price: 24990000,
      discountPrice: 23990000,
    },

    {
      discountGif: "/assets/images/discount_gif.gif",
      instatement: true,
      img: "/assets/images/products/product_1-1.jpg",
      absoluteImg: "/assets/images/sunday_discount.png",
      alt: "Apple Store",
      slug: "aa",
      label: "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
      price: 24990000,
      discountPrice: 23990000,
    },
    {
      discountGif: "/assets/images/discount_gif.gif",
      instatement: true,
      img: "/assets/images/products/product_1-1.jpg",
      absoluteImg: "/assets/images/sunday_discount.png",
      alt: "Apple Store",
      slug: "aa",
      label: "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
      price: 24990000,
      discountPrice: 23990000,
    },
    {
      discountGif: "/assets/images/discount_gif.gif",
      instatement: true,
      img: "/assets/images/products/product_1-1.jpg",
      absoluteImg: "/assets/images/sunday_discount.png",
      alt: "Apple Store",
      slug: "aa",
      label: "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
      price: 24990000,
      discountPrice: 23990000,
    },
    {
      discountGif: "/assets/images/discount_gif.gif",
      instatement: true,
      img: "/assets/images/products/product_1-1.jpg",
      absoluteImg: "/assets/images/sunday_discount.png",
      alt: "Apple Store",
      slug: "aa",
      label: "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
      price: 24990000,
      discountPrice: 23990000,
    },
  ],
};

export const productDetails = {
  
}