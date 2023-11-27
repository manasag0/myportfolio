import {} from 'react'
// import {Outlet} from 'react-router-dom'
import Header from './components/headers/Header'
import Footer from './components/footers/Footer'
import Home from './components/home/Home'
import Skills from './components/Skills'
function Layout() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
      <Skills />
    </div>
  )
}

export default Layout
