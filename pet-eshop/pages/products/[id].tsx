import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from "next"
import axios from 'axios'
import { IProduct } from "../../types/IProduct"
import {Box, Typography} from '@mui/material'
import Image from "next/image"
import Layout from "../../components/layout"

interface ProductPageProps{
    product: IProduct
}

export const getStaticPaths: GetStaticPaths = async () => {
    const products = await axios.get('https://fakestoreapi.com/products')
    .then((res)=>{
        return res.data
    })

    const paths = products.map((product: IProduct)=>({params: {id: product.id.toString()}}))
    console.log(products, 'getStaticPaths')
    return{
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const product = await axios.get(`https://fakestoreapi.com/products/${params!.id}`).then(
        (res)=>{return res.data as IProduct[]}        
    )
    console.log(product, 'getStaticProps')
    return{
        props: {
            product: product
        }
    }
}

const ProductPage: NextPage<ProductPageProps> = ({product}) =>{
    
    return(       
        <Layout>
            <Box width='lg' display='flex' flexDirection='column'>
                <Typography variant='h3' sx={{mb: 3}}>{product.title}</Typography>
                <Image src={product.image} layout='fixed' height={500} width={800} className='nextImage'></Image>
                <Typography variant='h4' sx={{mt:5, mb: 2}}>Описание</Typography>
                <Typography variant='h5' sx={{}}>{product.description}</Typography>
            </Box>
        </Layout> 
    )
}

export default ProductPage