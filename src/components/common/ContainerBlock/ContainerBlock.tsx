import { COLORS } from '@/constants/ColorVariables'
import { Box, SxProps } from '@mui/material'
import React from 'react'

type Props = {
  sx?: SxProps
  children?: React.ReactNode
}

const ContainerBlock: React.FC<Props> = ({ sx, children, ...props }) => {
  return (
    <Box sx={{ padding: '120px 60px', backgroundColor: COLORS.White100, ...sx }} {...props}>
      {children}
    </Box>
  )
}

export { ContainerBlock }
