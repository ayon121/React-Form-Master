
// import PropTypes from 'prop-types';

import { useEffect, useRef } from "react";

const RefForm = () => {

    const emailRef = useRef(null)
    const passRef = useRef(null)
    useEffect(()=> {
        emailRef.current.focus()
    },[])
    const handleSubmit = e => {
        e.preventDefault()
        console.log(emailRef.current.value)
        console.log(passRef.current.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                ref={emailRef}
                type="email" name="email"/> <br />

                <input 
                ref={passRef}
                type="password" name="password"  required/> <br />
                <input type="submit" value="Submit" />

            </form>
            
        </div>
    );
};

RefForm.propTypes = {
    
};

export default RefForm;