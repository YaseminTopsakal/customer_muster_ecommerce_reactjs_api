import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { checkToken } from '../../requests/login';
import { getProductById } from '../../requests/product';
import { useDispatch } from 'react-redux';
import { buy } from '../../requests/slice';
import { FaStar } from 'react-icons/fa';


export default function CusDetail() {



    const [products,setProducts]=useState({});
    
    const param = useParams();
    let navigate= useNavigate();
  const dispatch = useDispatch();

    
    

    useEffect(()=>{
        let token=localStorage.getItem('token');
      
        if(token ==null){
          navigate('/');
        }
        else{
          checkToken(token).then((data)=>{
              if(data){
              getProductById(token,Number(param.id)).then((res)=>{
                
                setProducts(res);
              
              
              })
              }
              else{
              navigate('/');
      
              }
          })
      
        }
        
      },[])
      

  return (

    
    <div>
    
    <div className='row mt-3'>
        <div className='col-12 '>
          <div  className='col-6 d-flex  justify-content-end align-items-center ' style={{borderRadius:'5px',backgroundColor:"#FFD7A2"}}>
          <h1 className='mx-3' style={{color:"white"}}>{products.name}</h1>
          </div>
          
        </div>
      </div>

<div class="container py-4">
    
    <div class="p-1  bg-body-tertiary rounded-3 pb-5">
      <div class="container-fluid py-1">
        <h1 class="display-5 fw-bold">{products.name}</h1>
        
        <button class="btn btn-primary btn-lg" style={{backgroundColor:"#FFBA09"}} type="button" onClick={()=>{

navigate(`/customer/basket/${products.id}`)

 }}>Send Offer</button>
      </div>
    </div>

    <div class="row align-items-md-stretch">

      <div class="col-md-6" >
      <div class="card h-50">
 
  <img src={products.image} class="card-img-bottom img-fluid" alt="..." style={{height:"700px"}}/>
</div>
      </div>
      <div class="col-md-6">
        <div class="h-50 p-5 bg-body-tertiary border rounded-3">
          <h2>{products.name}</h2>
          <p class="col-md-8 fs-4"><FaStar/> {products.score}</p>
        <p className="card-text">({products.remark} approved comment)</p>
          <p className='mt-5' style={{fontSize:"20px"}}> {products.description}</p>
          
        </div>
      </div>
    </div>

    
  </div>
</div>
    
  )
}
