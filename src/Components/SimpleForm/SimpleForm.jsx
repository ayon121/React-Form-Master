
// import PropTypes from 'prop-types';

const SimpleForm = () => {
    const handleSubmit = e => {
        e.preventDefault()
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log('Submited')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"  name='name'/> <br />
                <input type="email" name="email"/> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

SimpleForm.propTypes = {
    
};

export default SimpleForm;