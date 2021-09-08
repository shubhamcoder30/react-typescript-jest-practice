import React, { useState } from 'react'
import FormField from './components/FormField';
import Tabledata from './components/Tabledata';
import { arrface } from "./Interfaces";


const App = () => {
  const [arr, setArr] = useState<arrface[]>([]);


  return (
    <>
    <div className="App">
      <FormField arr={arr} setArr={setArr} />
      </div>
      <div>
   
      <Tabledata arr={arr} />
    </div>
    </>
  )
}

export default App
