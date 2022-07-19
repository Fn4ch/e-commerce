import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from "next"
import axios from 'axios'
import { IProduct } from "../../types/IProduct"
import Layout from "../../components/layout"
import Product from '../../components/product'

interface ProductPageProps{
    product: IProduct
}

export const getStaticPaths: GetStaticPaths = async () => {
    const products = await axios.get('https://fakestoreapi.com/products')
    .then((res)=>{
        return res.data
    })

    const paths = products.map((product: IProduct)=>({params: {id: product.id.toString()}}))
    return{
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const product = await axios.get(`https://fakestoreapi.com/products/${params!.id}`).then(
        (res)=>{return res.data as IProduct[]}        
    )
    return{
        props: {
            product: product
        }
    }
}

const ProductPage: NextPage<ProductPageProps> = ({product}) =>{
    
    return(       
        <Layout>
            <Product {...product}/>
        </Layout> 
    )
}

export default ProductPage