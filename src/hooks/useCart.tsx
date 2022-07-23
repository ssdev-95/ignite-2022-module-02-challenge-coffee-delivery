import {
	useState, useContext, createContext, ReactNode
} from 'react'
import { coffees } from '../assets/coffees/coffee'

export type ICartItem = {
	id:string
	coffeeId:string
	quantity:number
	unityPrice:number
	totalPrice:number
}

type ContextData = {
	cart: ICartItem[]

	addItemToCart: (id:string) => void
}

type ProviderProps = {
	children: ReactNode
}

const CartContext = createContext({})

export function CartProvider({
	children
}:ProviderProps) {
	const [cart, setCart] = useState<ICartItem[]>([])

	function checkHasProductInCart(id:string) {
		const coffee = cart.find(
			item => item.coffeeId === id
		)
		return coffee
	}

	function increaseCoffeeQuantityByOne(id:string) {
		const updatedCart = cart.map(coffee => {
			if(coffee.coffeeId === id) {
				const quantity = coffee.quantity + 1
				const totalPrice = coffee.unityPrice * quantity
				return {
					...coffee,
					quantity,
					totalPrice
				}
			}

			return coffee
		})

		setCart(updatedCart)
	}

	function addItemToCart(id:string) {
		const coffee = checkHasProductInCart(id)
		if(!!coffee) {
			if(coffee.quantity === 5) {
				return
			}

			return increaseCoffeeQuantityByOne(id)
		}

		const coffeePrice = coffees.find(
			coffee => coffee.id === id
		).price

		setCart(prev => [...prev, {
			id: `item-${id}-${Date.now()}`,
			quantity: 1,
			coffeeId: id,
			unityPrice: coffeePrice,
			totalPrice: coffeePrice
		}])
	}

	return (
		<CartContext.Provider value={{
			cart,
			addItemToCart
		}}>
			{children}
		</CartContext.Provider>
	)
}

export function useCart() {
	return useContext(CartContext)
}
