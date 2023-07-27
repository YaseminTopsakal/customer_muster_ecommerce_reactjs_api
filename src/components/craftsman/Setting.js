import React, { useState } from 'react'

export default function Setting() {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [neighbourhood, setNeighbourhood] = useState('');
    const [job, setJob] = useState('');


    const kaydet = (e) => {
        e.preventDefault();



        sessionStorage.setItem('name', name);
        sessionStorage.setItem('surname', surname);
        sessionStorage.setItem('city', city);
        sessionStorage.setItem('neighbourhood', neighbourhood);
        sessionStorage.setItem('job', job);


    }
    return (
        <div>

            <div className='row d-flex mt-5 ' >
                <div className='col-3'>
                </div>
                <div className='col-6 ' style={{ border: "solid 4px #0c2a2f", borderRadius: "10px" }}>
                   
                    <form className="px-2 py-2" >


                        <div id="divKisiselBiligler" style={{ display: "block" }}>
                            <h4 className="text-center">PERSONAL INFORMATION</h4>
                <p className='text-center'>Get a little closer to serving by filling in your personal information</p>

                            <div className="row mb-3 mt-3">
                                <label for="bsvAd" className="col-sm-2 col-form-label">*Name:</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="bsvAd" value={name} onChange={(e) => setName(e.target.value)} required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="bsvSoyad" className="col-sm-2 col-form-label">*Surname:</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="bsvSoyad" value={surname} onChange={(e) => setSurname(e.target.value)} required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="bsvMilliyet" className="col-sm-2 col-form-label" >*Country:</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="bsvMilliyet" value={country} onChange={(e) => setCountry(e.target.value)} required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="bsvMilliyet2" className="col-sm-2 col-form-label">*City:</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="bsvMilliyet2" value={city} onChange={(e) => setCity(e.target.value)} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="bsvKimlikNo" className="col-sm-2 col-form-label">*Neighbourhood:</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="bsvKimlikNo" required value={neighbourhood} onChange={(e) => setNeighbourhood(e.target.value)} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label for="bsvKimlikNo" className="col-sm-2 col-form-label">*Job:</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="bsvKimlikNo" required value={job} onChange={(e) => setJob(e.target.value)} />
                                </div>
                            </div>






                        </div>




                        <div className="row text-center">
                            <div className="col-12">
                                <button id="btnBsvKisiselBilgiKaydet" type="submit" className="btn  text-center" style={{ backgroundColor: "#FFBA09" , color:"white"}} onClick={kaydet} >Send</button>
                            </div>
                        </div>






                    </form>



                </div>

            </div>
        </div>
    )
}
