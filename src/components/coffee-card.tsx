import {
	Box,
	Text,
	Flex,
	Image,
	Badge,
	Input,
	Button,
	HStack,
	VStack,
	Spacer,
	Container,
	IconButton,
	NumberInput,
	NumberInputField,
	NumberInputStepper
} from '@chakra-ui/react'

import {
	ShoppingCartSimple,
	Plus
} from 'phosphor-react'
import { Coffee } from '../assets/coffees/coffee'

interface CoffeeProps {
	coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeProps) {
	return (
		<Container
			bg={(theme)=>theme.colors.base.card}
			width={256}
			height={310}
			borderRadius="8px 32px 8px 32px"
		>
			<Image
				src={coffee.image}
				boxSize={120}
				mx="auto"
				mt="-10%"
				mb={2}
				alt={coffee.name}
			/>
			<VStack spacing={2}>
				<Box mx="auto" width="fit-content">
					<HStack spacing={4}>
						<Badge
							bg={(theme)=>theme.colors.yellow.light}
							py={1}
							px={2}
							borderRadius={24}
						>
							<Text
								as="p"
								color={(theme)=>theme.colors.yellow.dark}
								my="auto"
							>
								standard
							</Text>
						</Badge>

						<Badge
							bg={(theme)=>theme.colors.yellow.light}
							py={1}
							px={2}
							borderRadius={24}
						>
							<Text
								as="p"
								color={(theme)=>theme.colors.yellow.dark}
								my="auto"
							>
								standard
							</Text>
						</Badge>
					</HStack>
				</Box>
				<Text
					as="h1"
					mx="auto"
					fontWeight={700}
					fontSize={20}
					fontFamily="'Baloo 2', cursive"
					color={(theme)=>theme.colors.base.text}
				>
					{coffee.name}
				</Text>
				<Text
					as="p"
					mx="auto"
					color={(theme)=>theme.colors.base.text}
				>
					Coffee du baum!
				</Text>
				<Spacer />
				<Spacer />
				<Box
					width="100%"
					mt={10}
				>
				<Flex alignItems="center">
					<Text
						as="strong"
						fontSize={32}
						fontFamily="'Baloo 2', cursive"
						fontWeight={900}
						color={(theme)=>theme.colors.base.text}
					>
						<Text
							as="span"
							fontFamily="'Roboto', sans-serif"
							fontSize={18}
							fontWeight={500}
						>
							$&nbsp;
						</Text>
						{coffee.price}
					</Text>
					<Spacer />
					<HStack>
						<Flex
							width="80px"
							bg={(theme)=>theme.colors.base.input}
							borderRadius={6}
							alignItems="center"
						>
							<Button
								left={0}
								variant="ghost"
								width={6}
								p={0}
								bg="transprent"
								size="xs"
								color={(theme)=>theme.colors.purple.dark}
								_active={{
									color:(theme)=>theme.colors.purple.medium
								}}
								_hover={{
									color:(theme)=>theme.colors.purple.medium
								}}
							>
								<Plus size={8} />
							</Button>

							<Input
								type="number"
								borderWidth={0}
								placeholder="00"
								step={1}
								flex={1}
								textAlign="center"
								color={(theme)=>theme.colors.base.title}
								_placeholder={{
									color: (theme)=>theme.colors.base.subtitle
								}}
								focusBorderColor="transparent"
							/>

							<Button
								left={0}
								variant="ghost"
								width={6}
								p={0}
								bg="transprent"
								size="xs"
								color={(theme)=>theme.colors.purple.dark}
								_active={{
									color:(theme)=>theme.colors.purple.medium
								}}
								_hover={{
									color:(theme)=>theme.colors.purple.medium
								}}
							>
								<Plus size={8} />
							</Button>
						</Flex>
						<IconButton
							aria-label="Add to chart button."
							bg={(theme)=>theme.colors.purple.dark}
							_hover={{
								bg:(theme)=>theme.colors.purple.medium
							}}
							color={(theme)=>theme.colors.white}
							icon={
								<ShoppingCartSimple
									size={24}
									weight="fill"
								/>
							}
						/>
					</HStack>
				</Flex>
				</Box>
			</VStack>
		</Container>
	)
}
