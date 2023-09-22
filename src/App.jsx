
import './App.css'
// import HookForm from './Components/HookForm/HookForm'
import ReUseAbleForm from './Components/ReUseAbleForm/ReUseAbleForm'
// import RefForm from './Components/RefForm/RefForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'
// import StateForm from './Components/StatefullForm/StateForm'

function App() {
  
  const handleSignUpSubmit = data => {
    console.log('sign up data' , data)

  }
  
  const handleLogInSubmit = data => {
    console.log('sign up data' , data)

  }

  return (
    <>
      {/* <h1>Form</h1>
      <SimpleForm></SimpleForm> */}
      {/* <h1>Form 2</h1>
      <StateForm></StateForm> */}
      {/* <h1>Form 3</h1>
      <RefForm></RefForm> */}
      {/* <h1>Form 4</h1>
      <HookForm></HookForm> */}
      <h1>Form 5</h1>
      <ReUseAbleForm formtitle={"sign up"} submitBtnText={"Sign Up"} handleSubmit={handleSignUpSubmit}>
        <div>
          <h1>Sign Up</h1>
          <p>Happy WelCome</p>
        </div>
      </ReUseAbleForm>
      <ReUseAbleForm formtitle={"login"} submitBtnText={"Log In"} handleSubmit={handleLogInSubmit}>
      <div>
          <h1>Log In</h1>
          <p>Most Happy WelCome</p>
        </div>
      </ReUseAbleForm>
      
      

      
    </>
  )
}

export default App
