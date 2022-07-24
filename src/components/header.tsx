import {
	Box,
	Flex,
  Text,
	Badge,
  HStack,
  Spacer,
	Center,
	useTheme,
	Container,
  IconButton
} from '@chakra-ui/react'

import { useNavigate } from 'react-router-dom'
import {
	MapPin, ShoppingCart, X as IconX
} from 'phosphor-react'
import { Logo } from './logo'
import { useCart } from '../hooks/useCart'
import { useGeolocation } from '../hooks/useGeolocation'

export function Header() {
	const theme = useTheme()
	const navigate = useNavigate()
	const { cart } = useCart()
	const { address } = useGeolocation()

	function handleGoToCart() {
		navigate('/checkout')
	}

  return (
    <Container
			as="header"
			width="1100px"
			maxWidth="100vw"
			py="1.5rem"
		>
      <Flex>
        <Logo />
        <Spacer />
        <HStack
          bg={theme.colors.purple.light}
          px={2}
          borderRadius={8}
          color={theme.colors.purple.medium}
					position="relative"
        >
          <MapPin size={24} weight="fill" />

          {!!Object.keys(address).length ? (
						<Text>
							{`${address.city}, ${address.stateCode}`}
						</Text>
					) : (
						<IconX
							color="red"
							weight="fill"
							size={32}

							style={{
								position:'absolute',
								right: 4
							}}
						/>
					)}
        </HStack>

				<Box position="relative">
	        <IconButton
		        bg={theme.colors.yellow.light}
			      color={theme.colors.yellow.dark}
				    ml={4}
					  icon={
							<ShoppingCart size={24} weight="fill" />
						}
						onClick={handleGoToCart}
					/>
					{!!cart.length && (
						<Badge
							bg={theme.colors.yellow.dark}
							size="sm"
							rounded="full"
							h={5}
							w={5}
							p={2}
							position="absolute"
							right={-2}
							top={-2}
						>
								<Center w="full" h="full">
								<Text
									fontSize="sm"
									color={theme.colors.white}
								>
									{cart.length}
								</Text>
							</Center>
						</Badge>
					)}
				</Box>
      </Flex>
    </Container>
  )
}
