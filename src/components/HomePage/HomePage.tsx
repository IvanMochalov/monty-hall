import React from 'react'
import { ContainerBlock } from '../common/ContainerBlock'
import { DoorList } from './blocks/DoorList'
import { useAppSelector } from '@/app/hooks'
import { selectDoors } from '@/features/game/gameSlice'
import { MainTitle } from './blocks/MainTitle'

export const HomePage = () => {
  const list = useAppSelector(selectDoors)

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
        p: '16px',
      }}
    >
      <MainTitle />
      <DoorList list={list} />
    </ContainerBlock>
  )
}
