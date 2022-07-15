import { useState } from "react";


function Login(props) {
    let [inputValues, setInputValue] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        errorMessage: '',
    });

  function Login1(props) {    

    
    if (inputValues.confirmPassword !== inputValues.password) {
      setInputValue({...inputValues,errorMessage: "Password does not match confirmation password"})
        } else {
          setInputValue({...inputValues,errorMessage: ""})
    }
  }

    
   
    function onChangeinputValues(event) {
      setInputValue({
          ...inputValues, [event.target.name]: event.target.value
      })
    }
  
 
  return (
        <div>
            <div className="col-25">
              <label> Email-</label>
            </div>
            <div className="col-75">
              <input className='inputField' value={inputValues.email} name="email" onChange={onChangeinputValues} >
              </input>
            </div>

            <div className="col-25">
               <label> Password-</label>
            </div>
            <div className="col-75">
              <input className='inputField' value={inputValues.password} name="password" onChange={onChangeinputValues} ></input>
            </div>

            <div className="col-25">
              <label> Confirm Password-</label>
            </div>
            <div className="col-75">
              <input className='inputField' value={inputValues.confirmPassword} name="confirmPassword" onChange={onChangeinputValues} ></input>
            </div>

            {/* <div className="col-25">
              <label> Error-</label>
            </div>
            <div className="col-75">
                <textarea  value={error} />
                <textarea  value={noerror} />
            </div> */}
            <button onClick={Login1}>
              Submit
            </button>
        </div>
  )  
} 


export default Login;