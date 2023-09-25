import React from 'react'
import img from '../assets/img2.png'
import kedarnath from '../assets/Kedarnath.jpg'
import gurgaon from '../assets/Gurgaon.jpg'
import Manali from '../assets/Manali.jpg'
import Goa from '../assets/Goa.jpg'
import kailash from '../assets/kailash.jpg'
import iland from '../assets/iland.webp'
import forest from '../assets/forest.webp'
import love from '../assets/lov.jpg'
import umbrella from '../assets/umbrella.jpg'
import note from '../assets/notepad.jpg'

const Card = () => {
  return (
    <>
      <div className='group-row d-flex m-0 row m-0 justify-content-center m-2 '>
        <div className="row m-1 row  justify-content-evenly m-0 d-flex">
          <div className='row justify-content-evenly'>
          <div className="card-col-md-2 col-sm-8 m-2">
            <div className="row m-2 ">
              <div className="col-md-6 col-sm-8 p-0 mx-0">
                <div className="locationManImage">
                  <img className='img-edit' src={kedarnath} alt="" />
                </div>
                <div className="row m-0">
                  <div className="col-4 p-0">
                    <img src={kailash} alt="" />
                  </div>
                  <div className="col-4 p-0">
                    <img src={kailash} alt="" />
                  </div>
                  <div className="col-4 p-0">
                    <img src={kailash} alt="" />
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-sm-6 bg-white align-items-stretch ">
                <div className="holidayName my-3">
                  <h3>Kedarnath Temple</h3>
                </div>
                <div className="locatoinDescription my-4">
                  <p>Om Namah Shivay ,Kedarnath is the sign or temple of Mahadev . Everyone comes here and  praying
                     for make their life better.Kedarnath is an historical place, kedarnath is near by Himalaya . We can see the 
                     kailash Parvat from here that is place or sign of Mahadev.
                  </p>
                </div>
                <div className="holidayIcons row m-0 my-4">
                  <div className="col">
                    <img  src={umbrella} alt="" />
                  </div>
                  <div className="col">
                    <p>1</p>
                  </div>
                  <div className="col">
                    <img  src={note} alt="" />
                  </div>
                  <div className="col">
                    <p>2</p>
                  </div>
                  <div className="col-md-4">
                    <img className='img-card' src={img} alt="" />
                  </div>
                  <div className="col">
                    <p>3</p>
                  </div>
                  <div className="col">
                    <img src="assets/pool.png" alt="" />
                  </div>
                </div>
                <div className="locationBookButton row m-0 ">
                  <button className="btn btn-danger col-md-6 col-sm-4 rounded-5 ">BOOK NOW</button>
                </div>
              </div>
            </div>
          </div>
          
          {/* <div className="row m-0  d-flex justify-content-center p-0"> */}
          <div className="card-col-md-5 col-sm-8 m-2 align-items-stretch d-flex  ">
            <div className="row m-2">
              <div className="col-md-6 col-sm-8 p-0 mx-0">
                <div className="locationManImage">
                  <img className='img-edit' src={Manali} alt="" />
                </div>
                <div className="row m-0">
                  <div className="col-4 p-0">
                    <img src={forest} alt="" />
                  </div>
                  <div className="col-4 p-0">
                    <img src={forest} alt="" />
                  </div>
                  <div className="col-4 p-0">
                    <img src={forest} alt="" />
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-sm-6 bg-white">
                <div className="holidayName my-3">
                  <h3>Kullu Manali</h3>
                </div>
                <div className="locatoinDescription my-4">
                  <p>Welcome to Kullu Manali , This is an mountain area . Here we can se more 
                    and more ice-mountain . This is really very coolest area. everyone choose this place 
                    for enjoying their holidays.
                  </p>
                </div>
                <div className="holidayIcons row m-0 my-4">
                  <div className="col">
                    <img src={umbrella} alt="" />
                  </div>
                  <div className="col">
                    <p>1</p>
                  </div>
                  <div className="col">
                    <img src={note} alt="" />
                  </div>
                  <div className="col">
                    <p>2</p>
                  </div>
                  <div className="col-md-4">
                    <img className='img-card' src={img} alt="" />
                  </div>
                  <div className="col">
                    <p>3</p>
                  </div>
                  <div className="col">
                    <img src="assets/pool.png" alt="" />
                  </div>
                </div>
                <div className="locationBookButton row m-0">
                  <button className="btn btn-danger col-md-6 col-sm-4 rounded-5 ">BOOK NOW</button>
                </div>
              </div>
            </div>
          </div>
          
          {/* </div> */}
        
        {/* <div className="row m-2 d-lg-flex justify-content-center p-0 align-items-stretch d-flex "> */}
          <div className="card-col-md-5 col-sm-8 m-2 align-items-stretch d-flex  ">
            <div className="row m-2">
              <div className="col-md-6 col-sm-8 p-0 mx-0">
                <div className="locationManImage">
                  <img className='img-edit' src={Goa} alt="" />
                </div>
                <div className="row m-0">
                  <div className="col-4 p-0">
                    <img src={iland} alt="" />
                  </div>
                  <div className="col-4 p-0">
                    <img src={iland} alt="" />
                  </div>
                  <div className="col-4 p-0">
                    <img src={iland} alt="" />
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-sm-6 bg-white">
                <div className="holidayName my-3">
                  <h3>Goa City</h3>
                </div>
                <div className="locatoinDescription my-4">
                  <p>Welcome to Goa , This is an very good place for holidays . Here you can enjoy 
                    your holidays life.you can swimming here Goa Beech.This is an beautifull place 
                    for enjoyement.This is cool place for enjoying holidays.
                  </p>
                </div>
                <div className="holidayIcons row m-0 my-4">
                  <div className="col">
                    <img src={note} alt="" />
                  </div>
                  <div className="col">
                    <p>1</p>
                  </div>
                  <div className="col">
                    <img src={umbrella} alt="" />
                  </div>
                  <div className="col">
                    <p>2</p>
                  </div>
                  <div className="col-md-4">
                    <img className='img-card' src={img} alt="" />
                  </div>
                  <div className="col">
                    <p>3</p>
                  </div>
                  <div className="col">
                    <img src="assets/pool.png" alt="" />
                  </div>
                </div>
                <div className="locationBookButton row m-0">
                  <button className="btn btn-danger col-md-6 col-sm-4 rounded-5 ">BOOK NOW</button>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row m-0  d-flex justify-content-center p-0"> */}
          <div className="card-col-md-5 col-sm-8 m-2 align-items-stretch d-flex ">
            <div className="row m-2">
              <div className="col-md-6 col-sm-8 p-0 mx-0">
                <div className="locationManImage">
                  <img className='img-edit' src={gurgaon} alt="" />
                </div>
                <div className="row m-0">
                  <div className="col-4 p-0">
                    <img src={love} alt="" />
                  </div>
                  <div className="col-4 p-0">
                    <img src={love} alt="" />
                  </div>
                  <div className="col-4 p-0">
                    <img src={love} alt="" />
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-sm-6 bg-white">
                <div className="holidayName my-3">
                  <h3>Gurgaon City (Haryana)</h3>
                </div>
                <div className="locatoinDescription my-4">
                  <p>Gurugaon is Very beautifull city. This is an Haryana NCR city Here we can find many job or apportunity
                  for our success life.</p>
                </div>
                <div className="holidayIcons row m-0 my-4">
                  <div className="col">
                    <img src={note} alt="" />
                  </div>
                  <div className="col">
                    <p>1</p>
                  </div>
                  <div className="col">
                    <img src={umbrella} alt="" />
                  </div>
                  <div className="col">
                    <p>2</p>
                  </div>
                  <div className="col-md-4">
                    <img className='img-card' src= {img} alt="" />
                  </div>
                  <div className="col">
                    <p>3</p>
                  </div>
                  <div className="col">
                    <img src="assets/pool.png" alt="" />
                  </div>
                </div>
                <div className="locationBookButton row m-0">
                  <button className="btn btn-danger col-md-6 col-sm-4 rounded-5 ">BOOK NOW</button>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        {/* </div> */}
        </div>
        </div>
      </div>

    </>
  )
}

export default Card;