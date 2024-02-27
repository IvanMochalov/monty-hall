import { useMainLogic } from '@/hooks/useMainLogic'
import React from 'react'
import { ContainerBlock } from '../common/ContainerBlock'

export const HomePage = () => {
  useMainLogic()
  return (
    <ContainerBlock
      sx={{
        display: 'flex',
        width: '100%',
        height: 'calc(100vh - 2 * 56px)',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        p: 3,
      }}
    ></ContainerBlock>
  )
}
