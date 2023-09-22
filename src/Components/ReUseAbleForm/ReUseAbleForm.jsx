import { Children } from "react";


const ReUseAbleForm = ({formtitle , submitBtnText = 'Submit'  , handleSubmit  , children}) => {
     
    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name : e.target.name.value,
            email : e.target.email.value
        }
        handleSubmit(data)
    }
    return (
        <div>
            {children}
            <form onSubmit={ handleLocalSubmit}>
                <input type="text"  name='name'/> <br />
                <input type="email" name="email"/> <br />
                <input type="submit" value={submitBtnText} />
            </form>
            
        </div>
    );
};

export default ReUseAbleForm;