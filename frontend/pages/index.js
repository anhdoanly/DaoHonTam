import { Heading } from '@chakra-ui/react'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Heading>
          Chào mừng đến với Đảo Hòn Tằm
        </Heading>
      </main>
      <Footer />
    </>
  )
}
