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
        <Container sx={{justifyContent: 'center', mt: '65px'}}>
          {children}
        </Container>
      </main>
      <Footer />
    </>
  )
}
