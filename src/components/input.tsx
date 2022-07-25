import { InputHTMLAttributes } from 'react'

import {
  useTheme,
  InputGroup,
  InputRightElement,
  Input as ChakraInput,
} from '@chakra-ui/react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  optional?: boolean
}

export function Input({
  optional = false,
  defaultValue,
  ...props
}: InputProps) {
  const theme = useTheme()

  const showOptionalText = optional && !defaultValue

  return (
    <InputGroup>
      {showOptionalText && (
        <InputRightElement
          pointerEvents="none"
          color={theme.colors.base.label}
          fontSize="1rem"
          mr={8}
        >
          Optional
        </InputRightElement>
      )}

      <ChakraInput
        as="input"
        bg={theme.colors.base.input}
        color={theme.colors.base.text}
        _placeholder={{
          color: theme.colors.base.label,
        }}
        focusBorderColor={theme.colors.yellow.medium}
        {...props}
        size="md"
      />
    </InputGroup>
  )
}
