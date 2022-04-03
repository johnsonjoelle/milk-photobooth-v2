import { Link } from 'react-router-dom';
import milk from './img/milk.jpg';
import curd from './img/curd.jpg';
import winner from './img/justin-luebke-tmtizwShVRo-unsplash.jpg';
import './Slider.css';
import React from 'react';

function HomePage() {
    function changeSlide(e) {
        const button = e.target;
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button.closest("[data-carousel]").querySelector('[data-slides]');

        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    }

    return(
        <main className="page-container"> 
            <div className="carousel " data-carousel> 
                <div id="size-control"><img src={milk} alt="" /></div>
                <button className="carousel-button prev cBtnFamily" data-carousel-button="prev" onClick={changeSlide}> ⇦ </button>
                <button className="carousel-button next cBtnFamily" data-carousel-button="next" onClick={changeSlide}> ⇨ </button>
                <ul data-slides> 
                    <li className="slide card" data-active> 
                        <img src={milk} alt="Milk Glass Slider" /> 
                    </li>
                    <li className="slide card"> 
                        <img src={curd} alt="Milk Cheese Curds" />
                    </li>
                </ul>
            </div>

            <div className="aboutUsSect">
                <h1 id="aboutUs"> About Us </h1>
                <div className="aboutUsContent"> 
                    <p className="aboutUsPara"> 
                        Moon Milk has been a part of Canada's Dairy industry for the last 50 years. Since our formation, we have become a household name for our fresh and delicious dairy products. Including milk, cheese curds, creamer and more. Our focus has always been on maintaining a high-quality standard for our products.
                    </p>
                </div>
            </div>  

            <div className="photoBoothSect">
                <h1 id="photoBooth"> Photobooth Contest! </h1>
                <div className="photoBoothContent"> 
                    <p className="photoBoothPara"> 
                        We are organising a photobooth game for all our customers to add a little fun in their life. We hope you all enjoy our little adventure.
                    </p>
                </div>

                <div className="winnerSect"> 
                    <h1 id="winnerTitle"> Winner this Week </h1>
                    <div className="winnerSect1"> 
                        <img className="winnerImg" src={winner} alt="Weekly winner" />
                    </div>
                    <div className="winnerSect2"> 
                        <h2 id="pictureHere"> Want To See Your Picture Here? </h2>
                        <p>Join our photobooth contest by completing the contest <Link to="/form">registration form</Link> and then going to the photobooth page. Winners are chosen every week. </p>
                        <p>This could be you!</p>
                        <p>Read up on the <Link to="/legal">terms and conditions</Link> here.</p>
                    </div>
                    <div className="moveToPhotoBoothSect">
                        <p id="signInSect"> Already signed up, but don't see your picture here? Submit another photo! Every week is a new opportunity to win!</p>
                        <Link to="/photobooth" id="goToPhotobooth">
                            <div id="arrow">
                                <p>&rarr;</p>
                            </div>
                            <h2 id="goToPhotoboothBtnText"> Go To Photobooth</h2>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default HomePage;