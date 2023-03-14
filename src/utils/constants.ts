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
const categories: string[] = ['Category1', 'Category2', 'Category2', 'Category2', 'Category2', 'Category2', 'Category2', 'Category2', 'Category2'];
const brands: string[] = ['Brand1', 'Brand2', 'Brand2', 'Brand2', 'Brand2', 'Brand2', 'Brand2', 'Brand2', 'Brand2'];
export { languages, currencies, categories, brands };