import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import logo from "../Image/Foodlogo.webp";
import { MdDelete } from 'react-icons/md';

const RecipeDetails = () => {

    let location = useLocation();
    const [getdetails, setgetdetails]=useState();
    let localdata=location.state

    useEffect(()=>{
      setgetdetails(localdata)
    },[])
 
    const DeleteDetails=(data)=>{
     for(let i=0;i<getdetails.length;i++){
      const index = getdetails.findIndex((item) => item._id === data);
      const newItems = [...getdetails];
      newItems.splice(index, 1);
      setgetdetails(newItems);
     }
     
    }

    const [AfterDetails, setAfterDetails]=useState([])
    const SendDetails=(data)=>{
          setAfterDetails(data)
          console.log(AfterDetails)
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
      <h4 className="aaaa">LogOut</h4>
     </div>
      </div>
    </nav>
       </div>

      <div className="recipiedat" style={{padding:"20px"}} >

     {

      getdetails && getdetails.map((allval, key)=>{
         return (
          <div className="cardss" key={key} style={{marginLeft:"30px", marginTop:"60px"}} >
          <img src={allval.imgurl} className="card-img-top" alt=""  style={{height:"180px",width:"192px"}} onClick={()=>SendDetails(allval)} />
          <div className="cards-body">
            <p className="price">{allval.Author}</p>
            <p className="price">{allval.RecipeTitel}</p>
            <p className="price">{allval.price} <span style={{float:"right"}} onClick={() =>DeleteDetails(allval._id)} ><MdDelete /></span></p>
          </div>
        </div>
         )
      })
     }
      </div>


      <div class="container">
  <div class="row">
    <div class="col">
    <img src={AfterDetails.imgurl} className="card-img-top" alt=""  style={{height:"400px"}}  />
    </div>
    <div class="col">
     
  <div >
  <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
    <li className="nav-item" role="presentation">
      <a className="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
        aria-controls="pills-login" aria-selected="true"  >Ingredients</a>
    </li>
    <li className="nav-item" role="presentation">
      <a className="nav-link" id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab"
        aria-controls="pills-register" aria-selected="false">Directions</a>
    </li>
  </ul>
  
  <div className="tab-content">
    <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
      <p>{AfterDetails.ingredients}</p>
    </div>
  
    <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
       <p>{AfterDetails.directions}</p>
    </div>
  </div>
  </div>  

    </div>
  </div>
</div>



      



     
     









    </div>
  )
}

export default RecipeDetails
