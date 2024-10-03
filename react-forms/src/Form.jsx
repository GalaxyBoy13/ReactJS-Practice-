import { useState } from "react";

export default function Form(){
    let [formData, setFormData] = useState({
        fullName: "",
        username: "",
        password: ""
    });

    let handleInputChange = (event) =>{
        setFormData( (currData) =>{
            return { ...currData, [event.target.name]: event.target.value};
        });
    };

    let handleSubmit = (event) =>{
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            username: "",
            password: ""
        })
    };

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">FullName</label>
            <input type="text" placeholder="enter your full name" value={formData.fullName} onChange={handleInputChange} id="fullName" name="fullName" />

            <br /><br />

            <label htmlFor="username">Username</label>
            <input type="text" placeholder="enter your username" value={formData.username} onChange={handleInputChange} id="username" name="username" />

            <br /><br />

            <label htmlFor="password">Password</label>
            <input type="password" placeholder="enter password" value={formData.password} onChange={handleInputChange} id="password" name="password" />

            <br /><br />

            <button>Submit</button>
        </form>
    );
}