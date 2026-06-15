// import ProductSearch from "./component/ProductSearch"
// import RegistrationForm from "./component/RegistrationForm"
// import Fetchdata from "./component/Fetchdata"
// import Toggle from "./component/Toggle"

// const App = () => {
//   return (
//     <>
//     <div>
//       <div>
//         <h1>Task 1</h1>
//         <RegistrationForm />
//         </div>
//         <div>
//         <h1>Task 2</h1>
//         <ProductSearch/>
//         </div>
//         <div>
//          <h1>Task 3</h1>
//           <Fetchdata/>
//         </div>
//         <div>
//           <h1>Task 4</h1>
//           <Toggle/>
//         </div>
      
//       </div>
//     </>
//   )
// }

// export default App


// import Welcome from "./Welcome";

// function App() {
//   return (
//     <div>
//       <Welcome name="Rajalakshmi" />
//     </div>
//   );
// }

// export default App;


import { useState } from 'react'
import Welcome from './Welcome'


const App = () => {
  const [name,setName] = useState("")
  const [count, setCount] = useState(0)


  const showmessage = ()=>{
    alert("Button clicked")

   
    
  }
   const isLoggedIn = true


   const fruits = ["apple","mango","orange"]
  //  if(isLoggedIn){
  //   return <h1>welcome user</h1>
  //  }
  //  return <h1>Please login</h1>
  // }
  return (
    <>
    <div>
      <Welcome name = "Raj"/>
      <button onClick={showmessage}>click me</button>
     
    </div>
    <div>
        {isLoggedIn ? <h1>welcome user</h1> : <h1>please login</h1>}
      </div>

      <ul>

        {fruits.map((fruit)=>(

          <li>{fruit}</li>

        )
        )}
      </ul>

      <div>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)} />
      <button >submit</button>
      <h1>{name}</h1>
      </div>


      <div>

        <button onClick={()=>setCount(count + 1)}> click add</button>
        <h1>Count: {count}</h1>
      </div>
    </>
     
  )
}


export default App
