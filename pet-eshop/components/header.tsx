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
    <Box className={styles.header} sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color='transparent' sx={{boxShadow: 0, backdropFilter: 'blur(8px)'}}>
        <Toolbar sx={{mx:1, height: 60}}>   
          <Box sx={{flexGrow: 1}} display='flex' alignItems='center' flexDirection='row'>
            <Link href='/'><Typography mr={3} variant='h5'>Eshop</Typography></Link>
            <Link href='/products'><Typography mr={3} variant='h5'>products</Typography></Link>            
          </Box>
          {
          status === 'authenticated' ? 
          <IconButton
            aria-label="menu"
            onClick={toggleDrawer(true)}
            color='inherit'
          >         
          <Menu fontSize='large'/>             
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