import {
  Flex,
  Text,
  Image,
  Button,
  HStack,
  VStack,
  Divider,
  useTheme,
} from '@chakra-ui/react'

import { toast } from 'react-toastify'

import { TOAST_CONFIG } from '../pages/home'
import { Plus, Minus } from 'phosphor-react'
import { ICartItem, useCart } from '../hooks/useCart'
import { coffees } from '../assets/coffees/coffee'

type CartItemProps = {
  item: ICartItem
}

export function CartItem({ item }: CartItemProps) {
  const theme = useTheme()
  const {
    removeItemFromCart,
    increaseCoffeeQuantityByOne,
    decreaseCoffeeQuantityByOne,
  } = useCart()

  const coffee = coffees.find((coffeeItem) => coffeeItem.id === item.coffeeId)

  function handleRemoveFromCart() {
    removeItemFromCart(item.id)
    toast.success('Coffee removed from cart successfully', TOAST_CONFIG)
  }

  function handleIncreaseQuantity() {
    increaseCoffeeQuantityByOne(item?.coffeeId)
  }

  function handleDecreaseQuantity() {
    decreaseCoffeeQuantityByOne(item?.coffeeId)
  }

  return (
    <>
      <HStack w="full" mb={4}>
        <Image src={coffee?.image} alt="coffee boladaum" />

        <VStack flex={1} w="full" alignItems="flex-start">
          <HStack w="full" justifyContent="space-between">
            <Text>{coffee?.name}</Text>
            <Text as="strong">
              $&nbsp;
              {item?.unityPrice}
            </Text>
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
                  disabled={item?.quantity === 1}
                  onClick={handleDecreaseQuantity}
                >
                  <Minus size={8} />
                </Button>

                <Text
                  flex={1}
                  h="full"
                  textAlign="center"
                  color={theme.colors.base.text}
                >
                  {item?.quantity}
                </Text>

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
                  disabled={item?.quantity === 5}
                  onClick={handleIncreaseQuantity}
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
              onClick={handleRemoveFromCart}
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
  )
}
