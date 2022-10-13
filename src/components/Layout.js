import Navbar from './Navbar'
import Footer from './Footer'
// import shape1 from '../public/shape-1.svg'
import shape1 from '../../public/shape-1.svg'

export default function Layout({ children }) {
  return (
    <div className='pt-12 mx-6 md:mx-0 md:pt-0 md:flex md:flex-col md:min-h-screen'>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
