import { Routes, Route} from 'react-router-dom'
// import HeroSection from './components/HeroSection'
import Home from './components/Home'
// import  Home  from "./components/Home"
// import ContactUs from './components/ContactUs'
// import AboutPage from './components/AboutPage'
// import Services from './components/Services'




function App() {
 

  return (
    <>
    <Home/>

    <Routes> 
      

     
      {/* <Route path='/' element={<Home/>}/>
      <Route path='*' element={<Home/>}/>
      <Route path='/about'  element={<AboutPage/>}/>  */}
    
     {/* <Route path="/odoo-customization" element={<OodoCustom />} />
      <Route path="/odoo-products" element={<OodoProducts />} />
      <Route path="/odoo-integration" element={<OodoIntegration />} /> */}

   

      



      {/* <Route path="/services" element={<Services />} />
      

     
      <Route path='/contact' element={<ContactUs/>}/> */}
    
    </Routes>
  
    </>
  )
}

export default App
