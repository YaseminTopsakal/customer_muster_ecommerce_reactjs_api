import React, { useEffect, useState } from 'react';
import { checkToken } from '../../requests/login';
import { useSelector } from 'react-redux';
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import { selectKeyword } from '../../requests/slice';
import { getProducts } from '../../requests/product';
import worker from '../../img/worker.jpg';
import { FaBell } from 'react-icons/fa';

export default function CraftHome() {
  let navigate = useNavigate();
  const [products, setProducts] = useState([]);
  let key = useSelector(selectKeyword);
  const param = useParams();
  const [keyy, setkey] = useState();

  useEffect(() => {
    let token = localStorage.getItem('token');

    if (token == null) {
      navigate('/');
    } else {
      checkToken(token).then((data) => {
        if (data) {
          getProducts(token).then((request) => setProducts(request));
        } else {
          navigate('/');
        }
      });
    }
  }, [navigate]);

  return (
    <div className='container-fluid' style={{ padding: 0 }}>
      <div className='row'>
        <div className='col-12'>
          <div
            className='row'
            style={{
              backgroundImage: `url(${worker})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '500px',
              width: '100%',
            }}
          >
            <p
              className='text-center'
              style={{ fontSize: '60px', fontFamily: 'cursive', color: '#FF720B', paddingTop: '100px', paddingRight: '250px' }}
            >
              <span style={{ color: '#FFBA09' }}>EASY</span> customer
            </p>
            <p className='text-center' style={{ fontSize: '60px', fontFamily: 'cursive', color: '#FF720B', paddingLeft: '300px' }}>
              A lot of <span style={{ color: '#FFBA09' }}>WORK</span>
            </p>
          </div>
        </div>
      </div>

      <div className='row pt-5' style={{ backgroundColor: '#FFD7A2', height: 'auto' }}>
        <div className='col-12'>
          <div className='row pb-5'>
            <h3 className='text-center mt-5' style={{ fontSize: '40px', fontFamily: 'cursive' }}>
              What can you do?
            </h3>
          </div>
          <div>
            {/* Add content here */}
          </div>

          <ul className='nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small'>
            <li>
              <NavLink className='nav-link baslik mt-3' to={''} style={{ color: 'black', fontSize: '30px' }}>
                Home Delivery
              </NavLink>
            </li>
            <li>
              <NavLink className='nav-link baslik mt-5' to={''} style={{ color: 'black', fontSize: '30px' }}>
                Paint and White Wash
              </NavLink>
            </li>
            <li>
              <NavLink className='nav-link baslik mt-3' to={''} style={{ color: 'black', fontSize: '30px' }}>
                Plumbing Works
              </NavLink>
            </li>
            <li>
              <NavLink className='nav-link baslik mt-5' to={''} style={{ color: 'black', fontSize: '30px' }}>
                Modifications
              </NavLink>
            </li>
            <li>
              <NavLink className='nav-link baslik mt-3 mb-5' to={''} style={{ color: 'black', fontSize: '30px' }}>
                House Cleaning Empty
              </NavLink>
            </li>
          </ul>
          <p className='text-center mt-5' style={{ fontSize: '20px' }}>
            Start serving in the fill your information area{' '}
            <Link className='mx-3' to={'/craftsman/setting'} style={{ color: 'black', textDecoration: 'underline' }}>
              Setting
            </Link>
          </p>
        </div>
      </div>

      <div className='row mt-5'>
        <div className='col-12 col-md-4 text-center mt-5'>
          <FaBell className='mt-3' style={{ fontSize: '100px' }} />
        </div>
        <div className='col-12 col-md-8'>
          <p className='text-center' style={{ fontSize: '80px' }}>
            See incoming job offers and confirm the ones that are suitable for you
          </p>
        </div>
      </div>
    </div>
  );
}
