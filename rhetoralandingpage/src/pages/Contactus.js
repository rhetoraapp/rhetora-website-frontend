import React from 'react';
import Navbar from '../components/navbar';
import Background from '/Users/lukaeric/Desktop/rhetora/rhetora/rhetoralandingpage/src/assets/Hero-lines.svg';

const contactus = () => {

    return (
      <div>
        <Navbar/>
        <div style={{height: "100vh", backgroundImage: `url(${Background})`,  backgroundSize: "cover"}}>
          <div className='d-flex justify-content-center'>
          <div className='col-8 w mt-5 d-flex justify-center flex-column'>
            <h1 className='tc mt-5'>Contact Us</h1>
            <p className='tc'>Designed by sales professionals, for sales professionals.</p>
            <div id='cinputdiv' className=''>
            <input id='heroinput-join' className='col-lg-8 col-xl-6' placeholder='Name'></input>
            <input id='heroinput-join' className='col-lg-8 col-xl-6' placeholder='Email'></input>
            </div>
            <div id='cinputdiv d-flex flex-column'>
            <input style={{height:250}} id='heroinput' className='row-10 col-lg-8 col-xl-12' placeholder='Message'></input>
            <button id='herobtn' className='row-10 col-lg-8 col-xl-4'>Submit</button>
            </div>
          </div>

          </div>

        </div>
      </div>
    );
  };
   
  export default contactus;