import blouse1_1 from './blouse1_1.webp'
import blouse1_2 from './blouse1_2.webp'
import blouse1_3 from './blouse1_3.webp'
import blouse1_4 from './blouse1_4.webp'
import blouse2_1 from './blouse2_1.webp'
import blouse2_2 from './blouse2_2.webp'
import blouse2_3 from './blouse2_3.webp'
import blouse2_4 from './blouse2_4.webp'
import jeans1_1 from './jeans1_1.webp'
import jeans1_2 from './jeans1_2.webp'
import jeans1_3 from './jeans1_3.webp'
import jeans1_4 from './jeans1_4.webp'
import jeans1m_1 from './jeans1m_1.webp'
import jeans1m_2 from './jeans1m_2.webp'
import jeans1m_3 from './jeans1m_3.webp'
import jeans1m_4 from './jeans1m_4.webp'
import jeans2_1 from './jeans2_1.webp'
import jeans2_2 from './jeans2_2.webp'
import jeans2_3 from './jeans2_3.webp'
import jeans2_4 from './jeans2_4.webp'
import jeans2m_1 from './jeans2m_1.webp'
import jeans2m_2 from './jeans2m_2.webp'
import jeans2m_3 from './jeans2m_3.webp'
import jeans2m_4 from './jeans2m_4.webp'
import jeans3_1 from './jeans3_1.webp'
import jeans3_2 from './jeans3_2.webp'
import jeans3_3 from './jeans3_3.webp'
import jeans3_4 from './jeans3_4.webp'
import t_shirt1_1 from './t_shirt1_1.webp'
import t_shirt1_2 from './t_shirt1_2.webp'
import t_shirt1_3 from './t_shirt1_3.webp'
import t_shirt1_4 from './t_shirt1_4.webp'
import t_shirt1m_1 from './t_shirt1m_1.webp'
import t_shirt1m_2 from './t_shirt1m_2.webp'
import t_shirt1m_3 from './t_shirt1m_3.webp'
import t_shirt1m_4 from './t_shirt1m_4.webp'
import t_shirt2_1 from './t_shirt2_1.webp'
import t_shirt2_2 from './t_shirt2_2.webp'
import t_shirt2_3 from './t_shirt2_3.webp'
import t_shirt2_4 from './t_shirt2_4.webp'
import t_shirt2m_1 from './t_shirt2_1.webp'
import t_shirt2m_2 from './t_shirt2_2.webp'
import t_shirt2m_3 from './t_shirt2_3.webp'
import t_shirt2m_4 from './t_shirt2_4.webp'
import top1_1 from './top1_1.webp'
import top1_2 from './top1_2.webp'
import top1_3 from './top1_3.webp'
import top1_4 from './top1_4.webp'
import top2_1 from './top2_1.webp'
import top2_2 from './top2_2.webp'
import top2_3 from './top2_3.webp'
import top2_4 from './top2_4.webp'
import top3_1 from './top3_1.webp'
import top3_2 from './top3_2.webp'
import top3_3 from './top3_3.webp'
import top3_4 from './top3_4.webp'



import logo from './logo.png'
import logo1 from './logo1.jpg'
import logo2 from './logo2.webp'
import logo3 from './logo3.jpg'
import logo5 from './logo5.jpeg'
import search from './search.png'
import profile from './profile.png'
import cart from './cart.png'
import menu from './menu.png'
import arrow from './arrow.png'
import hero1 from './hero1.jpg'

export const assets = {
    logo,
    logo1,
    logo2,
    logo3,
    logo5,
    search,
    profile,
    cart,
    menu,
    arrow,
    hero1
}

export const products = [
    {
        _id: "a",
        name: "Love & Roses Lace Cuff Crew Neck Blouse",
        description: "A crew neck long sleeve blouse, perfect for desk to dinner plans.",
        price: 40,
        image: [blouse1_1, blouse1_2, blouse1_3, blouse1_4],
        category: "Women",
        // subCategory: "Blouse",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: false,
    },
    {
        _id: "b",
        name: "Lipsy V Neck 3/4 Sleeve Collared Blouse",
        description: "Relaxed fit blouse from Lipsy. A smart blouse, perfect for every day wear.",
        price: 32,
        image: [blouse2_1, blouse2_2, blouse2_3, blouse2_4],
        category: "Women",
        subCategory: "Topwear",
        // subCategory: "Blouse",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: true,
    },
    {
        _id: "c",
        name: "Slim Lift And Shape Bootcut Jeans",
        description: "Our Lift, Slim and Shape jeans are cleverly designed jeans with hidden support providing extra waist smoothing. With a curved gap free waistband to support and slim and a high rise waist for a flattering fit. Featuring eco-made fibres, recycled zip tape and recycled thread. The only choice for flattering denim",
        price: 48,
        image: [jeans1_1, jeans1_2, jeans1_3, jeans1_4],
        category: "Women",
        subCategory: "Bottomwear",
        // subCategory: "Jeans",
        sizes: ["S", "M", "L", "XL"],
        date: 1716634345448,
        bestseller: true,
    },
    {
        _id: "d",
        name: "Power Stretch Denim Legging",
        description: "Made from denim with added stretch for great shape recovery and all-day comfort. The mid-waist and skinny leg give a flattering silhouette you'll reach for over and over. Your all-day, everyday style staple starts here.",
        price: 58,
        image: [jeans2_1, jeans2_2, jeans2_3, jeans2_4],
        category: "Women",
        subCategory: "Bottomwear",
        // subCategory: "Jeans",
        sizes: ["M", "L", "XL"],
        date: 1716634345448,
        bestseller: false,
    },
    {
        _id: "e",
        name: "Coated Skinny Jeans",
        description: "Skinny fit Five-pockets Ankle length Zip fly and button fastening Belt loops..",
        price: 38,
        image: [jeans3_1, jeans3_2, jeans3_3, jeans3_4],
        category: "Women",
        subCategory: "Bottomwear",
        // subCategory: "Jeans",
        sizes: ["M", "L", "XL"],
        date: 1716634345448,
        bestseller: false,
    },
    {
        _id: "f",
        name: "Levi's® Slim 511™ Jeans",
        description: "Think of this modern slim as not-so-skinny skinny sequoia jeans. (If you want the style, but not the feeling, this is a great alternative.)",
        price: 48,
        image: [jeans1m_1, jeans1m_2, jeans1m_3, jeans1m_4],
        category: "Men",
        subCategory: "Bottomwear",
        // subCategory: "Jeans",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: true,
    },
    {
        _id: "g",
        name: "Classic Stretch Jeans",
        description: "We found the most perfectly engineered denim and created our classic stretch mid blue jeans range to ensure your core wardrobe has a reliably stylish foundation.",
        price: 28,
        image: [jeans2m_1, jeans2m_2, jeans2m_3, jeans2m_4],
        category: "Men",
        subCategory: "Bottomwear",
        // subCategory: "Jeans",
        sizes: ["M", "L", "XL"],
        date: 1716634345448,
        bestseller: false,
    },
    {
        _id: "h",
        name: "Round Neck Cap Sleeve T-Shirt",
        description: "100% cotton Plain pattern Short turned up cap sleeves Round neck Curved hem Buy 2 or more for £7 each on selected Next Womens Cap Sleeve Tees",
        price: 8,
        image: [t_shirt1_1, t_shirt1_2, t_shirt1_3, t_shirt1_4],
        category: "Women",
        subCategory: "Topwear",
        // subCategory: "T-Shir",
        sizes: ["M", "L", "XL"],
        date: 1716634345448,
        bestseller: false,
    },
    {
        _id: "i",
        name: "Heavyweight Long Sleeve T-Shirt",
        description: "A style staple, our heavyweight long sleeve t-shirt will take you from day to night effortlessly. Designed with long sleeves and a crew neck, this pure cotton top is made with a heavyweight feel for added warmth. Wear it as a casual piece during the day or pair it with a leather skirt for a more dressier occasion.",
        price: 22,
        image: [t_shirt2_1, t_shirt2_2, t_shirt2_3, t_shirt2_4],
        category: "Women",
        subCategory: "Topwear",
        // subCategory: "T-Shir",
        sizes: ["M", "L", "XL"],
        date: 1716634345448,
        bestseller: true,
    },
    {
        _id: "j",
        name: "Relaxed Fit 100% Cotton Japanese Back Print Graphic T-Shirt",
        description: "Add a touch of Japanese style to your wardrobe with our graphic T-Shirt. Made from 100% cotton in a relaxed fit, the T-Shirt features a small chest graphic with a larger print graphic to the back. A great casual T-Shirt to add to your collection.",
        price: 18,
        image: [t_shirt1m_1, t_shirt1m_2, t_shirt1m_3, t_shirt1m_4],
        category: "Men",
        subCategory: "Topwear",
        // subCategory: "T-Shir",
        sizes: ["M", "L", "XL"],
        date: 1716634345448,
        bestseller: false,
    },
    {
        _id: "k",
        name: "Block 100% Cotton T-Shirt",
        description: "Update your essentials, with this stylish short sleeve T-Shirt, featuring a block design, a ribbed crewneck collar and an embroidered stag logo to the chest.",
        price: 15,
        image: [t_shirt2m_1, t_shirt2m_2, t_shirt2m_3, t_shirt2m_4],
        category: "Men",
        subCategory: "Topwear",
        // subCategory: "T-Shir",
        sizes: ["S","M", "L", "XL"],
        date: 1716634345448,
        bestseller: false,
    },
    {
        _id: "l",
        name: "Lipsy V Neck 3/4 Sleeve Collared Blouse",
        description: "Relaxed fit smart blouse from Lipsy which is perfect for everyday wear. Featuring: Notch V neckline Collared style 3/4 sleeves with roll up and tab 100% Polyester.",
        price: 32,
        image: [top1_1, top1_2, top1_3, top1_4],
        category: "Women",
        subCategory: "Topwear",
        // subCategory: "Blouse",
        sizes: ["S","M", "L", "XL"],
        date: 1716634345448,
        bestseller: false,
    },
    {
        _id: "m",
        name: "Long Sleeve Crew Neck Top",
        description: "A wardrobe staple, our long-sleeved black top is made with a cotton-rich fabric that is soft and comfortable",
        price: 9,
        image: [top2_1, top2_2, top2_3, top2_4],
        category: "Women",
        subCategory: "Topwear",
        // subCategory: "Top",
        sizes: ["M", "L", "XL"],
        date: 1716634345448,
        bestseller: false,
    },
    {
        _id: "n",
        name: "Active Lightweight Long Sleeve Top",
        description: "Level up your workout with our active long sleeve top. Designed to feel lightweight to allow your body to move freely, this top also features thumb-hole detailing to the cuffs.",
        price: 20,
        image: [top3_1, top3_2, top3_3, top3_4],
        category: "Women",
        subCategory: "Topwear",
        // subCategory: "Top",
        sizes: ["M", "L", "XL"],
        date: 1716634345448,
        bestseller: true,
    },
]


