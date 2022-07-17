import { useEffect } from 'react'

export function Home() {
  useEffect(() => {
    document.title = 'Coffe Delivery | Home'
  }, [])

  return <h1>Home</h1>
}
