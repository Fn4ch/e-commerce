import * as React from 'react'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import { Avatar, Typography, Stack, Divider, ListItem, ListItemText, List } from '@mui/material'

const style = {  
  maxWidth: 360,
  width: '100%',
  bgcolor: 'background.paper',
  mx: 2
};

const DividerList = (props: any) =>{
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">    
    <ListItem button divider>
      <Stack direction='row' alignItems='center'>
        <Avatar variant='circular' sx={{width: 60, height: 60}} src={props.image}/>
        <Typography sx={{mx:2}}>{props.name}</Typography>
      </Stack>
    </ListItem> 
      <ListItem button divider>
        <ListItemText primary="Заказы" />
      </ListItem>
      <Divider light />
      <ListItem button onClick={()=>signOut()}>
        <ListItemText primary="Выход" />
      </ListItem>
    </List>
  );
}

export default DividerList