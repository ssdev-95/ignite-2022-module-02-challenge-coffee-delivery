import { useEffect, useState, FormEvent, ChangeEvent } from 'react'

import {
  Flex,
  Text,
  Grid,
  VStack,
  HStack,
  GridItem,
  useTheme,
  Container,
} from '@chakra-ui/react'

import {
  Bank,
  Money,
  MapPin,
  SquaresFour,
  CreditCard,
  CurrencyDollar,
} from 'phosphor-react'

import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { TOAST_CONFIG } from '../pages/home'
import { Cart } from '../components/cart'
import { Input } from '../components/input'
import { PaymentType } from '../components/paymment-type-button'
import { ICartItem, useCart } from '../hooks/useCart'

import { useGeolocation, Address } from '../hooks/useGeolocation'

type PaymentTypes = 'credit' | 'debit' | 'cash' | 'pix'

export type OrderType = {
  address: Address & { complement?: string }
  items: ICartItem[]
  total: number
  paymentType: PaymentTypes
}

export function Checkout() {
  const navigate = useNavigate()
  const { address } = useGeolocation()
  const { cart, totalOrder, resetCart } = useCart()

  const [selectedPaymentType, setSelectedPaymentType] =
    useState<PaymentTypes>('pix')

  const [newOrder, setNewOrder] = useState<OrderType>({
    address,
    items: cart,
    total: Number(totalOrder.toFixed(2)),
  } as OrderType)

  useEffect(() => {
    document.title = 'Coffee Delivery | Checkout'
  }, [])

  const theme = useTheme()

  function togglePaymentType(type: PaymentTypes) {
    setSelectedPaymentType(type)
  }

  function handleInputTyping(evnt: ChangeEvent<HTMLInputElement>) {
    const { name, value } = evnt.target

    const order = {
      ...newOrder,
      address: {
        ...newOrder.address,
        [name]: value,
      },
    }

    setNewOrder(order)
  }

  function handleSendOrder(evnt: FormEvent<HTMLFormElement>) {
    evnt.preventDefault()

    if (!Object.values(newOrder.address).length) {
      toast.error('Cannot place order without a valid address', TOAST_CONFIG)

      return
    }

    const order: OrderType = {
      ...newOrder,
      items: cart,
      paymentType: selectedPaymentType,
      total: Number(totalOrder.toFixed(2)),
    }
    toast.success('Order successfully placed', TOAST_CONFIG)
    resetCart()
    setTimeout(() => {
      navigate('/succeed', { state: { order } })
    }, 4000)
  }

  return (
    <Container as="main" w={1100} maxW="100vw" pb={10}>
      <form onSubmit={handleSendOrder}>
        <Flex gap={8} direction={{ base: 'column', md: 'row' }}>
          <VStack spacing={8}>
            <Text
              as="strong"
              alignSelf="flex-start"
              color={theme.colors.base.title}
            >
              Finish order
            </Text>

            <Container p={6} rounded="md" bg={theme.colors.base.card}>
              <HStack alignItems="flex-start">
                <MapPin size={24} color={theme.colors.yellow.medium} />

                <VStack alignItems="flex-start" spacing={1}>
                  <Text color={theme.colors.base.subtitle} lineHeight={1.3}>
                    Deliver address
                  </Text>
                  <Text lineHeight={1.3} color={theme.colors.base.subtitle}>
                    Inform the address you wish to receive your order.
                  </Text>
                </VStack>
              </HStack>
              <Grid
                mt={8}
                w="full"
                gap={2}
                templateRows={{
                  base: 'repeat(5, 1fr)',
                  md: 'repeat(4, 1fr)',
                }}
                templateColumns={{
                  base: '37% 44% 16%',
                  md: '37% 48% 12%',
                }}
                templateAreas={{
                  base: `
								"cep cep cep"
								"str str number"
								"compl compl compl"
								"nbor nbor nbor"
								"city city uf"
							`,
                  md: `
								"cep . ."
								"str str str"
								"number compl compl"
								"nbor city uf"
							`,
                }}
              >
                <GridItem area="cep">
                  <Input
                    name="postalCode"
                    placeholder="CEP"
                    onChange={handleInputTyping}
                    defaultValue={address.postalCode}
                  />
                </GridItem>

                <GridItem area="str">
                  <Input
                    name="street"
                    placeholder="Street"
                    onChange={handleInputTyping}
                    defaultValue={address.street}
                  />
                </GridItem>

                <GridItem area="number">
                  <Input
                    name="houseNumber"
                    placeholder="Number"
                    onChange={handleInputTyping}
                    defaultValue={address.houseNumber}
                  />
                </GridItem>

                <GridItem area="compl">
                  <Input
                    name="complement"
                    placeholder="Complement"
                    onChange={handleInputTyping}
                    optional
                  />
                </GridItem>

                <GridItem area="nbor">
                  <Input
                    name="district"
                    placeholder="District"
                    onChange={handleInputTyping}
                    defaultValue={address.district}
                  />
                </GridItem>

                <GridItem area="city">
                  <Input
                    name="city"
                    placeholder="City"
                    onChange={handleInputTyping}
                    defaultValue={address.city}
                  />
                </GridItem>

                <GridItem area="uf">
                  <Input
                    name="stateCode"
                    placeholder="UF"
                    onChange={handleInputTyping}
                    defaultValue={address.stateCode}
                  />
                </GridItem>
              </Grid>
            </Container>

            <Container p={6} rounded="md" bg={theme.colors.base.card}>
              <HStack alignItems="flex-start">
                <CurrencyDollar size={24} color={theme.colors.purple.medium} />

                <VStack alignItems="flex-start" spacing={1}>
                  <Text color={theme.colors.base.subtitle} lineHeight={1.3}>
                    Payment
                  </Text>

                  <Text lineHeight={1.3} color={theme.colors.base.subtitle}>
                    Perform payment upon deliver. Choose payment type form you
                    desire.
                  </Text>
                </VStack>
              </HStack>

              <Grid
                mt={8}
                templateRows={{
                  base: 'repeat(2, 1fr)',
                  md: '1fr',
                }}
                templateColumns={{
                  base: 'repeat(2, 1fr)',
                  md: 'repeat(3, 1fr)',
                }}
                templateAreas={{
                  base: '"credit debit" "cash ."',
                  md: '"credit debit cash"',
                }}
                gap={2}
              >
                <GridItem area="credit">
                  <PaymentType
                    title="Credit card"
                    active={selectedPaymentType === 'credit'}
                    onClick={() => togglePaymentType('credit')}
                  >
                    <CreditCard size={20} color={theme.colors.purple.medium} />
                  </PaymentType>
                </GridItem>

                <GridItem area="debit">
                  <PaymentType
                    title="Debit card"
                    active={selectedPaymentType === 'debit'}
                    onClick={() => togglePaymentType('debit')}
                  >
                    <Bank size={20} color={theme.colors.purple.medium} />
                  </PaymentType>
                </GridItem>

                <GridItem area="cash">
                  <PaymentType
                    title="Cash"
                    active={selectedPaymentType === 'cash'}
                    onClick={() => togglePaymentType('cash')}
                  >
                    <Money size={20} color={theme.colors.purple.medium} />
                  </PaymentType>
                </GridItem>
                <GridItem>
                  <PaymentType
                    title="Pix"
                    active={selectedPaymentType === 'pix'}
                    onClick={() => togglePaymentType('pix')}
                  >
                    <SquaresFour
                      size={20}
                      color={theme.colors.purple.medium}
                      style={{
                        transform: 'rotate(45deg)',
                      }}
                    />
                  </PaymentType>
                </GridItem>
              </Grid>
            </Container>
          </VStack>

          <VStack pb={{ base: 10, md: 0 }}>
            <Text
              as="strong"
              alignSelf="flex-start"
              color={theme.colors.base.title}
            >
              Selected coffees
            </Text>

            <Cart />
          </VStack>
        </Flex>
      </form>
    </Container>
  )
}
