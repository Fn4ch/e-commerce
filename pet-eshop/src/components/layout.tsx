import Header from "./header"
import Footer from "./footer"
import { Container } from '@mui/material'

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />      
      <main>
        <Container maxWidth='xl' sx={{justifyContent: 'center', mt: '80px'}}>
          {children}
        </Container>
      </main>
      <Footer />
    </>
  )
}
