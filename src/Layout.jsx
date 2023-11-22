import {} from 'react'
import {Outlet} from 'react-router-dom'
import Header from './components/headers/Header'
import Footer from './components/footers/Footer'
function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
