import { useEffect } from 'react'

import { Container, Box, Text, Flex, Heading, useTheme } from '@chakra-ui/react'

import { Coffee, coffees } from '../assets/coffees/coffee'
import { CoffeeCard } from '../components/coffee-card'
import CoffeCup from '../assets/img/coffee-bg.png'

import { useGeolocation } from '../hooks/useGeolocation'

import { toast, ToastOptions } from 'react-toastify'

export const TOAST_CONFIG: ToastOptions = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
}

export function Home() {
  const theme = useTheme()
  const { getGeolocation, address } = useGeolocation()

  useEffect(() => {
    document.title = 'Coffee Delivery | Home'

    if (!Object.keys(address).length) {
      if (navigator && 'geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          async (pos) => {
            toast.success('Granted location permissions', TOAST_CONFIG)
            await getGeolocation(pos.coords)
          },
          (error) => {
            if (error) {
              console.error(error)

              toast.error(error.message, TOAST_CONFIG)
            }
          }
        )
      }
    }
  }, [])

  return (
    <Container as="main" py={8} maxWidth="100vw">
      <Container
        as="div"
        width="1100px"
        maxWidth="100%"
        my={{ base: 10, md: 20 }}
      >
        <Flex direction={{ base: 'column', md: 'row' }}>
          <Box width={{ base: '100%', md: '50%' }}>
            <Heading
              as="h1"
              fontFamily="'Baloo 2', cursive"
              fontWeight="700"
              fontSize={48}
              textAlign={['center', 'start']}
              lineHeight={1.3}
              color={theme.colors.base.title}
            >
              Find the perfect coffee for every time.
            </Heading>
            <Text
              fontSize={16}
              textAlign={['center', 'start']}
              mt={4}
              color={theme.colors.base.subtitle}
            >
              With{' '}
              <Text as="span" color={theme.colors.purple.dark}>
                Coffee Delivery&trade;
              </Text>{' '}
              you receive you coffee wherever you may be, at any time.
            </Text>
          </Box>
          <Box mt={{ base: 10, md: 0 }}>
            <img
              src={CoffeCup}
              alt="A coffe cup with coffee grains at its side"
            />
          </Box>
        </Flex>
      </Container>
      <Container as="div" width="1100px" maxWidth="100%">
        <Heading
          as="h1"
          fontFamily="'Baloo 2', cursive"
          fontWeight="700"
          fontSize={30}
          lineHeight={1.3}
          textAlign="left"
          mb={10}
          color={theme.colors.base.title}
        >
          Our coffees
        </Heading>
        <Flex flexWrap="wrap" gap={10} justifyContent="flex-start">
          {coffees.map((coffee: Coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </Flex>
      </Container>
    </Container>
  )
}
