import * as React from 'react'
import { IProduct } from '../types/IProduct'
import { Card, Stack, Typography, Grid, Box} from '@mui/material'
import styles from './styles/productItem.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'

interface ProductItemProps{
    product: IProduct
}

const ProductItem: React.FC<ProductItemProps> = ({product}) =>{

    const router = useRouter()

    return(
        <Grid item p={2} onClick={()=>router.push(`/products/${product.id}`)}>
            <Card className={styles.productItem} sx={{boxShadow: 10}}>
                <Stack minWidth={280} minHeight={280} maxWidth={280} maxHeight={280}>
                    <Typography variant='h6' marginX={2} marginY={1} >{product.title}</Typography>
                        <Image src={product.image} className='nextImage' layout='responsive' height={240} width={260} />
                    <Typography variant='h5' marginX={2} marginY={1} >{product.price + ' $'}</Typography>
                </Stack>
            </Card>
        </Grid>
    )
}

export default ProductItem