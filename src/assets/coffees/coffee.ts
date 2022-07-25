import Americano from './americano.png'
import Arabe from './arabe.png'
import AuLatte from './coffee-au-latte.png'
import Capuccino from './capuccino.png'
import Cubano from './cubano.png'
import Expresso from './expresso.png'
import ExpressoCream from './expresso-cream.png'
import Havaiano from './havaiano.png'
import HotChocolatte from './hot-chocolatte.png'
import IcedCoffee from './iced-coffee.png'
import Ireland from './irlandes.png'
import Latte from './latte.png'
import Macchiatto from './macchiato.png'
import Mochaccino from './mochaccino.png'

type Category = 'standard' | 'milky' | 'alcoholic' | 'special' | 'iced'

export const coffees = [
  {
    name: 'American',
    description: 'Diluted Expresso, less intense than the default Expresso',
    price: 10.9,
    image: Americano,
    id: 'american-38d8',
    categories: ['standard'],
  },
  {
    name: 'Arabian',
    description: 'Drink made with arabian coffee grainsand spices',
    price: 35.56,
    image: Arabe,
    id: 'arabian-dh3i',
    categories: ['special'],
  },
  {
    name: 'Au Latte',
    description: 'Mixed half of default Expresso and half of vaporized milk',
    price: 18.9,
    image: AuLatte,
    id: 'au-latte-ir8g',
    categories: ['standard', 'milky'],
  },
  {
    name: 'Capuccino',
    description:
      'Drink with canela made with equal doses of coffee, milk and creamy foam',
    price: 8.9,
    image: Capuccino,
    id: 'capuccino-918j',
    categories: ['standard', 'milky'],
  },
  {
    name: 'Cuban',
    description: 'Iced drink made of Expresso coffee, rum, milk cream and mint',
    price: 7.56,
    image: Cubano,
    id: 'cuban-e77d',
    categories: ['special', 'alcoholic', 'iced'],
  },
  {
    name: 'Expresso',
    description: 'The default coffee, made with hot water and ground grains',
    price: 9.99,
    image: Expresso,
    id: 'expresso-8e7h',
    categories: ['standard'],
  },
  {
    name: 'Expresso Cream',
    description: 'Default Expresso coffee with creamy foam',
    price: 12.67,
    image: ExpressoCream,
    id: 'expresso-cream-2f8c',
    categories: ['standard'],
  },
  {
    name: 'Havaian',
    description: 'Sweetened drink made with coffee and coconut milk',
    price: 12.65,
    image: Havaiano,
    id: 'havaian-2r9l',
    categories: ['special'],
  },
  {
    name: 'Hot Chocolatte',
    description: 'Drink made with chocolate dissolved in hot milk and coffee',
    price: 3.45,
    image: HotChocolatte,
    id: 'hpt-choco-me7j',
    categories: ['special', 'milky'],
  },
  {
    name: 'Iced Coffee',
    description: 'Drink prepared with Expresso coffee and ice cubes',
    price: 7.5,
    image: IcedCoffee,
    id: 'iced-coffee-o28d',
    categories: ['standard', 'iced'],
  },
  {
    name: 'Ireland',
    description: 'Drink based on coffee, ireland whisky, sugar and chantilly',
    price: 14.6,
    image: Ireland,
    id: 'ireland-39rj',
    categories: ['special', 'alcoholic'],
  },
  {
    name: 'Latte',
    description: 'A dose of Expresso with twice the milk and creamy foam',
    price: 8.99,
    image: Latte,
    id: 'latte-o28s',
    categories: ['standard', 'milky'],
  },
  {
    name: 'Macchiatto',
    description: 'Expresso coffee mixed with hot water and foam',
    price: 16.75,
    image: Macchiatto,
    id: 'macchiatto-3r99',
    categories: ['standard', 'milky'],
  },
  {
    name: 'Mochaccino',
    description: 'Expresso coffee with chocolate syrup, low milk and foam',
    price: 11.89,
    image: Mochaccino,
    id: 'mochaccino-928r',
    categories: ['standard', 'milky'],
  },
]

export type Coffee = typeof coffees[0]
