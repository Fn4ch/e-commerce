import * as React from 'react'
import styles from './styles/header.module.css'
import { AppBar, Box, Toolbar, IconButton, Typography, Button, Badge, Menu} from '@mui/material'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import MenuIcon from '@mui/icons-material/Menu'
import { ShoppingCartOutlined } from '@mui/icons-material'
import DividerList from './dividerList'
import { useState } from 'react'
import { useSession, signIn } from 'next-auth/react'
import Link from 'next/link'
import { useAppSelector } from '../hooks/redux'

export default function Navbar() {
  
  const { data: session,  status } = useSession()

  const [open, setOpen] = useState(false)

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }  

  const {products, isLoading, error} = useAppSelector(state => state.cartReducer)

  const cartItems: number = products.length

  return (
    <header className={styles.header}>
      <AppBar position="fixed" color='transparent' sx={{boxShadow: 0, backdropFilter: 'blur(8px)'}}>
        <Toolbar sx={{mx:1, height: 60, alignItems: 'center'}}>   
          <Box sx={{flexGrow: 1}} display='flex' alignItems='inherit' flexDirection='row'>
            <Link href='/' as='/'><Button color='inherit' sx={{fontSize: 18, mr: 2}}>Eshop</Button></Link>
            <Link href='/products' as='/products'><Button color='inherit' sx={{fontSize: 18, mr: 2}}>products</Button></Link>            
          </Box>
          {
          status === 'authenticated' ? (
          <>
            <IconButton aria-label="cart" color='inherit' sx={{mx:1}}>    
              <Link href='/cart'>        
                <Badge badgeContent={cartItems}>
                  <ShoppingCartOutlined fontSize='large'/>
                </Badge>      
              </Link>     
            </IconButton>  
          <IconButton aria-label="menu" onClick={toggleDrawer(true)} color='inherit'>
            <MenuIcon fontSize='large'/>                        
          </IconButton> 
          </>         
          )          
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
    </header>
  )
}