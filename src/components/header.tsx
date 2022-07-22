import {
  Container,
  Text,
  HStack,
  Flex,
  Spacer,
  Box,
  IconButton,
} from '@chakra-ui/react'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Logo } from './logo'

export function Header() {
  return (
    <Container as="header" width="1100px" maxWidth="100vw" py="1.5rem">
      <Flex>
        <Logo />
        <Spacer />
        <HStack
          bg={(theme) => theme.colors.purple.light}
          px={2}
          borderRadius={8}
          color={(theme) => theme.colors.purple.medium}
        >
          <MapPin size={24} weight="fill" />

          <Text>Manaus, AM</Text>
        </HStack>
        <IconButton
          bg={(theme) => theme.colors.yellow.light}
          color={(theme) => theme.colors.yellow.dark}
          ml={4}
          icon={<ShoppingCart size={24} weight="fill" />}
        />
      </Flex>
    </Container>
  )
}
