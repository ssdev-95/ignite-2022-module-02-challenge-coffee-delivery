import { useEffect } from 'react'

import {
  Flex,
  Text,
  Grid,
  Input as ChakraInput,
  Image,
  Button,
  VStack,
  HStack,
  Divider,
  GridItem,
  useTheme,
  Container,
} from '@chakra-ui/react'

import {
  Plus,
  Bank,
  Money,
  Minus,
  MapPin,
  CreditCard,
  CurrencyDollar,
} from 'phosphor-react'

import { Input } from '../components/input'
import { PaymentType } from '../components/paymment-type-button'

import Americano from '../assets/coffees/americano.png'

export function Checkout() {
  useEffect(() => {
    document.title = 'Coffee Delivery | Checkout'
  }, [])

  const theme = useTheme()

  const cart = ['82hd', '29dj']

  return (
    <Container
			as="main"
			w={1100}
			maxW="100vw"
			pb={10}
		>
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
                  Perform payment upon deliver. Choose paymont form you desire.
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
                base: `"credit debit" "cash ."`,
                md: `"credit debit cash"`,
              }}
              gap={2}
            >
              <GridItem area="credit">
                <PaymentType title="Credit card">
                  <CreditCard size={20} color={theme.colors.purple.medium} />
                </PaymentType>
              </GridItem>

              <GridItem area="debit">
                <PaymentType title="Debit card">
                  <Bank size={20} color={theme.colors.purple.medium} />
                </PaymentType>
              </GridItem>

              <GridItem area="cash">
                <PaymentType title="Cash">
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

          <Container
            py={6}
            px={6}
            bg={theme.colors.base.card}
            borderRadius="8px 32px 8px 32px"
          >
            {cart.map((item) => (
              <>
                <HStack key={item} w="full" mb={4}>
                  <Image src={Americano} alt="americano coffee" />
                  <VStack flex={1} w="full" alignItems="flex-start">
                    <HStack w="full" justifyContent="space-between">
                      <Text>Americano</Text>
                      <Text as="strong">$ 9.90</Text>
                    </HStack>
                    <HStack w="fit-content">
                      <HStack h="fit-content">
                        <Flex
                          width="80px"
                          bg={theme.colors.base.button}
                          borderRadius={6}
                          alignItems="center"
                        >
                          <Button
                            left={0}
                            variant="ghost"
                            h={8}
                            width={6}
                            p={0}
                            bg="transprent"
                            size="xs"
                            color={theme.colors.purple.dark}
                            _active={{
                              color: theme.colors.purple.medium,
                            }}
                            _hover={{
                              color: theme.colors.purple.medium,
                            }}
                          >
                            <Minus size={8} />
                          </Button>

                          <ChakraInput
                            type="number"
                            borderWidth={0}
                            placeholder="00"
                            step={1}
                            flex={1}
                            h={8}
                            textAlign="center"
                            color={theme.colors.base.title}
                            _placeholder={{
                              color: theme.colors.base.subtitle,
                            }}
                            focusBorderColor="transparent"
                          />

                          <Button
                            left={0}
                            variant="ghost"
                            width={6}
                            h={8}
                            p={0}
                            bg="transprent"
                            size="xs"
                            color={theme.colors.purple.dark}
                            _active={{
                              color: theme.colors.purple.medium,
                            }}
                            _hover={{
                              color: theme.colors.purple.medium,
                            }}
                          >
                            <Plus size={8} />
                          </Button>
                        </Flex>
                      </HStack>

                      <Button
                        size="sm"
                        h={8}
                        bg={theme.colors.base.button}
                        borderWidth={2}
                        borderColor="transparent"
                        _hover={{
                          bg: theme.colors.purple.light,
                          borderColor: theme.colors.purple.medium,
                        }}
                        _active={{
                          bg: theme.colors.purple.light,
                          borderColor: theme.colors.purple.medium,
                        }}
                      >
                        <Text fontSize="sm" textTransform="uppercase">
                          remove
                        </Text>
                      </Button>
                    </HStack>
                  </VStack>
                </HStack>

                <Divider
                  orientation="horizontal"
                  size="md"
									mb={4}
                  bg={theme.colors.base.button}
                />
              </>
            ))}

	          <VStack mt={4}>
							<HStack
								w="full"
								alignItems="center"
								justifyContent="space-between"
							>
								<Text>Subtotal</Text>

								<Text>$ 19.80</Text>
							</HStack>

							<HStack
								w="full"
								alignItems="center"
								justifyContent="space-between"
							>
								<Text>Deliver fees</Text>

								<Text>$ 3.95</Text>
							</HStack>

							<HStack
								w="full"
								alignItems="center"
								justifyContent="space-between"
							>
									<Text
										as="strong"
										fontSize={24}
									>
										Order total
									</Text>
	

									<Text
										as="strong"
										fontSize={24}
									>
										$ 23.75
									</Text>
							</HStack>

							<Button
								bg={theme.colors.yellow.medium}
								color={theme.colors.white}
								w="full"
								h={12}
							>
								Confirm order
							</Button>
						</VStack>
					</Container>
        </VStack>
      </Flex>
    </Container>
  )
}
