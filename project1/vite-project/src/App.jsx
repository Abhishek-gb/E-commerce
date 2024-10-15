import React from 'react'
import Navbar from './componetes/Navbar'
import Cards from './pages/Cards'
import Fashion from './componetes/Fashion'
import {Routes,Route} from 'react-router-dom'
import Home from './componetes/Home'
import Accessories from './componetes/Accessories'
import Electronics from './componetes/Electronics'
import Grocery from './componetes/Grocery'


function App() {
  return (
    <div>
      <Routes>
     <Route  path='/' element={<Home/>}/>
     <Route  path='/Fashion' element={<Fashion/>}/>
     <Route  path='/Accessories' element={<Accessories/>}/>
     <Route  path='/Electronics' element={<Electronics/>}/>
     <Route  path='/Grocery' element={<Grocery/>}/>
      </Routes>
    </div>
  )
}

export default App