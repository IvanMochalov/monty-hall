import React from 'react'
import { ColorModeContext } from '@/app/App'
// import Button from '@mui/material/Button'
import { IconButton, useTheme, AppBar, Box, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

export const Header = () => {
  const colorMode = React.useContext(ColorModeContext)
  const theme = useTheme()
  return (
    <Box>
      <AppBar position='static'>
        <Toolbar>
          <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1, textAlign: 'center' }}>
            The Monty Hall Show
          </Typography>
          <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color='inherit'>
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          {/* <Button color='inherit'>Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
