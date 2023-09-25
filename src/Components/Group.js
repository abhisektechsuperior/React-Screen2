import React from 'react'
import img1 from '../assets/grpiland.webp'
import img2 from '../assets/groupphoto3.webp'
import img3 from '../assets/tower.jpg'

const Group = () => {
    return (
        <>
            <div id="carouselExampleslide" class="carousel slide carousel-slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className="vacationRow m-0 row m-0 justify-content-evenly m-0">
                            <div className="card col-md-4 col-sm-10 border-0 m-2 m-sm-5 m-md-0">
                                <img className='grp-img' src={img1} alt="" />
                                <h3 className="caption carousel-caption bg-white text-black border border-1 border-black">Beachfont Escape</h3>
                            </div>
                            <div className="card col-md-4 col-sm-10 border-0 m-2 m-sm-2 m-md-0">
                                <img className='grp-img' src={img2} alt="" />
                                <h3 className="caption carousel-caption bg-white text-black border border-1 border-black">Group Holidays</h3>
                            </div>
                            <div className="card col-md-4 col-sm-10 border-0 m-2 m-sm-2 m-md-0">
                                <img className='grp-img' src={img3} alt="" />
                                <h3 className="caption carousel-caption bg-white text-black border border-1 border-black">City Breaks</h3>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="vacationRow m-0 row m-0 justify-content-evenly m-0">
                            <div className="card col-md-4 col-sm-10 border-0 m-2 m-sm-5 m-md-0">
                                <img className='grp-img' src={img1} alt="" />
                                <h3 className="caption carousel-caption bg-white text-black border border-1 border-black">Goa Beech</h3>
                            </div>
                            <div className="card col-md-4 col-sm-10 border-0 m-2 m-sm-2 m-md-0">
                                <img className='grp-img' src={img3} alt="" />
                                <h3 className="caption carousel-caption bg-white text-black border border-1 border-black">Holiday-Time </h3>
                            </div>
                            <div className="card col-md-4 col-sm-10 border-0 m-2 m-sm-2 m-md-0">
                                <img className='grp-img' src={img2} alt="" />
                                <h3 className="caption carousel-caption bg-white text-black border border-1 border-black">Goa City</h3>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="vacationRow m-0 row m-0 justify-content-evenly m-0">
                            <div className="card col-md-4 col-sm-10 border-0 m-2 m-sm-5 m-md-0">
                                <img className='grp-img' src={img3} alt="" />
                                <h3 className="caption carousel-caption bg-white text-black border border-1 border-black">Manali Tour</h3>
                            </div>
                            <div className="card col-md-4 col-sm-10 border-0 m-2 m-sm-2 m-md-0">
                                <img className='grp-img' src={img1} alt="" />
                                <h3 className="caption carousel-caption bg-white text-black border border-1 border-black">Manali View</h3>
                            </div>
                            <div className="card col-md-4 col-sm-10 border-0 m-2 m-sm-2 m-md-0">
                                <img className='grp-img' src={img2} alt="" />
                                <h3 className="caption carousel-caption bg-white text-black border border-1 border-black">Photoshop</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Group;