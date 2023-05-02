import React, { useEffect, useState } from 'react'
import logo from "../Image/Foodlogo.webp";
import "./CreateRecipy.css"
import { BsSearch } from 'react-icons/bs';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function CreateRecipy() {
    const [getdata, setgetdata]=useState([])

    const [searchData, setsearchData]=useState("")
    

    const navigate=useNavigate();
    const tocreatrecipy=()=>{
        navigate("/Addrecipy")
    }


    const [addTocart, setAddTocart]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/getrecipe").then((res)=>{
        setgetdata(res.data.data)
        }).catch((err)=>{
          console.log(err)
        })
    },[])


    const sendtocart=(allval)=>{
        setAddTocart([...addTocart, allval])
    }

    const sendDetails=()=>{
        if(addTocart.length!==0){
            navigate("/RecipeDetails", {state:addTocart})
        }
       
    }

    
    const Logout=()=>{
      console.log("munna shah")
      localStorage.removeItem('jwt')
      navigate("/")
    }

    
   
  return (
    <div>

<div id="header-part">
      <nav className="navbar fixed-top  navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <div>
        <img className='logo' src={logo}/>
        <span>
        <h4 className="aaa">RECIPE APP</h4>
        </span>
        </div> 

        <div>
        <BsFillCartPlusFill style={{color:"white"}}onClick={() =>sendDetails(addTocart)} />
        <span style={{color:"white"}}>{addTocart.length}</span>
        </div>
      <div>
      <h4 className="aaaa" onClick={Logout} >LogOut</h4>
     </div>


      </div>
    </nav>
 </div>

<div className="container">
<div className="row height justify-content-center align-items-center" style={{margin:"0px, 0px, 0px, 0px"}}>
  <div className="col-md-6">
   <div className="form">
      <BsSearch className='fa fa-search' />
      <input type="text" className="form-control form-input"  placeholder="Search anything..." onChange={(e)=>setsearchData(e.target.value)} />
      <span className="left-pan"></span>
    </div> 
  </div>
</div>
 </div>
<div className="container" >
<div className="row heights justify-content-center align-items-center">
  <div className="col-md-6">
   <div className="form">
   <button type="button" className="btn btn-dark" onClick={tocreatrecipy} >Add Recipy</button>
    </div> 
  </div>
</div>
 </div>


 <p id="proposals-title"> All Recipies</p>
      <div className="recipiedat" style={{padding:"20px"}} >
     {
      getdata.filter((allval) =>allval.RecipeTitel?.toLowerCase().includes(searchData.toLowerCase())).map((allval, key)=>{
         return (
          <div className="cardss" key={key} style={{marginLeft:"30px", marginTop:"20px"}} onClick={() =>sendtocart(allval)} >
          <img src={allval.imgurl} className="card-img-top" alt=""  style={{height:"180px",width:"192px"}} />
          <div className="cards-body">
            <p className="price">{allval.RecipeTitel}</p>
            <p className="price">{allval.price}</p>
          </div>
        </div>
         )
      })
     }
     </div>




    </div>
  )
}

export default CreateRecipy
