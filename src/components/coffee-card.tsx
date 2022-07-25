import {
  Box,
  Text,
  Flex,
  Image,
  Badge,
  Button,
  HStack,
  VStack,
  Spacer,
  useTheme,
  Container,
  IconButton,
} from '@chakra-ui/react'

import { toast } from 'react-toastify'
import { ShoppingCartSimple, Minus, Plus } from 'phosphor-react'

import { TOAST_CONFIG } from '../pages/home'
import { Coffee } from '../assets/coffees/coffee'
import { useCart } from '../hooks/useCart'

interface CoffeeProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const theme = useTheme()
  const {
    cart,
    addItemToCart,
    increaseCoffeeQuantityByOne,
    decreaseCoffeeQuantityByOne,
  } = useCart()

  function handleAddToCart() {
    addItemToCart(coffee.id)
    toast.success('Coffee added to cart successfully', TOAST_CONFIG)
  }

  function handleIncreaseQuantity() {
    increaseCoffeeQuantityByOne(coffee.id)
  }

  function handleDecreaseQuantity() {
    decreaseCoffeeQuantityByOne(coffee.id)
  }

  const cartCoffee = cart.find((item) => item.coffeeId === coffee.id)

  return (
    <Container
      bg={theme.colors.base.card}
      width={256}
      height={310}
      borderRadius="8px 32px 8px 32px"
    >
      <Image
        src={coffee?.image}
        boxSize={120}
        mx="auto"
        mt="-10%"
        mb={2}
        alt={coffee?.name}
      />
      <VStack spacing={2}>
        <Box mx="auto" width="full">
          <HStack w="full" spacing={2}>
            {coffee.categories.map((category) => (
              <Badge
                bg={theme.colors.yellow.light}
                py={1}
                px={3}
                mx="auto"
                flex={coffee?.categories.length > 1 ? 1 : 0.5}
                rounded="sm"
                key={category}
              >
                <Text
                  as="p"
                  color={theme.colors.yellow.dark}
                  my="auto"
                  mx="auto"
                  h="full"
                  textAlign="center"
                >
                  {category}
                </Text>
              </Badge>
            ))}
          </HStack>
        </Box>
        <Text
          as="h1"
          mx="auto"
          fontWeight={700}
          fontSize={20}
          fontFamily="'Baloo 2', cursive"
          color={theme.colors.base.text}
        >
          {coffee?.name}
        </Text>
        <Text
          as="p"
          mx="auto"
          textAlign="center"
          color={theme.colors.base.text}
        >
          {coffee?.description}
        </Text>
        <Spacer />
        <Spacer />
        <Box width="100%" mt={10}>
          <Flex alignItems="center">
            <Text
              as="strong"
              fontSize={32}
              fontFamily="'Baloo 2', cursive"
              fontWeight={900}
              color={theme.colors.base.text}
            >
              <Text
                as="span"
                fontFamily="'Roboto', sans-serif"
                fontSize={18}
                fontWeight={500}
              >
                $&nbsp;
              </Text>
              {coffee?.price ?? '0.00'}
            </Text>
            <Spacer />
            <HStack>
              <Flex
                width="80px"
                bg={theme.colors.base.input}
                borderRadius={6}
                alignItems="center"
                filter={`brightness(${!cartCoffee ? 0.85 : 1})`}
              >
                <Button
                  left={0}
                  variant="ghost"
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
                  disabled={!cartCoffee}
                  cursor={!cartCoffee ? 'not-allowed' : 'pointer'}
                  onClick={handleDecreaseQuantity}
                >
                  <Minus size={8} />
                </Button>

                <Text
                  h="full"
                  flex={1}
                  textAlign="center"
                  color={theme.colors.base.text}
                >
                  {cartCoffee?.quantity ?? 0}
                </Text>

                <Button
                  left={0}
                  variant="ghost"
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
                  cursor={!cartCoffee ? 'not-allowed' : 'pointer'}
                  disabled={!cartCoffee}
                  onClick={handleIncreaseQuantity}
                >
                  <Plus size={8} />
                </Button>
              </Flex>
              <IconButton
                aria-label="Add to chart button."
                bg={theme.colors.purple.dark}
                _hover={{
                  bg: theme.colors.purple.medium,
                }}
                color={theme.colors.white}
                icon={<ShoppingCartSimple size={24} weight="fill" />}
                onClick={handleAddToCart}
              />
            </HStack>
          </Flex>
        </Box>
      </VStack>
    </Container>
  )
}
