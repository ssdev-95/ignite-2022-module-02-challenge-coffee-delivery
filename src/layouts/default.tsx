import { Outlet } from 'react-router-dom'
import { Container, useTheme } from '@chakra-ui/react'
import { Header } from '../components/header'

export function DefaultLayout() {
  const theme = useTheme()

  return (
    <Container
      as="div"
      bg={theme.colors.base.bg}
      minHeight="100vh"
      maxWidth="100vw"
      px={0}
      scrollBehavior="smooth"
    >
      <Header />
      <Outlet />
    </Container>
  )
}
