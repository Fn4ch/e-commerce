import * as React from 'react'
import styles from './styles/header.module.css'
import { AppBar, Box, Toolbar, IconButton, Typography, Button} from '@mui/material'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { Menu } from '@mui/icons-material'
import DividerList from './dividerList'
import { useState } from 'react'
import { useSession, signIn } from 'next-auth/react'
import Link from 'next/link'

export default function Navbar() {
  
  const { data: session,  status } = useSession()

  const [open, setOpen] = useState(false)

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>   
          <Box sx={{flexGrow: 1}}>
            <Link href='/' className='link'>Доставка еды</Link> 
          </Box>
          {
          status === 'authenticated' ? 
          <IconButton
            aria-label="menu"
            sx={{ ml: 2 }}
            onClick={toggleDrawer(true)}
            color='inherit'
          >         
          <Menu fontSize='large' />             
          </IconButton>
          : 
          <Button color='inherit' onClick={()=>signIn()}>Sign In</Button>
          }        

        </Toolbar>
      </AppBar>      

      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        disableSwipeToOpen={false}
      >
        <DividerList {...session?.user}/>
      </SwipeableDrawer>
    </Box>
  )
}