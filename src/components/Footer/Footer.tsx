import React from 'react'
import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material'
import RestoreIcon from '@mui/icons-material/Restore'
import FavoriteIcon from '@mui/icons-material/Favorite'

export const Footer = () => {
  const [value, setValue] = React.useState(0)
  return (
    <Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_event, newValue) => {
          setValue(newValue)
        }}
      >
        <BottomNavigationAction label='Show' icon={<RestoreIcon />} />
        <BottomNavigationAction label='Statistics' icon={<FavoriteIcon />} />
      </BottomNavigation>
    </Box>
  )
}
