import React from 'react'
import { FaShoppingBasket } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaSignOutAlt, FaBell } from 'react-icons/fa';
import logo from '../../img/logo.png'



import { NavLink, Outlet } from 'react-router-dom';


export default function CraftMainLayout() {
  let user = localStorage.getItem('user');

  return (
    <div >
      {/* header */}
      <header style={{zIndex: "1"}}>
        <div class="px-3 py-2 " style={{ backgroundColor: "#FF720B" }}>
          <div class="container" >
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <a href="/craftsman" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
              <img style={{ height: "100px", width: "100px",borderRadius:"50px" }} src={logo} />
              </a>

              <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                <li>

                  <NavLink className='nav-link baslik' to={'/craftsman'} style={{ color: "white", fontSize: '20px' }}>Home</NavLink>


                </li>
                <li>
                  <NavLink className='nav-link baslik' to={'/craftsman/setting'} style={{ color: "white", fontSize: '20px' }}> Setting</NavLink>

                </li>
                <li>
                  <NavLink className='nav-link baslik' to={'/craftsman/notification'} style={{ color: "white", fontSize: '20px' }}><FaBell/></NavLink>

                </li>

             
              </ul>
            </div>
          </div>
        </div>
        <div class="px-3 py-2 border-bottom mb-3" style={{ backgroundColor: "#FFBA09" }}>
          <div class="text-end d-flex justify-content-end ">
           

            <div class="text-end d-flex justify-content-between">
              <h5 className='mt-1' style={{ color: "white" }}><FaUser/>{user}</h5>
              <NavLink className='nav-link mx-2 ' to={'/'} style={{ color: "white", fontSize: '20px' }} onClick={() => { localStorage.clear() }}><FaSignOutAlt /></NavLink>

            </div>
          </div>
        </div>
      </header>


      {/* header end  */}






      <Outlet/>

      {/* footer */}
      <div style={{ marginTop: "100px" }}>
        <div className="footer fixed-bottom px-5" style={{ backgroundColor: "#FF720B" , width: "100%" }}>
          <footer className="d-flex flex-wrap justify-content-between align-items-center  my-4 ">
            <div className="col-md-4 d-flex align-items-center">

              <span className="mb-3 mb-md-0  " style={{ color: "white" }}>© 2023 YT Company, Inc</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
              <li className="ms-3"><a className="text-body-secondary" href="#"></a></li>
              <li className="ms-3"><a className="text-body-secondary" href="#"></a></li>
              <li className="ms-3"><a className="text-body-secondary" href="#"></a></li>
            </ul>
          </footer>
        </div>
      </div>


      {/* footer end  */}

    </div>
  )
}
