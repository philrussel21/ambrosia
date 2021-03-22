import React from 'react'
import { Container } from 'react-bootstrap'
import AppNav from './AppNav'
import Disclaimer from './Disclaimer'
import Footer from './Footer'

const App = () => {
  return (
    <div >
      <AppNav />
      <Container fluid="lg" className="main-cont">
        <Disclaimer />
      </Container>
      <Footer />
    </div>
  )
}

export default App
