import { memo } from "react"
import Layout from "../../components/layout"
import { GetServerSideProps, GetStaticProps } from "next"
import ProductList from "../../components/productList"
import { IProduct } from "../../types/IProduct"
import { useState } from "react"
import { TextField, Box, Container } from "@mui/material"
import axios from "axios" 

interface IndexPageProps{
  products: IProduct
}


export const getServerSideProps: GetServerSideProps = async () =>{

  const products = await axios.get('https://fakestoreapi.com/products').then(
    (resp)=>{
      return resp.data
    }   
  )

  return{
    props: {products}
  }

}

const IndexPage= ({products}: any) => {

  const [searchQuery, setSearchQuery] = useState('')

  const filteredProducts = products.filter((product: { title: string }) => product.title.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <Layout>
      <Container sx={{mb: 3, mt: 5}}>
      <TextField fullWidth label='Поиск' variant='outlined' onChange={(e)=>{
        setSearchQuery(e.target.value)}        
      }></TextField>
      </Container>
      <ProductList products={filteredProducts}/>
    </Layout>
  )
}

export default IndexPage
