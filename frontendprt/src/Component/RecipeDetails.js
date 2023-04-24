import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import logo from "../Image/Foodlogo.webp";

const RecipeDetails = () => {

    let location = useLocation();

    const [getdetails, setgetdetails]=useState()
    


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
      <h4 className="aaaa">LogOut</h4>
     </div>


      </div>
    </nav>
 </div>





      <div className="recipiedat" style={{padding:"20px"}} >
     {
      location.state.map((allval, key)=>{
         return (
          <div className="cardss" key={key} style={{marginLeft:"30px", marginTop:"60px"}}>
          <img src={allval.imgurl} className="card-img-top" alt=""  style={{height:"180px",width:"192px"}} />
          <div className="cards-body">
            <p className="price">{allval.Author}</p>
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

export default RecipeDetails
