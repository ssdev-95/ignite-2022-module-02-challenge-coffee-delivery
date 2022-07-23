import {
  Box,
  Flex,
  Text,
  Image,
  Badge,
  HStack,
  VStack,
  Heading,
  useTheme,
  Container,
} from '@chakra-ui/react'

import { Timer, MapPin, CurrencyDollar } from 'phosphor-react'

import Deliver from '../assets/img/deliver-illustration.svg'

export function SucceedOrder() {
  const theme = useTheme()

  return (
    <Container as="main" mb={12} pt={12} w="1100px" maxW="100vw">
      <Flex
        gap={{ base: 14, md: 4 }}
        direction={{
          base: 'column',
          md: 'row',
        }}
      >
        <VStack flex={1} alignItems="flex-start">
          <Heading color={theme.colors.yellow.dark}>
            Uhuuuu! Order succeeded
          </Heading>

          <Text color={theme.colors.base.text}>
            Now just wait, your coffee will reach you anytime soon..
          </Text>

          <Box
            display="inline-block"
            mt={12}
            p={6}
            borderWidth={1}
            borderRadius="6px 32px 6px 32px"
            borderColor={theme.colors.purple.medium}
            w="full"
          >
            <HStack my={4}>
              <Badge bg={theme.colors.purple.medium} p={2} rounded="full">
                <MapPin size={24} color="white" />
              </Badge>

              <VStack justifyContent="center" alignItems="flex-start">
                <Text lineHeight={1}>
                  Deliver at&nbsp;
                  <Text as="strong">Limoeiro St., 102</Text>
                </Text>
                <Text lineHeight={1}>Barreirinha - Saint Katherine, RS</Text>
              </VStack>
            </HStack>

            <HStack my={4}>
              <Badge p={2} rounded="full" bg={theme.colors.yellow.medium}>
                <Timer size={24} color="white" />
              </Badge>

              <VStack justifyContent="center" alignItems="flex-start">
                <Text lineHeight={1}>Deliver preview</Text>

                <Text as="strong" lineHeight={1}>
                  20min ~ 30min
                </Text>
              </VStack>
            </HStack>

            <HStack my={4}>
              <Badge p={2} rounded="full" bg={theme.colors.yellow.dark}>
                <CurrencyDollar size={24} color="white" />
              </Badge>

              <VStack justifyContent="center" alignItems="flex-start">
                <Text lineHeight={1}>Pay on deliver</Text>

                <Text as="strong" lineHeight={1}>
                  Credit card
                </Text>
              </VStack>
            </HStack>
          </Box>
        </VStack>

        <Image src={Deliver} w={400} alt="A guy in motorcycle" />
      </Flex>
    </Container>
  )
}
