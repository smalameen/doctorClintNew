import React, { useEffect, useState } from 'react'
import ShowDoc from './ShowDoc'
import axios from 'axios';


const Doctors = () => {

//     const [data, setData] = useState(  [] );
 
//   useEffect( () => async()=> {
//     const result = await axios(
//       `http://localhost:5001/doctors`
//     );
 
//     setData(result);
//     console.log(result);
    
//   });
  const [data, setPosts]=useState([]);
  console.log(data);
  const getPosts = async () => {
    try {
  const userPosts = await axios.get("http://localhost:5001/doctors")
      
      setPosts(userPosts.data);  // set State
    
    } catch (err) {
      console.error(err.message);
    }
  };
    
    useEffect(()=>{
      
      getPosts()
  }, [])  
  return (
    <div>
      <h1 className="text-center">Let's introduce our Doctors</h1>

      <div className="row d-flex justify-content-center">
        {data.map(doctor => (
          <ShowDoc doctor={doctor}></ShowDoc>
        ))}
      </div>
    </div>
  )
}

export default Doctors
