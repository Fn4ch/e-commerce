import * as React from 'react'
import { IProduct } from '../types/IProduct'
import { Card, Stack, Typography, Grid, Box} from '@mui/material'
import styles from './styles/productItem.module.css'
import Image from 'next/image'

interface ProductItemProps{
    product: IProduct
}

const ProductItem: React.FC<ProductItemProps> = ({product}) =>{

    return(
        <Grid item spacing={1} p={2} className={styles.productItem} sx={{ml:1}}>
            <Card sx={{borderColor: 'blue', border: 'solid'}}>
                <Stack minWidth={240} minHeight={240} maxWidth={240} maxHeight={240}>
                    <Typography>{product.title}</Typography>
                        <img width={220} height={200} src={product.image}/>
                    <Typography>{product.price}</Typography>
                </Stack>
            </Card>
        </Grid>
    )
}

export default ProductItem