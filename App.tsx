import React, { useState } from 'react';
import FormField from './components/FormField';
import Tabledata from './components/Tabledata';
import { Iface } from './Interfaces';

const App = () => {
  const [arr, setArr] = useState<Iface[]>([]);

  const Submit = (emp: Iface): any => {
    console.log(emp);

    setArr([...arr, emp]);
  };

  return (
    <div>
      <div className="App">
        <FormField submit={Submit} />
      </div>
      <div>
        <Tabledata arr={arr} />
      </div>
    </div>
  );
};

export default App;
