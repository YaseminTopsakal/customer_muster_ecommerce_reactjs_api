import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, sil, increment } from '../../requests/slice';
import { FaTrash } from 'react-icons/fa';




export default function BasketDetail(props) {
  const dispatch = useDispatch();
  const [deger, setdeger] = useState(0);

  const [detail, setDetail] = useState('');

  const [date, setDate] = useState('');



  




  return (
    <div>
      <div className='row d-flex mt-5 ' >
        <div className='col-3'>

        </div>
        <div className='col-6 ' style={{ border: "solid 4px #0c2a2f", borderRadius: "10px" }}>
          
          <div className='row'>
            <div className='col-3'>
              <img src={props.urun.image} className='my-3' alt="" style={{ width: "125px", height: "125px" }} />
            </div>
            <div className='col-9  '>
              <div className='row'>
                <div className='col-12 d-flex justify-content-center'> 
                <p  style={{fontSize:"18px", fontWeight:"bold"}}>{props.urun.name}</p>
                </div>
              </div>
             
              <div className='row'>
              <div className='col-12 d-flex justify-content-center'> 
               <p>What date are you looking for?</p>
               <input type="date" className="form-control" id="date" placeholder={date} value="" onChange={(e) => setDate(e.target.value)}  required/>
              
              </div>
              </div>
              <div className='row'>
              <div className='col-10 d-flex justify-content-center my-3'> 
               
              <p className=''>What are the details of your need? </p>
               <input type="text" className="form-control" id="date" placeholder="" value={detail} onChange={(e) => setDetail(e.target.value)} required/>
              
               
                </div>
                
              
              </div>
            </div>
          </div>
        </div>
        <div className='col-3'>

        </div>
      </div>
    </div>
  )
}
