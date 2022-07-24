import { useState } from 'react'

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

import { Bank, Money, MapPin, CreditCard, CurrencyDollar } from 'phosphor-react'

import { Cart } from '../components/cart'
import { Input } from '../components/input'
import { PaymentType } from '../components/paymment-type-button'

type PaymentTypes = 'credit' | 'debit' | 'cash'

export function Checkout() {
  const [selectedPaymentType, setSelectedPaymentType] =
    useState<PaymentTypes>('credit')

  useEffect(() => {
    document.title = 'Coffee Delivery | Checkout'
  }, [])

  const theme = useTheme()

  function togglePaymentType(type: PatmentTypes) {
    setSelectedPaymentType(type)
  }

  return (
    <Container as="main" w={1100} maxW="100vw" pb={10}>
      <Flex gap={8} direction={{ base: 'column', md: 'row' }}>
        <VStack space={8}>
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
                md: '38% 48% 11%',
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
                <Input placeholder="CEP" />
              </GridItem>

              <GridItem area="str">
                <Input placeholder="Street" />
              </GridItem>

              <GridItem area="number">
                <Input placeholder="Number" />
              </GridItem>

              <GridItem area="compl">
                <Input placeholder="Complemento" optional />
              </GridItem>

              <GridItem area="nbor">
                <Input placeholder="Bairro em ingles" />
              </GridItem>

              <GridItem area="city">
                <Input placeholder="City" />
              </GridItem>

              <GridItem area="uf">
                <Input placeholder="UF" />
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
    </Container>
  )
}
