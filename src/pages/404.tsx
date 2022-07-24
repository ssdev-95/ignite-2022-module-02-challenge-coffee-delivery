import {	
	Container,
	useTheme,
	Center,
	Text
} from '@chakra-ui/react'
export function NotFound() {
	const theme = useTheme()

	return (
		<Container
			flex={1}
			w="1100px"
			maxW="full"
			bg={theme.colors.base.bg}
		>
			<Center flex={1}>
				<Text as="strong" color={theme.colors.text}>	
					Deu ruim bródi.
				</Text>
			</Center>
		</Container>
	)
}
