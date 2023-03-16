import eng from '../assets/USA.svg';
import esp from '../assets/ESP.svg';
import fra from '../assets/FRA.svg';
import por from '../assets/POR.svg';
import ger from '../assets/GER.svg';

const languages: {
    name: string;
    icon: string;
    id: number;
}[] = [{ name: 'ENG', icon: eng, id: 1 }, { name: 'ESP', icon: esp, id: 2 }, { name: 'FRA', icon: fra, id: 3 }, { name: 'POR', icon: por, id: 4 }, { name: 'GER', icon: ger, id: 5 }];
const currencies: { name: string, symbol: string; id: number; }[] = [{ name: 'USD', symbol: '$', id: 1 }, { name: 'EUR', symbol: '€', id: 2 }, { name: 'GBP', symbol: '£', id: 3 }, { name: 'RUB', symbol: '₽', id: 4 }, { name: 'JPY', symbol: '¥', id: 5 }];
// const categories: string[] = ['Category1', 'Category2', 'Category2', 'Category2', 'Category2', 'Category2', 'Category2', 'Category2', 'Category2'];
const brands: string[] = ['Brand1', 'Brand2', 'Brand2', 'Brand2', 'Brand2', 'Brand2', 'Brand2', 'Brand2', 'Brand2'];
const homeProductsFeatured: {
    name: string,
    category: string,
    isHot: boolean,
    discount: number,
    image: string[],
    rating: number,
    price: number,
}[] = [
        { name: 'Ultimate 3D Bluetooth Speaker', category: 'Speakers', discount: 20, image: ['https://i.ibb.co/XFDMHNQ/product-1.jpg', 'https://i.ibb.co/MkfWbFZ/product-1-2.jpg'], isHot: true, price: 59, rating: 4 }
        ,
        { name: 'Brown Women Casual HandBag', category: 'Ladies Bag', discount: 30, image: ['https://i.ibb.co/kgb6gSk/product-2.jpg', 'https://i.ibb.co/BPH3sqc/product-2-2.jpg'], isHot: true, price: 83, rating: 4 },
        { name: 'Circled Ultimate 3D Speaker', category: 'Speakers', discount: 0, image: ['https://i.ibb.co/hf710WP/product-3.jpg', 'https://i.ibb.co/LYLYD6c/product-3-2.jpg'], isHot: false, price: 49, rating: 4 },
        { name: 'Blue Backpack for the Young - S', category: 'Backpacks', discount: 40, image: ['https://i.ibb.co/8dwFqk3/product-4.jpg', 'https://i.ibb.co/Z2wJSvC/product-4-2.jpg'], isHot: true, price: 65, rating: 5 },
        { name: 'Casual Spring Blue Shoes', category: 'Shoes', discount: 15, image: ['https://i.ibb.co/tX9LHqG/product-5.jpg', 'https://i.ibb.co/NsRM8s3/product-5-2.jpg'], isHot: true, price: 73, rating: 2 }
    ];
const newArrival: {
    name: string,
    category: string,
    isHot: boolean,
    discount: number,
    image: string[],
    rating: number,
    price: number,
}[] = [{ category: "Belts", discount: 0, image: ['https://i.ibb.co/PY9S90F/product-6.jpg', 'https://i.ibb.co/VWRtsHk/product-6-2.jpg'], isHot: true, name: 'Men Black Gentle Belt', price: 88, rating: 2 }, { category: 'Shoes', discount: 0, image: ['https://i.ibb.co/7jvbjVX/product-7.jpg', 'https://i.ibb.co/D8mBdNf/product-7-2.jpg'], isHot: true, name: 'Brown-Black Men Casual Glasses', price: 75, rating: 5 }, { category: 'Glasses', discount: 20, image: ['https://i.ibb.co/bXXWRP3/product-8.jpg', 'https://i.ibb.co/W0M9dXp/product-8-2.jpg'], isHot: false, name: 'Brown-Black Men Casual Glasses', price: 79, rating: 3 }, { category: 'Glasses', discount: 30, image: ['https://i.ibb.co/S0wZtSd/product-9.jpg', 'https://i.ibb.co/jbVh9Yw/product-9-2.jpg'], isHot: false, name: 'Black Men Casual Glasses', price: 90, rating: 4 }, { category: 'Shoes', discount: 0, isHot: true, image: ['https://i.ibb.co/pfFx262/product-10.jpg', 'https://i.ibb.co/85pqq7F/product-10-2.jpg'], name: 'Basketball Sports Blue Shoes', price: 99, rating: 5 }];
const categories: {
    name: string,
    img: string,
    quantity: number;
}[] = [{ img: 'https://i.ibb.co/ZH6SJpF/category-1.jpg', name: 'Dress', quantity: 5 }, { img: 'https://i.ibb.co/8X54kLK/category-2.jpg', name: 'Shoes', quantity: 8 }, { img: 'https://i.ibb.co/F5fzD0p/category-3.jpg', name: 'Glasses', quantity: 10 }, { img: 'https://i.ibb.co/c3qdjg7/category-4.jpg', name: 'Backpack', quantity: 12 }, { img: 'https://i.ibb.co/CPW2347/category-5.jpg', name: 'Ladies Bag', quantity: 25 }, { img: 'https://i.ibb.co/Bgz25qh/category-6.jpg', name: 'Speaker', quantity: 17 }, { img: 'https://i.ibb.co/G77m2zT/category-7.jpg', name: 'Watches', quantity: 4 }, { img: 'https://i.ibb.co/wsQ9sqP/category-8.jpg', name: 'Machine', quantity: 1 }, { img: 'https://i.ibb.co/qrbQk2L/category-9.jpg', name: 'Sofa', quantity: 12 }, { img: 'https://i.ibb.co/FqMNrtJ/category-10.jpg', name: 'Headphone', quantity: 23 }];

export { languages, currencies, categories, brands, homeProductsFeatured, newArrival };

//
//
//
//
//
//
//
//
//
// 