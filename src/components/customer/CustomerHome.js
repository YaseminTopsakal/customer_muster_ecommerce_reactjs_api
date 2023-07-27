import React, { useEffect, useState } from 'react'
import { checkToken } from '../../requests/login';
import { Link, NavLink, Navigate, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectKeyword } from '../../requests/slice';
import { getProducts } from '../../requests/product';
import couch from '../../img/couch.jpg';
import { FaStar } from 'react-icons/fa';


export default function Product() {
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


    <div className='row'>
      <div className='col-12'>
        <div className='row '>
          <div
            className='col-12 '
            style={{
              backgroundImage: `url(${couch})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '500px',
            }}
          >
            <p className='text-end  ' style={{ fontSize: 60, fontFamily: 'cursive', color: "#FF720B", padding: "200px" }}>
              Everything is <span style={{ color: '#FFBA09' }}>EASY</span> from where you sit
            </p>
          </div>
        </div>

        <div className='row '>
          <div
            className='col-12 '
            style={{
              backgroundColor: "#FFBA09",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100px',
            }}
          >

            <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small ">
              <li>

                <NavLink className='nav-link baslik mt-2 ' to={''} style={{ color: "white", fontSize: '20px' }}> Home Delivery </NavLink>


              </li>
              <li>

                <NavLink className='nav-link baslik mt-4' to={''} style={{ color: "white", fontSize: '20px' }}> Paint and White Wash</NavLink>


              </li>


              <li>
                <NavLink className='nav-link baslik mt-2' to={''} style={{ color: "white", fontSize: '20px' }}>Plumbing Works</NavLink>

              </li>
              <li>
                <NavLink className='nav-link baslik mt-4' to={''} style={{ color: "white", fontSize: '20px' }}>Modifications </NavLink>

              </li>
              <li>
                <NavLink className='nav-link baslik mt-2' to={''} style={{ color: "white", fontSize: '20px' }}>House Cleaning Empty </NavLink>

              </li>
              


            </ul>
            
          </div>
        </div>




        <div className='row mt-3 mb-5'>
          <div className='col-12 '>
            <div className='col-6 d-flex  justify-content-end align-items-center mt-3' style={{ borderRadius: '5px', backgroundColor: "#FFD7A2" }}>
              <h1 className='mx-3' style={{ color: "white" }}> TRENDY SERVICES</h1>
            </div>

          </div>
        </div>

        <div className='row'>

          <div className='col-1'>

          </div>

          <div className='col-10 d-flex   '>
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
                        <h5 className="card-title"> <FaStar /> {product.score}</h5>
                        <p className="card-text">({product.remark} approved comment)</p>

                        <Link to={`/customer/detail/${product.id}`} className="btn " style={{ color: "white", backgroundColor: "#FFBA09" }}>Detail</Link>
                      </div>
                    </div>


                  )
                })

              }
            </div>
          </div>
          <div className='col-1'>

          </div>

        </div>

      </div>
    </div>

  )
}
