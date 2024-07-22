import React from 'react'
import { Routes , Route , BrowserRouter } from 'react-router-dom'
import Typesofmeditation from './Typesofmeditation/Typesofmeditation'
import ContactUs from './ContactUs/ContactUs'
import SignUp from './SignUp/Signup'
import SignInSide from './Stylecompo/SignInSide'
import Center from './Center/Center'
import Mindfulness from './Mindfulness/Mindfulness'
import Spritual from './Spritual/Spritual'
import Focusedmeditation from './Focusedmeditation/Focusedmeditation'
import Movementmeditation from './Movementmeditation/Movementmeditation'
import Mantrameditation from './Mantrameditation/Mantrameditation'
import Transcendentalmeditation from './Transcendentalmeditation/Transcendentalmeditation'
import Progressiverelaxation from './Progressiverelaxation/Progressiverelaxation'
import Lovingkindnessmeditation from './Lovingkindnessmeditation/Lovingkindnessmeditation'
import Visualizationmeditation from './Visualizationmeditation/Visualizationmeditation'

import Home from './Home/Home'
import Payment from './Payment/Payment'
import Shopping from './Shopping/Shopping'
import Demosignup from './Demosignup/Demosignup'
import Demosignin from './Demoignin/Demosignin.js'
import Timer from './Timer/Timer.js'


const App = () => {
  return (
    <div>
   <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/types' element={<Typesofmeditation/>}></Route>
            <Route path='/contact' element={<ContactUs/>}></Route>
          
           
            <Route path='/center' element={<Center/>}></Route>
           <Route path='/depresstion' element={<Mindfulness/>}></Route>
           <Route path='/mentalf' element={<Spritual/>}></Route>
           <Route path='/focus' element={<Focusedmeditation/>}></Route>
           <Route path='/backpain' element={<Movementmeditation/>}></Route>
           <Route path='/enhace' element={<Mantrameditation/>}></Route>
           <Route path='/reduce' element={<Transcendentalmeditation/>}></Route>
           <Route path='/muscle' element={<Progressiverelaxation/>}></Route>
           <Route path='/loving' element={<Lovingkindnessmeditation/>}></Route>
           <Route path='/visual' element={<Visualizationmeditation/>}></Route>
           <Route path='/shopping' element={<Shopping/>}></Route>
           <Route path='/payment' element={<Payment/>}></Route> 
           <Route path='/demosignup' element={<Demosignup/>}></Route>
           <Route path='/signin' element={<Demosignin/>}></Route>
           <Route path='/Timer' element={<Timer/>}></Route>
           

            </Routes>
   </BrowserRouter>   
    </div>
  )
}

export default App