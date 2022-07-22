import { HTMLAttributes } from 'react'

import { Text, Button, HStack, useTheme } from '@chakra-ui/react'

type PaymentTypeProps = HTMLAttributes<HTMLButtonElement> & {
  title: string
}

export function PaymentType({ title, children, ...props }: PaymentTypeProps) {
  const theme = useTheme()

  return (
    <Button
      variant="ghost"
      p={3}
      w="full"
      rounded="sm"
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
      _before={{
        borderRadius: '8px',
      }}
      {...props}
    >
      <HStack alignItems="center" h="full">
        {children}

        <Text
          fontSize="xs"
          lineHeight={0.9}
          fontWeight={400}
          textTransform="uppercase"
          color={theme.colors.base.text}
        >
          {title}
        </Text>
      </HStack>
    </Button>
  )
}
