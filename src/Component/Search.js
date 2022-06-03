import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Search = () => {
  

    const[data,setData]=useState([{  "name":"","cgpa":"" }])
    const[admissionno,setAdmissionno]=useState("")

    const Searchapi =()=>{
        const valueread={"admissionno":admissionno}
        console.log(valueread)
        axios.post("http://43.204.187.192:4011/api/search",valueread).then((response)=>{
            setData(response.data)
        })
    }
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
    <div className="row g-2">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Admissionno</label>
                    <input onChange={(e)=>{setAdmissionno(e.target.value)}} type="text" className="form-control"/>
                </div>
                
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={Searchapi}  className="btn btn-success">Search</button>
                    
                </div>
            </div>
            
                {data.map( (value,key)=>{
                    return  <div className="row g-3">
                
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="form-label">Name</label>
                        <input type="text" value={value.name} className="form-control"/>
                    </div>
                    
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Cgpa</label>
                        <input type="text" value={value.cgpa} className="form-control"/>
                        
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={()=>{deleteapicall(value._id)}}  className="btn btn-success">Delete</button>
                    
                </div> 
                </div>
                })}
                
            
        </div>

    </div>

</div></div>
  )
}

export default Search