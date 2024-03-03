import React from 'react'
import { TDoor } from '@/type'
import { Box, Grid, IconButton, Typography } from '@mui/material'
import DoorFrontIcon from '@mui/icons-material/DoorFront'
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom'
import { COLORS } from '@/constants/ColorVariables'
import { useAppDispatch } from '@/app/hooks'
import { selectedDoor } from '@/features/game/gameSlice'

interface IDoorListProps {
  list: TDoor[]
}

export const DoorList = ({ list }: IDoorListProps) => {
  const dispatch = useAppDispatch()
  const handleClickDoor = (count: number) => {
    dispatch(selectedDoor({ value: count }))
  }
  return (
    <Grid container>
      {list.map(({ count, present, isSelected, isOpen }) => {
        return (
          <Grid item xs={4} key={count}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <IconButton sx={{ padding: '32px' }} onClick={() => handleClickDoor(count)}>
                {isOpen ? (
                  <MeetingRoomIcon
                    sx={{
                      fontSize: '90px',
                      color: isSelected ? COLORS.Green100 : COLORS.White100,
                      transition: 'color 0.3s ease-in-out',
                    }}
                  />
                ) : (
                  <DoorFrontIcon
                    sx={{
                      fontSize: '90px',
                      color: isSelected ? COLORS.Green100 : COLORS.White100,
                      transition: 'color 0.3s ease-in-out',
                    }}
                  />
                )}
              </IconButton>
              <Typography>{count}</Typography>
              <Typography>{`present: ${present}`}</Typography>
              <Typography>{`isSelected: ${isSelected}`}</Typography>
              <Typography>{`isOpen: ${isOpen}`}</Typography>
            </Box>
          </Grid>
        )
      })}
    </Grid>
  )
}
