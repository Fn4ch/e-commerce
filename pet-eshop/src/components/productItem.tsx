import * as React from 'react'
import { IProduct } from '../types/IProduct'
import { Card, Button, Typography, Grid, Box, IconButton} from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'
import AddProductToCart from './addProductToCart'
import styles from './styles/productItem.module.css'

interface ProductItemProps{
    product: IProduct
}

const ProductItem: React.FC<ProductItemProps> = React.memo(({product}) =>{

    const router = useRouter()    

    const splittedTitle = product.title.split(' ', 10)
    const productTitleWith10Words = splittedTitle.join(' ')

    return(
            <Grid item p={2}>
                <Card sx={{boxShadow: 10}} >
                    <Button onClick={()=>router.push(`/products/${product.id}`)} color='inherit'>
                        <Box minWidth={300} minHeight={260} maxWidth={300} maxHeight={260} display='flex' flexDirection='column'> 
                                <Box alignSelf='center' marginY={2}>                   
                                    <Image src={product.image} className='nextImage' height='160vh' width='200vh' />
                                </Box>
                            <Typography  marginX={2}>{productTitleWith10Words}</Typography>                                      
                        </Box>
                    </Button>
                    <Box display='flex' alignSelf='flex-end' alignItems='center' justifyContent='space-around' marginX={1} marginBottom={1}>
                        <AddProductToCart {...product}/>
                        <Box sx={{flexGrow: 1}}/>
                        <Typography variant='h5' marginX={2} marginY={1} >{product.price + '    $'}</Typography>
                    </Box>  
                </Card>
            </Grid>
    )
})

export default ProductItem