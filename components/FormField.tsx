import React, { useState } from 'react'
import { Iface, props } from "../Interfaces";

const initialstate: Iface = {
    name: '',
    profile: ''
}


const FormField = ({ arr, setArr }: props) => {
    const [emp, setEmp] = useState(initialstate);



    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (e.target.name === "name") {
            setEmp(prevEmp => {
                return {
                    ...prevEmp,
                    name: e.target.value

                }
            })
        }
        else if (e.target.name === "profile") {

            setEmp(prevEmp => {
                return {
                    ...prevEmp,
                    profile: e.target.value

                }
            })
        }
    };

    const Submit = (event: any): void => {
        if (emp.name === "") {
            // window.alert("Please enter the name")
        }
        else if (emp.profile === "") {
            // window.alert(" Please enter the profile")
        }
        else {
            const newArr = { holdname: emp.name, holdProfile: emp.profile }

            setArr([...arr, newArr])
            setEmp(e => {

                return {
                    ...e,
                    name: "",
                    profile: ""
                }
            })

        }
    }


    return (
        <div className="form-field" data-testid="form">
            <div>

                <h2>Name </h2>
                <input type="text"
                    placeholder="enter_name"
                    name="name"
                    value={emp.name}
                    onChange={handleChange} />
                <h2>Profile</h2>
                <input type="text"
                    placeholder="Profile"
                    value={emp.profile}
                    name="profile"
                    onChange={handleChange} />
                <div>
                    <button className="button" onClick={Submit}>show data</button>

                </div>



            </div>
        </div>
    )
}

export default FormField;
