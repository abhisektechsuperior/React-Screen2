import React from 'react'
import './index.js'
import Group from './Components/Group.js'
import Card from './Components/Card.js'
import Circle from './Components/Circle.js'
import Footer_Image from './Components/Footer_Image.js'
import img1 from './assets/logo.png'

const App = () => {
  return (
    <>
      <body className='body'>
        <div className="mainContainer container-fluid p-0 ">
          <div className="homeContainer container-fluid p-0 d-flex flex-column justify-content-between flex-wrap">
            <div className="navbarContainer bg-white m-0">
              <ul className="nav justify-content-evenly align-items-center">
                <li className="nav-item d-sm-block">
                  <a className="nav-link disabled" aria-current="page" href="#">HOME</a>
                </li>
                <li className="nav-item">
                  <div className="tiltedSquare">
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">EXPERIENCE</a>
                </li>
                <li className="nav-item">
                  <div className="tiltedSquare">
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#"><img className=""src={img1} alt="" /></a>
                </li>
                <li className="nav-item">
                  <div className="tiltedSquare">
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">QUESTIONS</a>
                </li>
                <li className="nav-item">
                  <div className="tiltedSquare">
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled">CONTACT</a>
                </li>
              </ul>
            </div>
            <div className="homeText d-flex justify-content-center align-items-center">
              <h1 className="display-2 pb-0 mx-1 mb-3 fw-bold text-white">ENJOY FREEDOM LAND</h1>
            </div>
            <div className="homeForm container-fluid bg-white w-75 align-self-center">
              <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <form className="row m-0 align-items-center py-5 p-0" action="">
                      <div className="col-11 align-items-center">
                        <div className="row m-0">
                          <div className="col-md-3 col-sm-10">
                            <select className="form-select border-0 border-bottom" aria-label="Default select example">
                              <option selected>Mauritius</option>
                              <option selected>Thar</option>
                              <option selected>Toyto Fortuner</option>
                            </select>
                          </div>
                          <div className="col-md-3 col-sm-10">
                            <select className="form-select border-0 border-bottom" aria-label="Default select example">
                              <option selected>24 Sep 2016</option>
                              <option selected>25 Sep 2016</option>
                              <option selected>26 Sep 2016</option>
                            </select>
                          </div>
                          <div className="col-md-3 col-sm-10">
                            <select className="form-select border-0 border-bottom" aria-label="Default select example">
                              <option selected>10 Oct 2016</option>
                              <option selected>11 Oct 2016</option>
                              <option selected>12 Oct 2016</option>
                            </select>
                          </div>
                          <div className="col-md-3 col-sm-10">
                            <select className="form-select border-0 border-bottom" aria-label="Default select example">
                              <option selected>5 Bedrooms</option>
                              <option selected>6 Bedrooms</option>
                              <option selected>7Bedrooms</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-1 col-sm-12">
                        <div className="arrow m-0 arrowButton justify-content-center align-items-center d-flex" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="bi bi-arrow m-0-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                          </svg>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="carousel-item">
                    <form className="row m-0 align-items-center py-5 p-0" action="">
                      <div className="col-11 align-items-center">
                        <div className="row m-0">
                          <div className="col-md-3 col-sm-10">
                            <select className="form-select border-0 border-bottom" aria-label="Default select example">
                              <option selected>Mauritius</option>
                              <option selected>Thaar</option>
                              <option selected>Toyto Fortuner</option>
                            </select>
                          </div>
                          <div className="col-md-3 col-sm-10">
                            <select className="form-select border-0 border-bottom" aria-label="Default select example">
                              <option selected>24 Sep 2016</option>
                              <option selected>25 Sep 2016</option>
                              <option selected>26 Sep 2016</option>
                            </select>
                          </div>
                          <div className="col-md-3 col-sm-10">
                            <select className="form-select border-0 border-bottom" aria-label="Default select example">
                              <option selected>10 Oct 2016</option>
                              <option selected>11 Oct 2016</option>
                              <option selected>12 Oct 2016</option>
                            </select>
                          </div>
                          <div className="col-md-3 col-sm-10">
                            <select className="form-select border-0 border-bottom" aria-label="Default select example">
                              <option selected>5 Bedrooms</option>
                              <option selected>6 Bedrooms</option>
                              <option selected>7Bedrooms</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-1 col-sm-12">
                        <div className="arrow m-0 arrowButton justify-content-center align-items-center d-flex" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="bi bi-arrow m-0-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                          </svg>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="vacationContainer container  my-5">
          <div className="row m-0 text-center m-0">
            <h1 className="m">See latest vacations ideas</h1>
            <div className="titleDesign d-flex justify-content-center my-3">
              <div className="tiltedSquare m-1 border border-1 border-black"data-bs-target="#carouselExampleslide" data-bs-slide="prev"></div>
              <div className="tiltedSquare m-1 border border-1 border-black" data-bs-target="#carouselExampleslide" data-bs-slide="next"></div>
              <div className="tiltedSquare m-1 border bg-black border-1 border-black"data-bs-target="#carouselExampleslide" data-bs-slide="next"></div>
              <div className="tiltedSquare m-1 border border-1 border-black"data-bs-target="#carouselExampleslide" data-bs-slide="next"></div>
              <div className="tiltedSquare m-1 border border-1 border-black"data-bs-target="#carouselExampleslide" data-bs-slide="next"></div>
            </div>
            <Group/> {/* You can edit the code from component folder file_name ('Group.js') */}
          </div>
        </div>
        <div className="holidayLocationContainer container-fluid p-0 my-5">
          <div className="row m-0 text-center m-0">
            <h1>Recent holiday locations</h1>
            <div className="titleDesign d-flex justify-content-center">
              <div className="tiltedSquare m-1 border border-1 border-black"></div>
              <div className="tiltedSquare m-1 border border-1 border-black"></div>
              <div className="tiltedSquare m-1 border bg-black border-1 border-black"></div>
              <div className="tiltedSquare m-1 border border-1 border-black"></div>
              <div className="tiltedSquare m-1 border border-1 border-black"></div>
            </div>
          </div>
        </div>
        <Card/>  {/* You can edit the code from component folder file_name ('Card.js') */}
 <br /><br />
        <div className="whyCotainer container-fluid p-0 my-5">
          <div className="row m-0 text-center m-0">
            <h1 className="">Why We Are Different</h1>
            <div className="titleDesign d-flex justify-content-center my-3">
              <div className="tiltedSquare m-1 border border-1 border-black" data-bs-target="#carouselExampleControls" data-bs-slide="prev"></div>
              <div className="tiltedSquare m-1 border border-1 border-black" data-bs-target="#carouselExampleControls" data-bs-slide="next"></div>
              <div className="tiltedSquare m-1 border bg-black border-1 border-black" data-bs-target="#carouselExampleControls" data-bs-slide="next"></div>
              <div className="tiltedSquare m-1 border border-1 border-black" data-bs-target="#carouselExampleControls" data-bs-slide="next"></div>
              <div className="tiltedSquare m-1 border border-1 border-black" data-bs-target="#carouselExampleControls" data-bs-slide="next"></div>
            </div>
   <Circle/>  {/* You can edit the code from component folder file_name ('Circle.js') */}
          </div>
        </div>
  <Footer_Image/>  {/* You can edit the code from component folder file_name ('Footer-Image.js') */}
  <br />
      </body>
    </>
  )
}
export default App;