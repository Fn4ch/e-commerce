import Layout from "../../components/layout"
import { GetServerSideProps, GetStaticProps } from "next"
import ProductList from "../../components/productList"
import { IProduct } from "../../types/IProduct"
import axios from "axios" 


export const getServerSideProps: GetServerSideProps = async () =>{

  const products = await axios.get('https://fakestoreapi.com/products').then(
    (resp)=>{
      return resp.data
      console.log(resp.data)
    }   
  )

  return{
    props: {products}
  }

}

export default function IndexPage({products}: any) {
  console.log(products)
  return (
    <Layout>
      <ProductList products={products}/>
    </Layout>
  )
}
