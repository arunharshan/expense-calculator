import React from 'react';
import { MDBIcon } from 'mdbreact';
const About = () => {
  return (
    <div className='body-container about-container text-center pt-5'>
      <div className='container'>
        <div className='row  d-flex justify-content-center'>
          <div className='col-sm-12'>
            <h1 className='text-white'>Xpns App</h1>
            <p className='text-center text-muted'>
              Created on 9/27/2019 | version v-1.0.0 (alpha)
            </p>
            <p align='justify text-dark font-weight-bold mt-2'>
              This React.js/Redux ( non class but functional component ) demo
              app is developed using react version.16.9. Customer can login to
              the dashboard page and can perform Create-Update-Read-Delete(CURD)
              operations. User must login to see the dashboard page, since the
              dashboard is a protected page. The database is created using
              json-server ,<i>concurrently</i> bridges between database and
              react js app. <br />
              The react code and the Json API are deployed in the Heroku App.
              Code is in the{' '}
              <a
                href='https://github.com/arunharshan/expense-calculator'
                target='_blank'
              >
                GitHub page
              </a>
            </p>
          </div>
        </div>
        <div className='row d-flex justify-content-center mt-5'>
          <div className='col-sm-12'>
            <div className='card card-chart'>
              <div className='card-header'>
                <div className='row'>
                  <div className='col-sm-12 text-left'>
                    <h4 className='card-title'>
                      Languages and Frameworks For Programming
                    </h4>
                  </div>
                </div>
              </div>
              <div className='card-body text-left'>
                <ul>
                  <li>
                    <MDBIcon icon='check' className='text-info pr-3' />
                    React JS 16.9, Redux 4, React-Redux 7.1, Redux Thunk as
                    middleware, React-Router-Dom, Private Routing, React Hooks,
                    ES6, javascript
                  </li>
                  <li>
                    <MDBIcon icon='check' className='text-info pr-3' />
                    React Hooks- functional components instead of class based
                    components. [useState, useEffect,useSelector, useDispatch,
                    useRef etc...]
                  </li>
                  <li>
                    <MDBIcon icon='check' className='text-info pr-3' />
                    Deployment server - Heroku (for both API and react app)
                  </li>
                  <li>
                    <MDBIcon icon='check' className='text-info pr-3' />
                    Responsive design with Material-React-Bootstrap(mdbreact
                    library), google fonts.
                  </li>
                  <li>
                    <MDBIcon icon='check' className='text-info pr-3' />
                    Json-Server and Concurrently ver.4 for running local
                    database. UUID for generating unique Id
                  </li>
                  <li>
                    <MDBIcon icon='check' className='text-info pr-3' />
                    API calls using Axios / Async - Await promise methods
                  </li>
                  <li>
                    <MDBIcon icon='check' className='text-info pr-3' />
                    React router dom with Private/Protected/guard page.(you
                    can't visit the dashboard page with out login)
                  </li>
                  <li>
                    <MDBIcon icon='check' className='text-info pr-3' />
                    React Dev tools for debugging. VS code editor
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='row d-flex justify-content-center mt-5'>
          <div className='col-sm-12'>
            <div className='my-profile p-4'>
              <div className='round mb-3'>
                <img
                  className='img-fluid round profile-image'
                  src='../assets/Arun_Profile_Pic.jpg'
                  alt='arun harshan profile pic'
                />
              </div>

              <small className='d-block text-warning text-uppercase'>
                Sr. Web App developer | AEM-frontEnd | React Mobile App
              </small>
              <h4 className='mt-3 mb-3'>Arun Harshan</h4>
              <p>
                I love creating web apps! but apart from that, pretty simple
                person.
              </p>

              <ul className='list-inline mb-2'>
                <li className='list-inline-item'>
                  <a
                    className='btn round spcl-warning'
                    target='_blank'
                    href='https://github.com/arunharshan'
                  >
                    <span className='fab fa-github-alt'></span>
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a
                    className='btn round spcl-message'
                    target='_blank'
                    href='https://www.linkedin.com/in/arunharshan/'
                  >
                    <span className='fab fa-linkedin-in'></span>
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a
                    className='btn round spcl-danger'
                    target='_blank'
                    href='https://www.instagram.com/arunharshan/'
                  >
                    <span className='fab fa-instagram'></span>
                  </a>
                </li>
              </ul>
              <small className='d-block text-muted'>
                <span className='fas fa-envelope text-info pr-1'></span>{' '}
                <a href='mailto:harshan.arun@gmail.com' target='_blank'>
                  harshan.arun@gmail.com
                </a>
                <span className='fas fa-map-marker-alt text-danger pl-3 pr-1'></span>{' '}
                Dallas Texas
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
