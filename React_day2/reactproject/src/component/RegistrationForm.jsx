// import { useState } from "react"

// const RegistrationForm = () => {
//     const [data,setData] = useState({name:"",department:"",salary:""})
//     const [showdata,setShowdata] = useState([])

//     const handlechange =(e)=>{
//         setData({...data, [e.target.name]:e.target.value})
//     }

//     const handlesubmit =(e)=>{
//         e.preventDefault()
//         setShowdata([...showdata, data])
//         setData({name:"",department:"",salary:""})
//     }

//     return (
//         <div>
//             <h2>Employee Registration Form</h2>
//             <div>
//                 <form onSubmit={handlesubmit}>
//                     <input type="text" placeholder="Employee name" name="name" value={data.name} onChange={handlechange} />
//                     <input type="text" placeholder="Department name" name="department" value={data.department} onChange={handlechange} />
//                     <input type="number" placeholder="Employee salary" name="salary" value={data.salary} onChange={handlechange} />
//                     <button type="submit">Add Employee</button>
//                 </form>
//                 <h3>Employee list</h3>
//                 {showdata.map((employee,index)=>(
//                     <div key={index}>
//                         <p>Employee Name: {employee.name}</p>
//                         <p>Department: {employee.department}</p>
//                         <p>Salary: {employee.salary}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default RegistrationForm
