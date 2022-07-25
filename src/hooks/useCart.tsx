import { useMemo, useState, useContext, createContext, ReactNode } from 'react'
import { coffees } from '../assets/coffees/coffee'

export type ICartItem = {
  id: string
  coffeeId: string
  quantity: number
  unityPrice: number
  totalPrice: number
}

type ContextData = {
  cart: ICartItem[]
  subTotal: number
  totalOrder: number

  resetCart: () => void
  addItemToCart: (id: string) => void
  removeItemFromCart: (id: string) => void
  increaseCoffeeQuantityByOne: (id: string) => void
  decreaseCoffeeQuantityByOne: (id: string) => void
}

export type ProviderProps = {
  children: ReactNode
}

const CartContext = createContext({} as ContextData)

export const FEES = 3.95
export function CartProvider({ children }: ProviderProps) {
  const [cart, setCart] = useState<ICartItem[]>([])

  function checkHasProductInCart(id: string) {
    const coffee = cart.find((item) => item.coffeeId === id)
    return coffee
  }

  function increaseCoffeeQuantityByOne(id: string) {
    const updatedCart = cart.map((coffee) => {
      if (coffee.coffeeId === id) {
        if (coffee.quantity === 5) {
          return coffee
        }

        const quantity = coffee.quantity + 1
        const totalPrice = coffee.unityPrice * quantity
        return {
          ...coffee,
          quantity,
          totalPrice,
        }
      }

      return coffee
    })

    setCart(updatedCart)
  }

  function addItemToCart(id: string) {
    const coffee = checkHasProductInCart(id)
    if (coffee) {
      return increaseCoffeeQuantityByOne(id)
    }

    const coffeePrice = coffees.find((coffee) => coffee.id === id)?.price

    setCart((prev) => [
      ...prev,
      {
        id: `item-${id}-${Date.now()}`,
        quantity: 1,
        coffeeId: id,
        unityPrice: coffeePrice ?? 0,
        totalPrice: coffeePrice ?? 0,
      },
    ])
  }

  function removeItemFromCart(id: string) {
    const updatedCart = cart.filter((item) => item.id !== id)

    setCart(updatedCart)
  }

  function decreaseCoffeeQuantityByOne(id: string) {
    const updatedCart = cart.map((coffee) => {
      if (coffee.coffeeId === id) {
        if (coffee.quantity === 1) {
          return coffee
        }

        const quantity = coffee.quantity - 1
        const totalPrice = coffee.unityPrice * quantity

        return {
          ...coffee,
          quantity,
          totalPrice,
        }
      }

      return coffee
    })

    setCart(updatedCart)
  }

  function resetCart() {
    setCart([])
  }

  const subTotal = useMemo(() => {
    const value = cart.reduce((acc, curr) => {
      const temp = acc + curr.totalPrice
      return temp
    }, 0)

    return value
  }, [cart])

  const totalOrder = subTotal + FEES

  return (
    <CartContext.Provider
      value={{
        cart,
        subTotal,
        totalOrder,
        resetCart,
        addItemToCart,
        removeItemFromCart,
        increaseCoffeeQuantityByOne,
        decreaseCoffeeQuantityByOne,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
