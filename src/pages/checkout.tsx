import { useEffect } from 'react'

import {
	Container,
	Text,
	VStack,
	HStack,
	useTheme
} from '@chakra-ui/react'

import {
	Bank, Money, MapPin, CreditCard, CurrencyDollar
} from 'phosphor-react'

export function Checkout() {
  useEffect(() => {
    document.title = 'Coffee Delivery | Checkout'
  }, [])

	const theme = useTheme()

  return (
		<Container as="main">
			<VStack space={2}>
				<Text
					as="strong"
					alignSelf="flex-start"
					color={theme.colors.base.title}
				>
					Finish him
				</Text>

				<Container
					p={6}
					rounded="md"
					bg={theme.colors.yellow.light}
				>
					<HStack alignItems="flex-start">
						<MapPin
							size={24}
							color={theme.colors.yellow.medium}
						/>

						<VStack
							alignItems="flex-start"
							spacing={1}
						>
							<Text
								color={theme.colors.base.subtitle}
								lineHeight={1.3}
							>
								Deliver address
							</Text>
							<Text
								lineHeight={1.3}
								color={theme.colors.base.subtitle}
							>
								Inform the address you wish to receive your order.
							</Text>
						</VStack>
					</HStack>
				</Container>

				<Container
					p={6}
					rounded="md"
					bg={theme.colors.yellow.light}
				>
					<HStack alignItems="flex-start">
						<CurrencyDollar
							size={24}
							color={theme.colors.purple.dark}
						/>

						<VStack
							alignItems="flex-start"
							spacing={1}
						>
							<Text
								color={theme.colors.base.subtitle}
								lineHeight={1.3}
							>
								Payment
							</Text>

							<Text
								lineHeight={1.3}
								color={theme.colors.base.subtitle}
							>
								Perform payment upon deliver. Choose paymont form you desire.
							</Text>
						</VStack>
					</HStack>

					<HStack flexWrap="wrap" spacing={4}>
					<HStack
						p={4}
						flex={1}
						rounded="sm"
						bg={theme.colors.base.card}
					>
						<CreditCard
							size={20}
							color={theme.colors.purple.medium}
						/>

						<Text
							fontSize="xs"
							textTransform="uppercase"
							color={theme.colors.base.subtitle}
						>
							Credit card
						</Text>
					</HStack>

					<HStack
						p={4}
						flex={1}
						rounded="sm"
						bg={theme.colors.base.card}
					>
						<Bank
							size={20}
							color={theme.colors.purple.medium}
						/>

						<Text
							fontSize="xs"
							textTransform="uppercase"
							color={theme.colors.base.subtitle}
						>
							Debit card
						</Text>
					</HStack>

					<HStack
						p={4}
						flex={1}
						rounded="sm"
						bg={theme.colors.base.card}
					>
						<Money
							size={20}
							color={theme.colors.purple.medium}
						/>

						<Text
							fontSize="xs"
							textTransform="uppercase"
							color={theme.colors.base.subtitle}
						>
							Cash
						</Text>
					</HStack>
					</HStack>
				</Container>
			</VStack>

			<VStack></VStack>
		</Container>
	)
}
