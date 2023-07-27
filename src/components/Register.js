import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'



function Register() {

    const [Mail, setMaiL] = useState('');
    const [password, setPassword] = useState('');
    const [passRepeat, setPassRepeat] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();


   




    return (
        <>

            <div className="row d-flex align-content-center justify-content-center mt-5">
                <div className="row d-flex align-content-center justify-content-center mt-5">


                    <div className=" col-6 d-flex align-item-center text-center justify-content-center ">


                        <form className="text-center  need-validations" onSubmit="" >

                            <h1 className="h3 mb-3 fw-normal " style={{ color: "#FFBA09",fontWeight:"bold" }}> <b>Sign Up</b></h1>

                            <div className="form-floating mb-2">
                                <input type="email"
                                    className="form-control"
                                    id="kayitMail"
                                    placeholder=""
                                    value={Mail}
                                    onChange={(e) => setMaiL(e.target.value)}
                                    required />
                                <label for="floatingInput">Mail</label>
                            </div>
                            <div className="form-floating  mb-2">
                                <input type="password"
                                    className="form-control"
                                    id="kayitPassword1"
                                    placeholder=""
                                    minLength="6"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required />
                                <label for="floatingPassword">Password</label>
                            </div>
                            <div className="form-floating  mb-2">
                                <input type="password"
                                    className="form-control"
                                    id="kayitPassword2"
                                    placeholder=""
                                    value={passRepeat}
                                    minLength="6"
                                    onChange={(e) => setPassRepeat(e.target.value)}
                                    required />
                                <label for="floatingPassword">Password</label>
                            </div>


                            <button className="w-100 btn btn-lg btn-primary " style={{ backgroundColor: "#FFBA09", color: "black" }} type="submit" id="btnKayitOl"  >Sign Up</button>
                        </form>
                    </div>
                </div>
                <div className="row d-flex align-item-center  justify-content-center mt-3">
                    <div className="col-6 d-flex align-item-center  justify-content-center ">

                        {/* {error && <p style={{ color: 'red' }}>{error}</p>}
                        {success && <p style={{ color: 'green' }}>{success}</p>} */}

                    </div>
                </div>

                <div className='row d-flex align-item-center  justify-content-center mt-3'>
                    <div className='col-6 d-flex align-item-center text-center justify-content-center'>
                        <p>Do you already have an account? <Link to="/" style={{ color: "#FFBA09" }}>Login</Link> </p>

                    </div>

                </div>

            </div>


        </>

    );
}
export default Register;