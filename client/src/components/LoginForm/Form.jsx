import { useState } from "react";
import style from "./Form.module.css"
import validation from "./Validation";


const Form   = ({login}) => {

    const    [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    const[ errors, setErrors] =useState({});

    const handleChange = (event) =>{
        setErrors(
            validation({...userData, [event.target.name]: event.target.value}))
        setUserData({...userData, [event.target.name]: event.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login(userData)
    }

    return(
        <div className={style.container}>
            <form onSubmit={handleSubmit}>
                <div className={style.inputContainer}>
                <label>Email :</label>
                <input
                    type="text"
                    name="email"
                    placeholder="Enter your Email"
                    value={userData.email}
                    onChange={handleChange}
                    />
                    {errors.email && <span>{errors.email}</span>}
                </div>
                
                <div className={style.inputContainer}>
                <label>Password :</label>
                    <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={userData.password}
                    onChange={handleChange}
                    />
                    {errors.password? <span>{errors.password}</span>: null}
                </div>
                

                    <button className={style.button}>Submit</button>
            </form>
        </div>
    )
}

export default Form