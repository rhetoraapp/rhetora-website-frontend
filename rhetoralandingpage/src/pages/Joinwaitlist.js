import React from 'react';
import Navbar from '../components/navbar';
import Background from '/Users/lukaeric/Desktop/rhetora/rhetora/rhetoralandingpage/src/assets/Hero-lines.svg';

const join = () => {

    return (
      <div>
        <Navbar/>
        <div style={{height: "100vh", backgroundImage: `url(${Background})`,  backgroundSize: "cover"}}>
          <div className='d-flex justify-content-center'>
          <div className='col-8 w mt-5'>
            <h1 className='tc mt-5'>rhetora is <br></br>Launching Soon</h1>
            <p className='tc'>Designed by sales professionals, for sales professionals.</p>
            <div className='o col-lg-8 d-flex justify-content-center mt-5'>
            <input id='heroinput' className='col-lg-8 col-xl-6' placeholder='Name'></input>
            <input id='heroinput' className='col-lg-8 col-xl-6' placeholder='Company Name'></input>
            </div>
            <div className='o col-lg-8 mt-5'>
            <input id='heroinput' className='row-10 col-lg-8 col-xl-9' placeholder='Email'></input>
            <button id='herobtn' className='row-10 col-lg-8 col-xl-3'>Get Early Access</button>
            </div>
          </div>

          </div>

        </div>
      </div>
    );
  };
   
  export default join;