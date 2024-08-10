import React from 'react';
import pic1 from '../pictures/pic1.webp';
import pic2 from '../pictures/pic2.webp';
import pic3 from '../pictures/pic3.webp';
import pic4 from '../pictures/pic4.webp';
import pic5 from '../pictures/pic5.webp';
import pic6 from '../pictures/pic6.webp';
import pic7 from '../pictures/pic7.webp';
import pic8 from '../pictures/pic8.webp';
import pic9 from '../pictures/pic9.webp';
import pic10 from '../pictures/pic10.webp';

export default function Pictures() {
    const picArr = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10];

    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {picArr.map((_, index) => (
                    <button 
                        type="button" 
                        data-bs-target="#carouselExampleIndicators" 
                        data-bs-slide-to={index} 
                        className={index === 0 ? 'active' : ''} 
                        aria-current={index === 0 ? 'true' : 'false'} 
                        aria-label={`Slide ${index + 1}`} 
                        key={index}
                    ></button>
                ))}
            </div>
            <div className="carousel-inner">
                {picArr.map((pic, index) => (
                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                        <img src={pic} className="d-block w-100 img-thumbnail shadow" alt={`pic${index + 1}`} loading="lazy" />
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
    );
}
