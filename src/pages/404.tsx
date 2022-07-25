import {
  Box,
  Flex,
  Text,
  Link,
  Image,
  HStack,
  VStack,
  Heading,
  useTheme,
  Container,
} from '@chakra-ui/react'

import { SmileySad } from 'phosphor-react'

import Deliver from '../assets/img/deliver-illustration.svg'

export function NotFound() {
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
            Houston, we have a problem!
          </Heading>

          <Text color={theme.colors.base.text}>
            Things just got out of hand...
          </Text>

          <Box
            display="inline-block"
            mt={12}
            px={6}
            pt={6}
            pb={12}
            borderWidth={1}
            borderRadius="6px 32px 6px 32px"
            borderColor={theme.colors.purple.medium}
            w="full"
          >
            <HStack alignItems="flex-start" justifyContent="space-between">
              <VStack alignItems="flex-start" h="full">
                <Text as="strong" fontSize="md" color={theme.colors.base.text}>
                  If you think this was a mistake,
                </Text>

                <Text as="strong" fontSize="md" color={theme.colors.base.text}>
                  Contact us at &nbsp;
                  <Link
                    as="a"
                    href="https://google.com.br"
                    target="_blank"
                    rel="external"
                  >
                    Github
                  </Link>
                  .
                </Text>
              </VStack>

              <SmileySad
                size={64}
                weight="duotone"
                color={theme.colors.purple.dark}
              />
            </HStack>
          </Box>
        </VStack>

        <Image src={Deliver} w={400} alt="A guy in motorcycle" />
      </Flex>
    </Container>
  )
}
