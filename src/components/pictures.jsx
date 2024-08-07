import React from 'react'
import pic1 from '../pictures/pic1.jpg';
import pic2 from '../pictures/pic2.jpg';
import pic3 from '../pictures/pic3.jpg';
import pic4 from '../pictures/pic4.jpg';
import pic5 from '../pictures/pic5.jpg';
import pic6 from '../pictures/pic6.jpg';
import pic7 from '../pictures/pic7.jpg';
import pic8 from '../pictures/pic8.jpg';
import pic9 from '../pictures/pic9.jpg';
import pic10 from '../pictures/pic10.jpg';

export default function Pictures() {
    const picArr = [pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9,pic10]
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                {picArr.map((_, index) => (
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index+1} aria-label={`Slide ${index + 2}`} key={index + 1}></button>
                ))}
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={pic1} className="d-block w-100 img-thumbnail shadow" alt="pic1" />
                </div>
                {picArr.map((pic, index) => (
                    <div className={"carousel-item"} key={index}>
                        <img src={pic} className="d-block w-100 img-thumbnail shadow" alt={`pic${index + 2}`} />
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
