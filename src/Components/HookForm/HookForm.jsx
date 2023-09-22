import useInputState from "../Hooks/useInputState";


const HookForm = () => {
    const [email , handleEmail]= useInputState('Rojonai')
    const handleSubmit = e => {
        e.preventDefault()
        console.log('data' , email)
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input
                value={email} onChange={handleEmail}
                type="email" name="email"/> <br />

                <input type="password" name="password" /> <br />
                <input type="submit" value="Submit" />
            </form>
            
        </div>
    );
};

export default HookForm;