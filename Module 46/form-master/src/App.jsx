import './App.css'
import ReusableForm from './components/ReusableForm/ReusableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {
  const handleSignUP = data => {
    console.log("Sign Up ", data);
  }
  const handleUpdate = data => {
    console.log("Update ", data);
  }
  return (
    <>
      
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm formTitle={'SignUp From'} handleSubmit={handleSignUP} submitBtnTxt='Submit'>
        <div>
          <h2>Sign Up RN</h2>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={'Update From'} handleSubmit={handleUpdate} submitBtnTxt='Update'>
        <div>
          <h2>Update RN</h2>
        </div>
      </ReusableForm>
    </>
  )
}

export default App
