import {
  Flex,
  Text,
  Input,
  Image,
  Button,
  HStack,
  VStack,
  Divider,
  useTheme,
} from '@chakra-ui/react'

import { Plus, Minus } from 'phosphor-react'
import Americano from '../assets/coffees/americano.png'

export function CartItem() {
  const theme = useTheme()

  return (
    <>
      <HStack w="full" mb={4}>
        <Image src={Americano} alt="americano coffee" />

        <VStack flex={1} w="full" alignItems="flex-start">
          <HStack w="full" justifyContent="space-between">
            <Text>Americano</Text>
            <Text as="strong">$ 9.90</Text>
          </HStack>

          <HStack w="fit-content">
            <HStack h="fit-content">
              <Flex
                width="80px"
                bg={theme.colors.base.button}
                borderRadius={6}
                alignItems="center"
              >
                <Button
                  left={0}
                  variant="ghost"
                  h={8}
                  width={6}
                  p={0}
                  bg="transprent"
                  size="xs"
                  color={theme.colors.purple.dark}
                  _active={{
                    color: theme.colors.purple.medium,
                  }}
                  _hover={{
                    color: theme.colors.purple.medium,
                  }}
                >
                  <Minus size={8} />
                </Button>

                <Input
                  type="number"
                  borderWidth={0}
                  placeholder="00"
                  defaultValue={0}
                  step={1}
                  flex={1}
                  h={8}
                  textAlign="center"
                  color={theme.colors.base.title}
                  _placeholder={{
                    color: theme.colors.base.subtitle,
                  }}
                  focusBorderColor="transparent"
                />

                <Button
                  left={0}
                  variant="ghost"
                  width={6}
                  h={8}
                  p={0}
                  bg="transprent"
                  size="xs"
                  color={theme.colors.purple.dark}
                  _active={{
                    color: theme.colors.purple.medium,
                  }}
                  _hover={{
                    color: theme.colors.purple.medium,
                  }}
                >
                  <Plus size={8} />
                </Button>
              </Flex>
            </HStack>

            <Button
              size="sm"
              h={8}
              bg={theme.colors.base.button}
              borderWidth={2}
              borderColor="transparent"
              _hover={{
                bg: theme.colors.purple.light,
                borderColor: theme.colors.purple.medium,
              }}
              _active={{
                bg: theme.colors.purple.light,
                borderColor: theme.colors.purple.medium,
              }}
            >
              <Text fontSize="sm" textTransform="uppercase">
                remove
              </Text>
            </Button>
          </HStack>
        </VStack>
      </HStack>

      <Divider
        orientation="horizontal"
        size="md"
        mb={4}
        bg={theme.colors.base.button}
      />
    </>
  )
}
