import { Text, Button, HStack, VStack, Container } from '@chakra-ui/react'

import { CartItem } from './cart-item'

export function Cart() {
  const cartItems = ['82hd', '29dj']

  return (
    <Container
      py={6}
      px={6}
      bg={theme.colors.base.card}
      borderRadius="8px 32px 8px 32px"
    >
      {cartItems.map((item) => (
        <CartItem key={item} />
      ))}

      <VStack mt={4}>
        <HStack w="full" alignItems="center" justifyContent="space-between">
          <Text>Subtotal</Text>
          <Text>$ 19.80</Text>
        </HStack>

        <HStack w="full" alignItems="center" justifyContent="space-between">
          <Text>Deliver fees</Text>
          <Text>$ 3.95</Text>
        </HStack>

        <HStack w="full" alignItems="center" justifyContent="space-between">
          <Text as="strong" fontSize={24}>
            Order total
          </Text>
          <Text as="strong" fontSize={24}>
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
  )
}
