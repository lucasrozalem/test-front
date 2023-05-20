import { Box, Flex, FlexProps } from '@chakra-ui/react'

export const Container = (props: FlexProps) => (
  <Flex
    justifyContent={['space-between', 'center']}
    h="100vh"
    //bg="#F5F5F5"
    // gap={'20px'}
    flexDir={['column', 'row']}
    {...props}
  />
)
