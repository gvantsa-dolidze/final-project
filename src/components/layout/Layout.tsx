import Header from '../header_components/Header'
import Footer from '../footer_components/Footer'

const Layout = ({children}:any) => {
  return (
    <div>
        <Header />
        {children} 
        <Footer />
    </div>
  )
}

export default Layout