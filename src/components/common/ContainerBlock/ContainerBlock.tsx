import { Box, SxProps } from '@mui/material'
import React from 'react'

type Props = {
  sx?: SxProps
  children?: React.ReactNode
}

const ContainerBlock: React.FC<Props> = ({ sx, children, ...props }) => {
  return (
    <Box sx={{ ...sx }} {...props}>
      {children}
    </Box>
  )
}

export { ContainerBlock }
