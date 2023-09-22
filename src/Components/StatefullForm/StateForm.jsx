
// import PropTypes from 'prop-types';

import { useState } from "react";

const StateForm =()=> {
    const [email , setemail] = useState(null)
    const [password , setpassword] = useState(null)
    const [error , seterror] = useState('')
    const handleSubmit = e => {
        e.preventDefault()
        if(password.length < 6){
            seterror('password 6 need')
        }
        else{
            console.log(email)
            console.log(password)
        }
        
    }

    const HandleEmailChange = e => {
        setemail(e.target.value)
    }

    const HandlePAsswordChange = e => {
        setpassword(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                onChange={HandleEmailChange}
                type="email" name="email"/> <br />

                <input 
                onChange={HandlePAsswordChange}
                type="password" name="password"  required/> <br />
                <input type="submit" value="Submit" />

                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

StateForm.propTypes = {
    
};

export default StateForm;