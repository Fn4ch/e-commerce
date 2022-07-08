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
        <Container sx={{justifyContent: 'center', width: 'lg',border : 'dashed', borderColor: 'blue'}}>
          {children}
        </Container>
      </main>
      <Footer />
    </>
  )
}
