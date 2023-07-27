import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectKeyword } from '../../requests/slice';
import { checkToken } from '../../requests/login';
import { getProducts } from '../../requests/product';


export default function CusProduct() {
  let navigate = useNavigate();
  const [products, setProducts] = useState([]);
  let key = useSelector(selectKeyword);
  const param = useParams();
  const [keyy, setkey] = useState()





  useEffect(() => {
    let token = localStorage.getItem('token');

    if (token == null) {
      navigate('/');
    }
    else {
      checkToken(token).then((data) => {
        if (data) {
          getProducts(token).then((request) => setProducts(request))


        }
        else {
          navigate('/');

        }
      })

    }

  })




  return (


    <div className='container row'>
      <div className='col-12'>



        <div className='row mt-3 mb-5'>
          <div className='col-12 '>
            <div className='col-6 d-flex  justify-content-end align-items-center ' style={{ borderRadius: '5px', backgroundColor: "#FFD7A2" }}>
              <h1 className='mx-3' style={{ color: "white" }}>SERVICES</h1>
            </div>

          </div>
        </div>

        <div className='row'>

          <div className='col-1'>
          </div>

          <div className='col-10 d-flex justify-content-center  '>
            <div className='row'>


              {
                products.filter((item) => {


                  return (item.name.toLowerCase().includes(param.param ? param.param : ""))

                }).map((product, index) => {

                  return (

                    <div key={index} className="col-3 card d-flex text-center align-items-center mx-4 mb-4" style={{ width: "18rem" }}>
                      <img src={product.image} className="card-img-top" alt={product.name} />
                      <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text">{product.craftsmanName}</p>
                        <Link to={`/customer/detail/${product.id}`} className="btn " style={{ color: "white", backgroundColor: "#FFBA09" }}>Detail</Link>
                      </div>
                    </div>


                  )
                })

              }
            </div>
          </div>
        </div>
        <div className='col-1'>
        </div>
      </div>
    </div>

  )
}
