import React from 'react';
import Navbar from '../components/navbar';
import Background from '/Users/lukaeric/Desktop/rhetora/rhetora/rhetoralandingpage/src/assets/Hero-lines.svg';
import HubspotForm from 'react-hubspot-form';

const join = () => {

    return (
      <div>
        <Navbar/>
        <div style={{height: "100vh", backgroundImage: `url(${Background})`,  backgroundSize: "cover"}}>
          <div className='d-flex justify-content-center'>
          <div className='col-8 w mt-5 d-flex justify-center flex-column'>
            <h1 className='tc mt-5'>rhetora is <br></br>Launching Soon</h1>
            <p className='tc'>Designed by sales professionals, for sales professionals.</p>
            <div id='cinputdiv' className=''>
            <HubspotForm
            portalId='22700288'
            formId='5d003db2-c7e7-4230-b51f-cf526b584d4b'
            onSubmit={() => console.log('Submit!')}
            onReady={(form) => console.log('Form ready!')}
            loading={<div>Loading...</div>}
            />
            {/* <input id='heroinput-join' className='col-lg-8 col-xl-6' placeholder='Name'></input>
            <input id='heroinput-join' className='col-lg-8 col-xl-6' placeholder='Company Name'></input>
            </div>
            <div id='cinputdiv'>
            <input id='heroinput' className='row-10 col-lg-8 col-xl-9' placeholder='Email'></input>
            <button id='herobtn' className='row-10 col-lg-8 col-xl-3'>Get Early Access</button>
            </div> */}
          </div>

          </div>

        </div>
      </div>
      </div>
    );
  };
   
  export default join;