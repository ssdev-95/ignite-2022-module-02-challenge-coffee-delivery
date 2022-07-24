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

export const coffees = [
  { name: 'American', price: 10.9, image: Americano, id: 'american-38d8' },
  { name: 'Arabian', price: 35.56, image: Arabe, id: 'arabian-dh3i' },
  { name: 'Au Latte', price: 18.9, image: AuLatte, id: 'au-latte-ir8g' },
  { name: 'Capuccino', price: 8.9, image: Capuccino, id: 'capuccino-918j' },
  { name: 'Cuban', price: 7.56, image: Cubano, id: 'cuban-e77d' },
  { name: 'Expresso', price: 9.99, image: Expresso, id: 'expresso-8e7h' },
  {
    name: 'Expresso Cream',
    price: 12.67,
    image: ExpressoCream,
    id: 'expresso-cream-2f8c',
  },
  { name: 'Havaian', price: 12.65, image: Havaiano, id: 'havaian-2r9l' },
  {
    name: 'Hot Chocolatte',
    price: 3.45,
    image: HotChocolatte,
    id: 'hpt-choco-me7j',
  },
  {
    name: 'Iced Coffer',
    price: 7.5,
    image: IcedCoffee,
    id: 'iced-coffee-o28d',
  },
  { name: 'Ireland', price: 14.6, image: Ireland, id: 'ireland-39rj' },
  { name: 'Latte', price: 8.99, image: Latte, id: 'latte-o28s' },
  {
    name: 'Macchiatto',
    price: 16.75,
    image: Macchiatto,
    id: 'macchiatto-3r99',
  },
  {
    name: 'Mochaccino',
    price: 11.89,
    image: Mochaccino,
    id: 'mochaccino-928r',
  },
]

export type Coffee = typeof coffees[0]
