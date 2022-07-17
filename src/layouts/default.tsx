import { Outlet } from 'react-router-dom'
import { Container } from '@chakra-ui/react'
import { Header } from '../components/header'

export function DefaultLayout() {	
	return (
		<Container
			as="main"
			bg={(theme)=>theme.colors.base.bg}
			height="100vh"
			maxWidth="100vw"
			px={0}
		>
			<Header />
			<Outlet />
		</ Container>
	)
}
