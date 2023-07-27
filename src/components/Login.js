import React, { useState } from 'react'
import { submitHandle } from '../requests/login';
import { NavLink, useNavigate } from 'react-router-dom'
import bg from '../img/bg.jpg';


var login = false;
var loginCraft=false;
export default function Login() {
    let navigate = useNavigate();
    const [user, setUser] = useState({});
    const [login, setlogin] = useState(false);
    const [error, setError] = useState("");
    const [loginCraft, setloginCraft] = useState(false);
    const [errorCraft, setErrorCraft] = useState("");
    return (
        <div className='row  mt-4'>
             
            <div className='col-12 d-flex align-item-center  justify-content-center'>
                <h1 style={{fontSize:100, fontFamily:"fantasy", color:"#FFBA09"}}>EASY</h1>

            </div>
           
            <div className='col-12 d-flex align-item-center  justify-content-center '>
                <h1 style={{fontSize:60, fontFamily:"cursive", color:"black"}}>Everything is so <span style={{color:"#FFBA09"}}>EASY</span> here</h1>

            </div>

            <div className='row '>
          <div
            className='col-12 '
            style={{
              backgroundColor: "#FFBA09",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '200px',
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


            <div className='row  footer fixed-bottom ' style={{backgroundImage:`url(${bg})`,backgroundSize:"100%"}}>

                <div className='col-6'>

                    <div className='row d-flex align-content-center justify-content-center mt-5 mb-5' >

                        <div className='row d-flex align-item-center  justify-content-center mt-5'>


                            <div className="col-6 d-flex align-item-center text-center justify-content-center">

                                <form className="text-center" onSubmit={(e) => {
                                    let result = submitHandle(e, user.userName, user.password);
                                    result.then((res) => {
                                        console.log(res);

                                        if (res.isAuthenticated) {

                                            setlogin(true);

                                            setError('');

                                            console.log(login);
                                            localStorage.setItem('token', res.token);
                                            localStorage.setItem('user', user.userName);

                                            setTimeout(() => {
                                                navigate('/customer');
                                            }, 1500);
                                        }
                                        else {

                                            setError('Invalid username or password.');

                                        }
                                    })
                                    result.catch((err) => {
                                        console.log(err.message);
                                    })




                                }}>

                                    <h1 className="h3 mb-3 fw-normal" style={{ color: "#FFBA09" }}> <b>Customer Login</b></h1>

                                    <div className="form-floating">
                                        <input type="text"
                                            className="form-control mb-2"
                                            id="girisKullaniciAdi"
                                            placeholder="mail"
                                            onChange={(e) => setUser({ ...user, userName: e.target.value })}
                                            required />
                                        <label htmlFor="floatingInput">Username</label>
                                    </div>
                                    <div className="form-floating">
                                        <input type="password"
                                            className="form-control mb-2"
                                            id="girisSifre"
                                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                                            placeholder="Password"
                                            required />
                                        <label htmlFor="floatingPassword">Password</label>
                                    </div>

                                    {login && <p style={{ color: "black" }}>You have successfully logged in, you are being redirected...</p>}
                                    {error && <p style={{ color: 'red' }}>{error}</p>}



                                    <button className="w-100 btn btn-lg btn-primary" style={{ backgroundColor: "#FFBA09", color: "black" }} type="submit" id="btnGirisYap"   >Login</button>

                                </form>



                            </div>

                        </div>
                        <div className="row d-flex align-item-center justify-content-center mt-3'">
                            <div className="col-6 d-flex align-item-center   justify-content-center'">


                            </div>
                        </div>
                        <div className='row d-flex align-item-center  justify-content-center mt-3'>
                            <div className='col-6 d-flex align-item-center text-center justify-content-center'>

                                <NavLink className='nav-link mx-2 'to={'/register'} style={{ color: "#FFBA09", fontSize: '20px' }}>Sing up</NavLink>
                            </div>

                        </div>


                    </div>
                </div>

                <div className='col-6'>
                    <div className='row d-flex align-content-center justify-content-center mt-5' >

                        <div className='row d-flex align-item-center  justify-content-center mt-5'>


                            <div className="col-6 d-flex align-item-center text-center justify-content-center">


                                <form className="text-center" onSubmit={(e) => {
                                    let result = submitHandle(e, user.userName, user.password);
                                    result.then((res) => {
                                        console.log(res);

                                        if (res.isAuthenticated) {

                                            setloginCraft(true);

                                            setErrorCraft('');

                                            console.log(login);
                                            localStorage.setItem('token', res.token);
                                            localStorage.setItem('user', user.userName);

                                            setTimeout(() => {
                                                navigate('/craftsman');
                                            }, 1500);
                                        }
                                        else {

                                            setErrorCraft('Invalid username or password.');

                                        }
                                    })
                                    result.catch((err) => {
                                        console.log(err.message);
                                    })

                                }}>

                                    <h1 className="h3 mb-3 fw-normal" style={{ color: "#FFBA09"}}> <b>Craftsman Login</b></h1>

                                    <div className="form-floating">
                                        <input type="text"
                                            className="form-control mb-2"
                                            id="girisKullaniciAdi"
                                            placeholder="mail"
                                            onChange={(e) => setUser({ ...user, userName: e.target.value })}
                                            required />
                                        <label htmlFor="floatingInput">Username</label>
                                    </div>
                                    <div className="form-floating">
                                        <input type="password"
                                            className="form-control mb-2"
                                            id="girisSifre"
                                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                                            placeholder="Password"
                                            required />
                                        <label htmlFor="floatingPassword">Password</label>
                                    </div>




                                    {loginCraft && <p style={{ color: "black" }}>You have successfully logged in, you are being redirected...</p>}
                                    {errorCraft && <p style={{ color: 'red' }}>{errorCraft}</p>}

                                    <button className="w-100 btn btn-lg btn-primary" style={{ backgroundColor: "#FFBA09", color: "black" }} type="submit" id="btnGirisYap"   >Login</button>

                                </form>



                            </div>

                        </div>
                        <div className="row d-flex align-item-center justify-content-center mt-3'">
                            <div className="col-6 d-flex align-item-center   justify-content-center'">


                            </div>
                        </div>
                        <div className='row d-flex align-item-center  justify-content-center mt-3'>
                            <div className='col-6 d-flex align-item-center text-center justify-content-center'>

                                <NavLink className='nav-link mx-2 ' to={'/register'} style={{ color: "#FFBA09", fontSize: '20px' }}>Sing up</NavLink>
                            </div>

                        </div>


                    </div>
                </div>





            </div>


        </div>
    )
}
