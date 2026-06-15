// import { useState } from "react";
// import { useEffect } from "react";

// function UserData() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setUsers(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <h2>Loading...</h2>;
//   }

//   if (error) {
//     return <h2>Error: {error}</h2>;
//   }

//   return (
//     <div>
//       <h1>User List</h1>

//       {users.map((user) => (
//         <div key={user.id}>
//           <h3>Name: {user.name}</h3>
//           <p>Email: {user.email}</p>
//           <p>Company: {user.company.name}</p>
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default UserData;