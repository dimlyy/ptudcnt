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
    alt: "Smartphone Store",
    link: "/dien-thoai",
    children: [
      {
        label: "Iphone",
        data: [
          { name: "iPhone 16 Pro Max", slug: "iphone-16-pro-max" },
          { name: "iPhone 15 Pro Max", slug: "iphone-15-pro-max" },
          { name: "iPhone 14 Pro Max", slug: "iphone-14-pro-max" },
          { name: "iPhone 13 Pro Max", slug: "iphone-13-pro-max" },
          { name: "iPhone 12 Pro Max", slug: "iphone-12-pro-max" },
          { name: "iPhone 11 Pro Max", slug: "iphone-11-pro-max" },
          { name: "iPhone X", slug: "iphone-x" }
        ]
      },
      {
        label: "Samsung",
        data: [
          { name: "Samsung Galaxy S24 Ultra", slug: "samsung-s24-ultra" },
          { name: "Samsung Galaxy S23 Ultra", slug: "samsung-s23-ultra" },
          { name: "Samsung Galaxy Z Fold 5", slug: "samsung-z-fold-5" },
          { name: "Samsung Galaxy A54", slug: "samsung-a54" },
          { name: "Samsung Galaxy M34", slug: "samsung-m34" }
        ]
      },
      {
        label: "Xiaomi",
        data: [
          { name: "Xiaomi 14 Pro", slug: "xiaomi-14-pro" },
          { name: "Xiaomi Redmi Note 13", slug: "xiaomi-redmi-note-13" },
          { name: "Xiaomi 13T", slug: "xiaomi-13t" }
        ]
      }
    ]
  },
  {
    img: "/assets/images/catergories/catergories-2.jpg",
    title: "Tablet",
    alt: "Tablet Store",
    link: "/tablet",
    children: [
      {
        label: "iPad",
        data: [
          { name: "iPad Pro 12.9 inch", slug: "ipad-pro-12-9" },
          { name: "iPad Air 5th Gen", slug: "ipad-air-5" },
          { name: "iPad 10th Gen", slug: "ipad-10" },
          { name: "iPad Mini 6", slug: "ipad-mini-6" }
        ]
      },
      {
        label: "Samsung Tablet",
        data: [
          { name: "Samsung Galaxy Tab S9 Ultra", slug: "samsung-tab-s9-ultra" },
          { name: "Samsung Galaxy Tab A9+", slug: "samsung-tab-a9-plus" }
        ]
      }
    ]
  },
  {
    img: "/assets/images/catergories/catergories-3.jpg",
    title: "Airpod",
    alt: "Earbuds Store",
    link: "/airpod",
    children: [
      {
        label: "Apple AirPods",
        data: [
          { name: "AirPods Pro 2nd Gen", slug: "airpods-pro-2" },
          { name: "AirPods 3rd Gen", slug: "airpods-3" },
          { name: "AirPods 2nd Gen", slug: "airpods-2" }
        ]
      },
      {
        label: "Samsung Earbuds",
        data: [
          { name: "Samsung Galaxy Buds2 Pro", slug: "samsung-buds-2-pro" },
          { name: "Samsung Galaxy Buds FE", slug: "samsung-buds-fe" }
        ]
      }
    ]
  },
  {
    img: "/assets/images/catergories/catergories-4.jpg",
    title: "Watch",
    alt: "Smartwatch Store",
    link: "/watch",
    children: [
      {
        label: "Apple Watch",
        data: [
          { name: "Apple Watch Series 9", slug: "apple-watch-9" },
          { name: "Apple Watch Ultra 2", slug: "apple-watch-ultra-2" },
          { name: "Apple Watch SE 2nd Gen", slug: "apple-watch-se-2" }
        ]
      },
      {
        label: "Samsung Watch",
        data: [
          { name: "Samsung Galaxy Watch 6", slug: "samsung-watch-6" },
          { name: "Samsung Galaxy Watch 5 Pro", slug: "samsung-watch-5-pro" }
        ]
      }
    ]
  },
  {
    img: "/assets/images/catergories/catergories-5.jpg",
    title: "Macbook",
    alt: "Apple Laptop Store",
    link: "/macbook",
    children: [
      {
        label: "MacBook Pro",
        data: [
          { name: "MacBook Pro 16-inch M3 Max", slug: "macbook-pro-16-m3-max" },
          { name: "MacBook Pro 14-inch M3", slug: "macbook-pro-14-m3" },
          { name: "MacBook Pro 13-inch M2", slug: "macbook-pro-13-m2" }
        ]
      },
      {
        label: "MacBook Air",
        data: [
          { name: "MacBook Air 15-inch M2", slug: "macbook-air-15-m2" },
          { name: "MacBook Air 13-inch M2", slug: "macbook-air-13-m2" }
        ]
      }
    ]
  },
  {
    img: "/assets/images/catergories/catergories-6.jpg",
    title: "Laptop",
    alt: "Laptop Store",
    link: "/laptop",
    children: [
      {
        label: "Dell",
        data: [
          { name: "Dell XPS 15", slug: "dell-xps-15" },
          { name: "Dell Inspiron 16", slug: "dell-inspiron-16" }
        ]
      },
      {
        label: "Lenovo",
        data: [
          { name: "Lenovo ThinkPad X1 Carbon", slug: "lenovo-thinkpad-x1" },
          { name: "Lenovo Yoga 9i", slug: "lenovo-yoga-9i" }
        ]
      }
    ]
  },
  {
    img: "/assets/images/catergories/catergories-7.jpg",
    title: "Cửa hàng",
    alt: "Store",
    link: "/cua-hang",
    children: []
  },
  {
    img: "/assets/images/catergories/catergories-7.jpg",
    title: "Cửa hàng",
    alt: "Store",
    link: "/cua-hang",
    children: []
  },
  {
    img: "/assets/images/catergories/catergories-7.jpg",
    title: "Cửa hàng",
    alt: "Store",
    link: "/cua-hang",
    children: []
  },
  {
    img: "/assets/images/catergories/catergories-7.jpg",
    title: "Cửa hàng",
    alt: "Store",
    link: "/cua-hang",
    children: []
  }
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
        img: "/assets/images/hot-deal-catergories.jpg",
      },
      {
        link: "#",
        img: "/assets/images/hot-deal-catergories.jpg",
      },
    ],
    data: [
      {
        discountGif: "/assets/images/discount_gif.gif",
        instatement: true,
        img: "/assets/images/products/product_1-1.jpg",
        specialDealImg: "/assets/images/product-catergories.png",
        alt: "Apple Store",
        slug: "a",
        label:
          "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
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
        label:
          "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
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
        label:
          "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
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
        label:
          "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
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
        label:
          "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
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
        label:
          "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
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
        label:
          "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
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
        label:
          "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
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
        img: "/assets/images/hot-deal-catergories.jpg",
      },
      {
        link: "#",
        img: "/assets/images/hot-deal-catergories.jpg",
      },
    ],
    data: [
      {
        discountGif: "/assets/images/discount_gif.gif",
        instatement: true,
        img: "/assets/images/products/samsung-galaxy-S24.jpg",
        specialDealImg: "/assets/images/product-catergories.png",
        alt: "Apple Store",
        slug: "#",
        label:
          "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
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
        label:
          "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
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
        label:
          "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
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
        label:
          "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
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
        label:
          "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
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
        label:
          "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
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
        label:
          "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
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
        label:
          "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
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
        img: "/assets/images/hot-deal-catergories.jpg",
      },
      {
        link: "#",
        img: "/assets/images/hot-deal-catergories.jpg",
      },
    ],
    data: [
      {
        discountGif: "/assets/images/discount_gif.gif",
        instatement: true,
        img: "/assets/images/products/macbook.jpg",
        specialDealImg: "/assets/images/product-catergories.png",
        alt: "Apple Store",
        slug: "#",
        label:
          "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
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
        label:
          "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
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
        label:
          "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
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
        label:
          "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
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
        label:
          "Iphone 16 ProMax 128GB chính hãng - fullbox - bảo hành 24 tháng",
        price: 56000000,
        discountPrice: 32990000,
      },
    ],
  },
];

export const productsImgRelateDeals = [
  {
    img: "/assets/images/slider/product_relate-1.jpg",
    alt: "Relate 1",
    link: "#",
  },
  {
    img: "/assets/images/slider/product_relate-2.jpg",
    alt: "Relate 1",
    link: "#",
  },
  {
    img: "/assets/images/slider/product_relate-3.jpg",
    alt: "Relate 1",
    link: "#",
  },
];

export const aboutStoreImgs = [
  {
    img: "/assets/images/aboutshop_1.jpg",
    alt: "About Store 1",
  },
  {
    img: "/assets/images/aboutshop_1.jpg",
    alt: "About Store 1",
  },
  {
    img: "/assets/images/aboutshop_1.jpg",
    alt: "About Store 1",
  },
  {
    img: "/assets/images/aboutshop_1.jpg",
    alt: "About Store 1",
  },
  {
    img: "/assets/images/aboutshop_1.jpg",
    alt: "About Store 1",
  },
];

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
    ],
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
    ],
  },
];

export const shopImgs = [
  {
    img: "/assets/images/shop/shop-1.jpg",
    alt: "Shop 1",
  },
  {
    img: "/assets/images/shop/shop-2.jpg",
    alt: "Shop 2",
  },
  {
    img: "/assets/images/shop/shop-3.jpg",
    alt: "Shop 3",
  },
  {
    img: "/assets/images/shop/shop-1.jpg",
    alt: "Shop 1",
  },
  {
    img: "/assets/images/shop/shop-2.jpg",
    alt: "Shop 2",
  },
];

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
];

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

export const productDescription = {
  description: {
    content: `
     <h1 style="font-size: 1.5rem; color:black">Iphone 16 ProMax 128GB chính hãng</h1>
      <div style="width: 100%; display: flex; justify-content: center; align-items: center;">
        <img src="/assets/images/products/product_1-1.jpg" width="400" height="400" style="object-fit: contain; height: auto;" alt="Iphone 16 ProMax" />
      </div>
     <p>
        Bao da Smart Folio nổi bật với thiết kế mỏng nhẹ và thanh lịch, được chế tác từ chất liệu polyurethane (PU) cao cấp. Chất liệu này không chỉ mang đến độ bền cao, khả năng chống nước và chống mài mòn hiệu quả mà còn giúp giữ nguyên vẻ đẹp sang trọng của iPad Pro 13 inch (M4).
      </p>
      <p>
        Điểm đặc biệt của Smart Folio là trọng lượng cực kỳ nhẹ, bảo toàn độ mỏng nhẹ vốn có của iPad Pro. Ngoài ra, nhờ thiết kế từ tính thông minh, bao da sẽ tự động hút chặt vào iPad khi gắn vào, tạo nên lớp bảo vệ toàn diện 360° cho cả mặt trước và mặt sau thiết bị. Lớp đệm mềm mại bên trong bao da giúp bảo vệ iPad khỏi va đập, trầy xước và các tác động ngoại lực khác một cách hiệu quả.
      </p>
      <p>
        Điểm đặc biệt của Smart Folio là trọng lượng cực kỳ nhẹ, bảo toàn độ mỏng nhẹ vốn có của iPad Pro. Ngoài ra, nhờ thiết kế từ tính thông minh, bao da sẽ tự động hút chặt vào iPad khi gắn vào, tạo nên lớp bảo vệ toàn diện 360° cho cả mặt trước và mặt sau thiết bị. Lớp đệm mềm mại bên trong bao da giúp bảo vệ iPad khỏi va đập, trầy xước và các tác động ngoại lực khác một cách hiệu quả.
      </p>
      <p>
        Điểm đặc biệt của Smart Folio là trọng lượng cực kỳ nhẹ, bảo toàn độ mỏng nhẹ vốn có của iPad Pro. Ngoài ra, nhờ thiết kế từ tính thông minh, bao da sẽ tự động hút chặt vào iPad khi gắn vào, tạo nên lớp bảo vệ toàn diện 360° cho cả mặt trước và mặt sau thiết bị. Lớp đệm mềm mại bên trong bao da giúp bảo vệ iPad khỏi va đập, trầy xước và các tác động ngoại lực khác một cách hiệu quả.
      </p>
      <p>
        Điểm đặc biệt của Smart Folio là trọng lượng cực kỳ nhẹ, bảo toàn độ mỏng nhẹ vốn có của iPad Pro. Ngoài ra, nhờ thiết kế từ tính thông minh, bao da sẽ tự động hút chặt vào iPad khi gắn vào, tạo nên lớp bảo vệ toàn diện 360° cho cả mặt trước và mặt sau thiết bị. Lớp đệm mềm mại bên trong bao da giúp bảo vệ iPad khỏi va đập, trầy xước và các tác động ngoại lực khác một cách hiệu quả.
      </p>
    `,
  },
  shortDescription: {
    content: [
      {
        label: "Màn hình",
        data: [
          {
            name: "Công nghệ màn hình",
            value: "IPS LCD",
          },
          {
            name: "Kích thước màn hình (inch)",
            value: "10.9",
          },
          {
            name: "Mặt kính cảm ứng",
            value: "IPS LCD",
          },
          {
            name: "Tính năng màn hình",
            value: "Tần số quét 90hz ",
          },
        ],
      },
      {
        label: "Màn hình",
        data: [
          {
            name: "Công nghệ màn hình",
            value: "IPS LCD",
          },
          {
            name: "Kích thước màn hình (inch)",
            value: "10.9",
          },
          {
            name: "Mặt kính cảm ứng",
            value: "IPS LCD",
          },
          {
            name: "Tính năng màn hình",
            value: "Tần số quét 90hz ",
          },
        ],
      },
      {
        label: "Màn hình",
        data: [
          {
            name: "Công nghệ màn hình",
            value: "IPS LCD",
          },
          {
            name: "Kích thước màn hình (inch)",
            value: "10.9",
          },
          {
            name: "Mặt kính cảm ứng",
            value: "IPS LCD",
          },
          {
            name: "Tính năng màn hình",
            value: "Tần số quét 90hz ",
          },
        ],
      },
      {
        label: "Màn hình",
        data: [
          {
            name: "Công nghệ màn hình",
            value: "IPS LCD",
          },
          {
            name: "Kích thước màn hình (inch)",
            value: "10.9",
          },
          {
            name: "Mặt kính cảm ứng",
            value: "IPS LCD",
          },
          {
            name: "Tính năng màn hình",
            value: "Tần số quét 90hz ",
          },
        ],
      },
    ],
  },
};

export const customerVoting = [
  {
    name: "John Doe",
    rating: 5,
    comment: "This product is amazing!",
    buying: true,
    dateBuying: "11/09/2003",
  },
  {
    name: "Jane Smith",
    rating: 4,
    comment: "Great product, works well.",
    buying: true,
    dateBuying: "05/12/2022",
  },
  {
    name: "Michael Johnson",
    rating: 3,
    comment: "Decent product, could be better.",
    buying: false,
    dateBuying: "19/03/2021",
  },
  {
    name: "Emily Davis",
    rating: 5,
    comment: "Absolutely love it! Highly recommend.",
    buying: true,
    dateBuying: "28/07/2023",
  },
  {
    name: "David Wilson",
    rating: 4,
    comment: "Good quality product, satisfied with the purchase.",
    buying: true,
    dateBuying: "02/11/2020",
  },
  {
    name: "Sarah Anderson",
    rating: 5,
    comment: "Excellent product, exceeds expectations!",
    buying: true,
    dateBuying: "14/06/2024",
  },
];

export const catergoriesSlug = {
  navigatorts: [
    {
      slug: "#",
      label: "Điện thoại",
    },
    {
      slug: "#",
      label: "Điện thoại",
    },
  ],
  catergoriesAds: [
    {
      slug: "#",
      img: "/assets/images/hot-deal-catergories.jpg",
    },
    {
      slug: "#",
      img: "/assets/images/hot-deal-catergories.jpg",
    },
  ],
};

export const cartItems = [
  {
    slug: "aa",
    id: "1",
    name: "iPhone 12 Pro Max",
    price: 15990000,
    discountPrice: 15990000,
    quantity: 2,
    relateImg: ["/assets/images/slider/product_relate-1.jpg"],
    img: "/assets/images/products/product_1-1.jpg",
    selected: true,
  },
  {
    slug: "aa",
    id: "2",
    name: "Samsung20 Galaxy S21 Ultra",
    price: 15990000,
    discountPrice: 15990000,
    quantity: 1,
    relateImg: ["/assets/images/slider/product_relate-1.jpg"],
    img: "/assets/images/products/samsung-galaxy-S24.jpg",
    selected: false,
  },
  {
    slug: "aa",
    id: "3",
    name: "Xiaomi Mi 11",
    price: 15990000,
    discountPrice: 15990000,
    quantity: 3,
    relateImg: ["/assets/images/slider/product_relate-1.jpg"],
    img: "/assets/images/products/product_1-1.jpg",
    selected: true,
  },
];

export const filterItems = {
  series: [
    {
      label: "Iphone 16",
      value: "#",
    },
    {
      label: "Iphone 15",
      value: "#",
    },
    {
      label: "Iphone 14",
      value: "#",
    },
    {
      label: "Iphone 13",
      value: "#",
    },
    {
      label: "Iphone 12",
      value: "#",
    },
    {
      label: "Iphone 11",
      value: "#",
    },
    {
      label: "Iphone X",
      value: "#",
    },
  ],
  datas: [
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

export const blogPost = [
  {
    slug: "aa",
    avatar: "/assets/images/avatar.jpg",
    user: "Dimly",
    title: "Nhân ngày 8/3, giảm giá đặc biệt cho tất cả chị em phụ nữ",
    description:
      "Lập trình đang dần trở thành một ngành “hot” và là xu thế của nhiều người trẻ hiện nay. Vậy tự học lập trình có khó không? Bài viết...",
    type: "Diện thoại",
    date: "13-7-2025",
    img: "/assets/images/blog-post-1.jpg",
  },
  {
    slug: "aa",
    avatar: "/assets/images/avatar.jpg",
    user: "Dimly",
    title: "Nhân ngày 8/3, giảm giá đặc biệt cho tất cả chị em phụ nữ",
    description:
      "Lập trình đang dần trở thành một ngành “hot” và là xu thế của nhiều người trẻ hiện nay. Vậy tự học lập trình có khó không? Bài viết...",
    type: "Diện thoại",
    date: "13-7-2025",
    img: "/assets/images/blog-post-1.jpg",
  },
  {
    slug: "aa",
    avatar: "/assets/images/avatar.jpg",
    user: "Dimly",
    title: "Nhân ngày 8/3, giảm giá đặc biệt cho tất cả chị em phụ nữ",
    description:
      "Lập trình đang dần trở thành một ngành “hot” và là xu thế của nhiều người trẻ hiện nay. Vậy tự học lập trình có khó không? Bài viết...",
    type: "Diện thoại",
    date: "13-7-2025",
    img: "/assets/images/blog-post-1.jpg",
  },
  {
    slug: "aa",
    avatar: "/assets/images/avatar.jpg",
    user: "Dimly",
    title: "Nhân ngày 8/3, giảm giá đặc biệt cho tất cả chị em phụ nữ",
    description:
      "Lập trình đang dần trở thành một ngành “hot” và là xu thế của nhiều người trẻ hiện nay. Vậy tự học lập trình có khó không? Bài viết...",
    type: "Diện thoại",
    date: "13-7-2025",
    img: "/assets/images/blog-post-1.jpg",
  },
];

export const socialMediaBlogs = [
  {
    img: "/assets/images/facebook.jpg",
    link: "#",
  },
  {
    img: "/assets/images/instagram.jpg",
    link: "#",
  },
  {
    img: "/assets/images/phone-call.jpg",
    link: "tel:0378808834",
  },
];
