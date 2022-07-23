import { ChangeEvent, HTMLAttributes, useState } from 'react'

import {
  useTheme,
  InputGroup,
  InputRightElement,
  Input as ChakraInput,
} from '@chakra-ui/react'

type InputProps = HTMLAttributes<HTMLInputElement> & {
  optional?: boolean
}

export function Input({ optional = false, ...props }: InputProps) {
  const theme = useTheme()
  const [value, setValue] = useState('')

  function handleChange(e: ChangeEvent) {
    setValue(e.target.value)
  }

  const showOptionalText = optional && !value

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
        bg={theme.colors.base.input}
        color={theme.colors.base.text}
        onChange={handleChange}
        _placeholder={{
          color: theme.colors.base.label,
        }}
        focusBorderColor={theme.colors.yellow.medium}
        {...props}
      />
    </InputGroup>
  )
}
