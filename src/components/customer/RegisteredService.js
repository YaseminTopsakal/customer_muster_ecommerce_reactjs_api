import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { buy, selectCount, selectbuyProducts, } from '../../requests/slice';
import RegisteredServiceDetail from './RegisteredServiceDetail';

export default function RegisteredService() {
  const buys = useSelector(selectbuyProducts);
  const count = useSelector(selectCount);

  console.log(buys)


  return (
    <div className='container row'>
      <div className='col-12'>


        <div className='row mt-3 mb-5'>
          <div className='col-12 '>
            <div className='col-6 d-flex  justify-content-end align-items-center ' style={{ borderRadius: '5px', backgroundColor: "#FFD7A2" }}>
              <h1 className='mx-3' style={{ color: "white" }}>REGISTERED COURSES</h1>
            </div>

          </div>
        </div>

        <div className='row'>
       
        <div className='col-1'>
          </div>
        
          <div className='col-10 d-flex justify-content-center  '>
          <div className='row'>

          
          {
            buys.map((item) => {
              return (<RegisteredServiceDetail urun={item} />)
            })
          }
        </div>
        </div>



        </div>
      </div>

    </div>
  )
}
