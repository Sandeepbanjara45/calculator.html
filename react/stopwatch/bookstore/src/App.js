// import React, { useState } from "react";
// import "./App.css";
// import Login from "./Form/Login";
// function App() {
//   const [showSignup,setShowSignup] = useState("true")
//   const [name,setName] = useState("");
//   const [email,setEmail] = useState("");
//   const [phoneNo,setphoneNo] = useState("");
//   const [address,setAddress] = useState("");
//   const [password,setPassword] = useState("");
  
//   const onClickButton = (value) => {
//     setShowSignup(value);
//   };
  
//   const clickEmail = (value) => {
//     setShowSignup(value);
//   }
//   const onChangeName = (event) => {
//     console.log(">>>>>>", event.target.value);
//     setName(event.target.value);
//   }
  
//   const onChangeEmail = (event) => {
//     console.log(">>>>>>", event.target.value);
//     setEmail(event.target.value);
//   }
  
//   const onChangephoneNO = (event) => {
//     console.log(">>>>>>", event.target.value);
//     setphoneNo(event.target.value);
//   }
  
//   const onChangeAddress = (event) => {
//     console.log(">>>>>>", event.target.value);
//     setAddress(event.target.value);
//   }
//   const onChangePassword = (event) => {
//     console.log(">>>>>>",event.target.value);
//     setPassword(event.target.value);
//   }
//   return (
//     <div className="App">
//       {showSignup ? (
//       <div>
//         <div>
//           <h1>Sign up</h1>
//         </div>
//         <form>
//           <div>
//             <label htmlFor="name">Name: </label>
//             <input type="name" id="name" onChange={onChangeName}/>
//           </div>
//           <div>
//             <label htmlFor="email">Email: </label>
//             <input type="email" id="email" onChange={onChangeEmail}/>
//           </div>
//           <div>
//             <label htmlFor="phoneNo">PhoneNo: </label>
//             <input type="phoneNo" id="phoneNo" onChange={onChangephoneNO}/>
//           </div>
//           <div>
//             <label htmlFor="address">Address: </label>
//             <input type="address" id="address" onChange={onChangeAddress}/>
//           </div>
//           <div>
//             <label htmlFor="password">Password </label>
//             <input type="password" id="password" onChange={onChangePassword}/>
//           </div>
//           <button type="submit" onClick={((event) => onClickButton(event))}>Submit</button>
//         </form>
//         <div>
//           <p>
//             Already have an account
//             <div onClick={() => setShowSignup(false)}>
//               <b>Login Now</b>
//             </div>
//           </p>
//         </div>
//       </div>
//       ):
//       <Login/>
//       }
    
//     </div> 
//   );
// }

// export default App;




// import React from 'react'
// import Addbutton from './Task/Addbutton'
// import Addtask from './Task/Addtask'
// import { Route,Routes } from 'react-router'
// import { BrowserRouter} from 'react-router-dom'

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/addbutton' element={<Addbutton/>}/>
//           <Route path='/addtask' element={<Addtask/>}/>
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }


// export default App




// import React from 'react'
// import Childparentcomponent from './practice/childparentcomponent'

// const App = () => {
//   function parentAlert(data){
//     console.log(data);
//     alert(data.email)
//   }
//   return (
//     <>
//     <h1>Lifting State Up</h1>
//       <Childparentcomponent popup={parentAlert}/>
//     </>
//   )
// }

// export default App




// import React from 'react'
// import Usestate from './practice/allAboutHooks/Usestate'
// import UseStateObject from './practice/allAboutHooks/UseStateObject'

// import UseEffect from './practice/allAboutHooks/UseEffect'
// import CleanUp from './practice/allAboutHooks/CleanUp'
// const App = () => {
//   return (
//     <div>
//       {/* <Usestate/> */}
//       {/* <UseStateObject/> */}

//       {/* <UseEffect/> */}
//       <CleanUp/>

//     </div>
//   )
// }

// export default App



// import React from 'react'
// import Parent from './practice/allAboutHooks/Usecontext/Parent.jsx'


// const App = () => {

//   return (
//     <div>
//       <Parent/>
//     </div>
//   )
// }

// export default App




import React from 'react'
// import ReducerHook from './practice/allAboutHooks/usereducer/ReducerHook'
// import RefHook1 from './practice/allAboutHooks/useref/RefHook1'
import RefHook from './practice/allAboutHooks/useref/RefHook'

const App = () => {
  return (
    <div>
      {/* <ReducerHook/> */}
      {/* <RefHook1/> */}
      <RefHook/>
    </div>
  )
}

export default App

