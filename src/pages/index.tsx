import Layout from "../components/layout"
import Link from "next/link"
import { Button, Typography, Box } from '@mui/material'
import { useRouter } from 'next/router'


export default function IndexPage() {

  const router = useRouter()
  return (
    <Layout>
      <Box display='flex' flexDirection='column'> 
        <Typography sx={{mt: 10}} variant='h4' align='center'>Интернет магазин Eshop</Typography>
        <Button variant='outlined' sx={{width: 120, my: 3, alignSelf: 'center'}} color='inherit' onClick={()=>{
          router.push('/products')
        }}>Товары</Button>
      </Box>
    </Layout>
  )
}
