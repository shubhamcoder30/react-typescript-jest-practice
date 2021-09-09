import React, { useState } from 'react';
import { Iface, props } from '../Interfaces';

const initialstate: Iface = {
  name: '',
  profile: ''
};

const FormField = ({ submit }: props) => {
  const [emp, setEmp] = useState(initialstate);

  const handleChange = (e: any): void => {
    if (e.target.name === 'name') {
      setEmp(prevEmp => {
        return {
          ...prevEmp,
          name: e.target.value
        };
      });
    } else if (e.target.name === 'profile') {
      setEmp(prevEmp => {
        return {
          ...prevEmp,
          profile: e.target.value
        };
      });
    }
  };

  const onSubmit = () => {
    submit(emp);
  };

  return (
    <div className="form-field" data-testid="form">
      <div>
        <h2>Name </h2>
        <input
          type="text"
          placeholder="enter_name"
          name="name"
          value={emp.name}
          onChange={handleChange}
        />
        <h2>Profile</h2>
        <input
          type="text"
          placeholder="Profile"
          value={emp.profile}
          name="profile"
          onChange={handleChange}
        />
        <div>
          <button className="button" onClick={onSubmit}>
            show data
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormField;
