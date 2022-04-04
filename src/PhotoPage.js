import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import sticker1 from './img/sticker-1.png';
import sticker2 from './img/sticker-2.png';
import sticker3 from './img/sticker-3.png';
import sticker4 from './img/sticker-4.png';
import sticker5 from './img/sticker-5.png';

function PhotoPage(props){
    // Function to open and close the instructions panel
    const [isHidden, setHidden] = useState('false');
    function hideInstructions() {
        setHidden(!isHidden);
    }
    // Function to open and close the colour effects panel
    const [effectsHidden, hideEffects] = useState('false');
    function hideColorSliders() {
        hideEffects(!effectsHidden);
    }
    // Function to navigate to the form page
    const navigate = useNavigate();
    function goToForm(){
        navigate('/form');
    }
    // Function to tell if user needs to go to the form page
    function registerCheck(){
        console.log(props.isRegistered);
        if (props.isRegistered === true) {
            console.log("User has completed the form");
        } else {
            document.getElementById('formCheck').style.display="block";
        }
    }
    useEffect(() => {
        registerCheck();
    });

    return (
        <main className="page-container">
            <div className="photoPageContainer">
                <section className="controlsSect">
                    <article id="photoboothInstructions">
                        <h2 className="photoBoothTitle">Instructions</h2>
                        <ol className={`instructions-list ${isHidden ? "" : "hidden"}`} >
                            <li>You must have a webcam and give your browser permission to access your webcam in order to use this page.</li>
                            <li>Use the colour sliders or filter buttons to adjust the colour of your image.</li>
                            <li>Click on a sticker to add it to your image.</li>
                            <li>You can add text to your image by typing in the text field and this clicking the "Add Text" button.</li>
                            <li>To take your picture, click the "Take a Picture!" button.</li>
                            <li>To discard your edits, click the "Clear Effects" button.</li>
                            <li>When you are happy your image, click the "Submit" button to enter it into the contest!</li>
                        </ol>
                        <p className="instructions-hide" onClick={hideInstructions}>{isHidden ? "Hide" : "Show"}</p>
                    </article>
                    <article id="controls">
                        <form id="colorRangeHolder">
                            <h2 className="photoBoothTitle">Add Colour Effects To Your Photo!</h2>
                            <p className="effects-hide" onClick={hideColorSliders}>{effectsHidden ? "Hide" : "Show"}</p>
                            <fieldset className={`rgb ${effectsHidden ? "" : "hidden"}`}>
                                <label className="colorLabel" htmlFor="rmin">Red Min:</label>
                                <input type="range" min="0" max="255" name="rmin" />
                                <label className="colorLabel" htmlFor="rmax">Red Max:</label>
                                <input type="range" min="0" max="255" name="rmax" />
                            </fieldset>
                        
                            <fieldset className={`rgb ${effectsHidden ? "" : "hidden"}`}>
                                <label className="colorLabel" htmlFor="gmin">Green Min:</label>
                                <input type="range" min="0" max="255" name="gmin" />
                                <label className="colorLabel" htmlFor="gmax">Green Max:</label>
                                <input type="range" min="0" max="255" name="gmax" />
                            </fieldset>
                        
                            <fieldset className={`rgb ${effectsHidden ? "" : "hidden"}`}>
                                <label className="colorLabel" htmlFor="bmin">Blue Min:</label>
                                <input type="range" min="0" max="255" name="bmin" />
                                <label className="colorLabel" htmlFor="bmax">Blue Max:</label>
                                <input type="range" min="0" max="255" name="bmax" />
                            </fieldset>
                            <fieldset className="effects">
                                <h2 className="photoBoothTitle">Effects Selection</h2>
                                <div className="effectBtns">
                                    <input type="button" id="redEffect" value="red filter" />
                                    <input type="button" id="splitEffect" value="split filter" />
                                    <input type="button" id="greenScreenEffect" value="green screen" />
                                </div>
                            </fieldset>
                            <fieldset className="customText">
                                <h2 className="photoBoothTitle">Add Text to Your Photo</h2>
                                <input type="text" id="text-input" placeholder="Add text here" />
                                <input type="button" id="txt-btn" value="Add Text"></input>
                            </fieldset>
                        </form>
                        <div className="stickerHolder">
                            <h2 className="photoBoothTitle">Select a sticker to add to your photo!</h2>
                            <div id="stickerTray">
                                <img src={sticker1} alt="daisy crown cow" data-id="sticker1" />
                                <img src={sticker2} alt="moon farms moon" data-id="sticker2" />
                                <img src={sticker4} alt="cow with milk" data-id="sticker4" />
                                <img src={sticker5} alt="cow sleeping on moon" data-id="sticker5" />
                                <img src={sticker3} alt="moon farms text graphic" data-id="sticker3" />
                            </div>
                        </div>
                    </article>
                </section>
                <div className="feedSection">
                    <section className="photoFeedSect">
                        <article id="feeds">
                            <div className="playerDiv">
                                <h2 className="photoBoothTitle centerText">Camera Feed</h2>
                                <video className="player"></video>
                            </div>
                            <div className="playerDiv">
                                <h2 className="photoBoothTitle centerText">Effects Feed</h2>
                                <canvas className="photo"></canvas>
                            </div>
                        </article>
                    </section>
                    <section className="buttonHolder">
                        <button id="camButton">Take a Picture!</button>
                        <button id="resetButton">Clear Effects</button>
                        <div id="submitHolder">
                        <button id="submitImgButton">Submit Photo</button>
                        </div>
                    </section>
                    <section className="stripHolder"> 
                        <h2 className="photoBoothTitle">Select your chosen photo and click submit!</h2>
                        <div className="strip"></div>
                    </section>
                </div>
                <article className='modal' id="formCheck">
                    <div className='modalContent'>
                        <p>You must complete the form to participate in the contest.</p>
                        <input type="button" value="Go To Form" onClick={goToForm} />
                    </div>
                </article>
            </div>
            {/* <audio className="snap" src="images/snap.mp3" hidden></audio> */}
        </main>
    )
}
export default PhotoPage;