import { useAppSelector } from '@/app/hooks'
import { selectDoors } from '@/features/game/gameSlice'
import { Typography } from '@mui/material'
import React from 'react'

export const MainTitle = () => {
  const list = useAppSelector(selectDoors)
  const isAllNotSelected = list.every(door => door.isSelected === false)
  console.log(isAllNotSelected)
  return <Typography></Typography>
}
