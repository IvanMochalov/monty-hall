import { COLORS, GRADIENTS } from '@/constants/ColorVariables'
import { SxProps } from '@mui/material'
import React from 'react'
import { ContainerBlock } from './ContainerBlock'

const ThemeContainerBlock = {
  gray: COLORS.Black10,
  black: COLORS.Black100,
  orange: GRADIENTS.Laf,
  white: COLORS.White100,
  lightGray: COLORS.Black5,
}

type Props = {
  sx?: SxProps
  children: React.ReactNode
  theme?: 'orange' | 'black' | 'white' | 'gray' | 'lightGray'
}

const ContainerBlockWithBorders: React.FC<Props> = ({
  sx,
  children,
  theme = 'white',
  ...props
}) => {
  return (
    <ContainerBlock
      sx={{
        borderRadius: '36px 36px 0 0',
        paddingBottom: '156px',
        marginTop: '-36px',
        background: ThemeContainerBlock[theme],
        ...sx,
      }}
      {...props}
    >
      {children}
    </ContainerBlock>
  )
}

export { ContainerBlockWithBorders }
