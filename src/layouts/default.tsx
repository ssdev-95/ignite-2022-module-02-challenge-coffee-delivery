import { Outlet } from 'react-router-dom'
import { Container } from '@chakra-ui/react'
import { Header } from '../components/header'

export function DefaultLayout() {	
	return (
		<Container
			as="div"
			bg={(theme)=>theme.colors.base.bg}
			minHeight="100vh"
			maxWidth="100vw"
			px={0}
			scrollBehavior="smooth"
		>
			<Header />
			<Outlet />
		</ Container>
	)
}
