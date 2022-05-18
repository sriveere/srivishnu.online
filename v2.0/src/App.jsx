import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import WhatICanDo from './components/whatICanDo/WhatICanDo'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Workex from './components/workex/Workex'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Portfolio />
    <Services />
    <WhatICanDo />
    <Workex />
    <Contact />
    <Footer />
    </>
  )
}

export default App