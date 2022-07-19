import { IProduct } from "../types/IProduct"
import { Box, Typography, Button } from '@mui/material'
import Image from 'next/image'
import AddProductToCart from "./addProductToCart"
import { useRef } from "react"


const Product: React.FC<IProduct> = (product) => {

    const addProductRef = useRef()
    return(
        <Box width='lg' display='flex' flexDirection='column'>
                <Typography variant='h3' align='center' sx={{mb: 5}}>{product.title}</Typography>
                <Box justifyContent='center' display='flex' alignItems='flex-end'>                    
                    <Image src={product.image} layout='fixed' height={500} width={600} className='nextImage'></Image>
                    <Box sx={{ml: 3}}>
                        <Button>
                            <AddProductToCart {...product}/>                            
                        </Button>
                    </Box>
                </Box>
                <Typography variant='h4' sx={{mt:5, mb: 2}}>Описание</Typography>
                <Typography variant='h5' sx={{}}>{product.description}</Typography>
        </Box>
    )
}

export default Product