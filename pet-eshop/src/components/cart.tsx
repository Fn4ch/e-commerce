import { Typography, Box, ListItem, List, IconButton } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';
import { IProduct } from '../types/IProduct';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { Delete } from '@mui/icons-material';
import { deleteProductFromCart } from '../store/reducers/cartSlice';


const Cart: React.FC = () => {

    const dispatch = useAppDispatch()
    const { products } = useAppSelector(state => state.cartReducer)
    
 
    const product = products.map(product => 
    <ListItem key={product.id}>
        <Image src={product.image} width={80} height={60}></Image>
        <Typography sx={{ml: 2}}>{product.title}</Typography>
        <Typography sx={{ml: 2}}flexGrow={1}>{product.price + ' $'}</Typography> 
        <IconButton onClick={ () => dispatch(deleteProductFromCart({...product})) }> 
            <Delete/> 
        </IconButton>     
    </ListItem>)

    if(product.length == 0){
        return(<Typography align='center' marginY={5} variant='h4'>Ваша корзина пуста</Typography>)
    }
    

    return(
        <List>
            {product}
        </List>
    )
}

export default Cart