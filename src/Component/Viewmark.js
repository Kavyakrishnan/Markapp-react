import React from 'react'
import Header from './Header'

const Viewmark = () => {
    var Mark=[
        {
            "name":"kavya",
            "admissionno":"54678",
            "cgpa":"7.8"
        },
        {
            "name":"Arya",
            "admissionno":"34678",
            "cgpa":"8.8"
        },
        {
            "name":"Gayaythry",
            "admissionno":"234678",
            "cgpa":"9.8"
        },
    ]

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
    {Mark.map((value,key)=>{
      return <tr>
     <th scope="Row">1</th>  
     <td>{value.name}</td>
     <td>{value.admissionno}</td>
     <td>{value.cgpa}</td>
     
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