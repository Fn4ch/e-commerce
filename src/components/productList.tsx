import * as React from 'react'
import { IProduct } from '../types/IProduct'
import { Grid, Box} from '@mui/material'
import ProductItem from './productItem'

interface ProductListProps{
    products: IProduct[]
}


const ProductList: React.FC<ProductListProps> = React.memo(({products}) =>{

  return(
    <Grid container spacing={2} alignSelf='center' justifyContent='center'>
          {products.map(product => 
            <ProductItem
              key={product.id}
              product={product}
            />
            )
          }        
    </Grid> 
  )
})

export default ProductList