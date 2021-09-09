import React, { useState } from 'react';
import FormField from './components/FormField';
import Tabledata from './components/Tabledata';
import { arrface, Iface } from './Interfaces';

const App = () => {
  const [arr, setArr] = useState<arrface[]>([]);

  const Submit = (emp: Iface): any => {
    console.log(emp);

    const newArr = { holdname: emp.name, holdProfile: emp.profile };

    setArr([...arr, newArr]);
  };

  return (
    <>
      <div className="App">
        <FormField submit={Submit} />
      </div>
      <div>
        <Tabledata arr={arr} />
      </div>
    </>
  );
};

export default App;
