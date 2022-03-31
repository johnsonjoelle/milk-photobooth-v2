import {Link} from 'react-router-dom';
import milk from './milk.jpg';
import curd from './curd.jpg';
import winner from './winners-image01.jpg';
import './Slider.css';

function HomePage (){
    return(
        <main> 
            <div className="carousel " data-carousel> 
                <button className="carousel-button prev cBtnFamily" data-carousel-button="prev"> ⇦ </button>
                <button className="carousel-button next cBtnFamily" data-carousel-button="next"> ⇨ </button>
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
                    <div className="winnerSect1"> 
                        <h1 id="winnerTitle"> Winner this Week </h1>
                        <img className="winnerImg" src={winner} />
                    </div>
                    <div className="winnerSect2"> 
                        <h2 id="pictureHere"> Want To See Your Picture Here? </h2>
                        <p id="winnerPara"> 
                            Join our photobooth contest by completing the contest <a href="form.html">registration form</a> and then going to the photobooth page. Winners are chosen every week. <br/> This could be you!
                            <br/> 
                            Read up on the <Link to="/legal">terms and conditions</Link> here.
                        </p>
                    </div>
                    <div className="moveToPhotoBoothSect">
                        <p id="signInSect"> Already signed up, but don't see your picture here? Submit another photo! Every week is a new opportunity to win!</p>
                        <button id="goToPhotobooth">
                            <p id="arrow"> Arrowhere </p>
                            <h2 id="goToPhotoboothBtnText"> Go To Photobooth</h2>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default HomePage;