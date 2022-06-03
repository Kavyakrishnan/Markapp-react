import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Viewmark = () => {
    var [mark,setViewmark]=useState([])
    axios.get("http://43.204.187.192:4011/api/viewall").then((response)=>{
      console.log(response.data)
      setViewmark(response.data)
    })
    const deleteapicall=(id)=>{
      const data={"_id":id}
      console.log(data)
      //reading delete
      axios.post("http://43.204.187.192:4011/api/delete",data).then(
          (response)=>{
              if(response.data.status=="success")
              {
alert("Successfully deleted")
              }
              else
              {
alert("Error in deletion")
              }
          }
      )
  }
  return (
    <div>
        <Header/>
         <div className="Container">
    <div className="row g-10">
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <div className="row g-3">
            <table class="table table-primary">
  <thead>
    <tr>  
      <th scope="col">No</th>

      <th scope="col">Name</th>
      <th scope="col">Admissionno</th>
      <th scope="col">Cgpa</th>
      

    </tr>

  </thead>
  <tbody>
    {mark.map((value,key)=>{
      return <tr>
     <th scope="Row">1</th>  
     <td>{value.name}</td>
     <td>{value.admissionno}</td>
     <td>{value.cgpa}</td>
     <td>   <button onClick={()=>{deleteapicall(value._id)}}  className="btn btn-success">Delete</button></td>
     
      </tr>
    })}
  </tbody>
</table>
               
               
               
              
            </div>
        </div>
    </div>
</div>
      
    </div>
  )
}

export default Viewmark