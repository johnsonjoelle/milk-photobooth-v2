import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Feeds from './Feeds';
// import getPhoto from './getPhoto';
import sticker1 from './img/sticker-1.png';
import sticker2 from './img/sticker-2.png';
import sticker3 from './img/sticker-3.png';
import sticker4 from './img/sticker-4.png';
import sticker5 from './img/sticker-5.png';
import shutterAudio from './audio/snap.mp3';

function PhotoPage(props){
    // Function to open and close the instructions panel
    const [isHidden, setHidden] = useState('false');
    function hideInstructions() {
        setHidden(!isHidden);
    }
    // Function to navigate to the form or home page
    const navigate = useNavigate();
    function goToForm(){
        navigate('/form');
    }
    function goToHome(){
        navigate('../moonMilk/');
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

    // Canvas
    // Basic canvas setup from https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
    const draw = (ctx, text_Pos, imgPositions) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        addPhoto();
        addStickers(ctx, imgPositions);
        grabText(ctx, text_Pos);
        saveCanvas(ctx);
    }
    const [canvas, setCanvas] = useState();
    const [CTX, setCtx] = useState();
    const saveCanvas = (ctx) => {
        setCanvas(ctx.canvas);
        setCtx(ctx);
    }
    
    // Custom Text
    let text = new Text();
    const [txtInput, setCustomTxt] = useState("");
    function grabText(ctx, text_Pos) {
        text.string = txtInput;
        drawText(ctx, text_Pos);
    }
    function drawText(ctx, text_Pos) {
        ctx.font = '28px dry-cowboy';
        ctx.textAlign = 'center';
        let txtX = text_Pos[0];
        let txtY = text_Pos[1];
        ctx.fillText(text.string, txtX, txtY);
    }

    // Stickers
    let scale = 0.4;
    // Creating the stickers for canvas
    let stkr1 = new Image();
    stkr1.src = sticker1;
    let stkr2 = new Image();
    stkr2.src = sticker2;
    let stkr3 = new Image();
    stkr3.src = sticker3;
    let stkr4 = new Image();
    stkr4.src = sticker4;
    let stkr5 = new Image();
    stkr5.src = sticker5;
    // Setting up the useStates to add and remove the stickers
    const [img1, setImage1State] = useState(false);
    const [img2, setImage2State] = useState(false);
    const [img3, setImage3State] = useState(false);
    const [img4, setImage4State] = useState(false);
    const [img5, setImage5State] = useState(false);
    function setImg1() {
        setImage1State(!img1);
    }
    function setImg2() {
        setImage2State(!img2);
    }
    function setImg3() {
        setImage3State(!img3);
    }
    function setImg4() {
        setImage4State(!img4);
    }
    function setImg5() {
        setImage5State(!img5);
    }
    // Functions to draw each sticker
    function drawImg1(ctx, imgPositions) {
        let w = stkr1.width * scale;
        let h = stkr1.height * scale;
        let stkrX = imgPositions.img_Pos1[0];
        let stkrY = imgPositions.img_Pos1[1];
        if (img1===true) {
            ctx.drawImage(stkr1, stkrX, stkrY, w, h);
        }
    }
    function drawImg2(ctx, imgPositions) {
        let w = stkr2.width * scale;
        let h = stkr2.height * scale;
        let stkrX = imgPositions.img_Pos2[0];
        let stkrY = imgPositions.img_Pos2[1];
        if (img2===true) {
            ctx.drawImage(stkr2, stkrX, stkrY, w, h);
        }
    }
    function drawImg3(ctx, imgPositions) {
        let w = stkr3.width * scale;
        let h = stkr3.height * scale;
        let stkrX = imgPositions.img_Pos3[0];
        let stkrY = imgPositions.img_Pos3[1];
        if (img3===true) {
            ctx.drawImage(stkr3, stkrX, stkrY, w, h);
        }
    }
    function drawImg4(ctx, imgPositions) {
        let w = stkr4.width * scale;
        let h = stkr4.height * scale;
        let stkrX = imgPositions.img_Pos4[0];
        let stkrY = imgPositions.img_Pos4[1];
        if (img4===true) {
            ctx.drawImage(stkr4, stkrX, stkrY, w, h);
        }
    }
    function drawImg5(ctx, imgPositions) {
        let w = stkr5.width * scale;
        let h = stkr5.height * scale;
        let stkrX = imgPositions.img_Pos5[0];
        let stkrY = imgPositions.img_Pos5[1];
        if (img5===true) {
            ctx.drawImage(stkr5, stkrX, stkrY, w, h);
        }
    }
    // Function that is called by draw which sends values to useCanvas.js
    function addStickers(ctx, imgPositions) {
        drawImg1(ctx, imgPositions);
        drawImg2(ctx, imgPositions);
        drawImg3(ctx, imgPositions);
        drawImg4(ctx, imgPositions);
        drawImg5(ctx, imgPositions);
    }

    // Take Photo
    let photoTaken = false;
    const shutterSound = document.querySelector('.shutter');
    const takePhoto = () => {
        addPhoto();
        shutterSound.currentTime = 0;
        shutterSound.play();
        photoTaken = true;
    }
    const addPhoto = () => {
        const width = 800;
        const height = 450;
        // Print current frame of video to canvas
        // let video = vid;
        //     ctx.canvas.width = width;
        //     ctx.canvas.height = height;
        // CTX.drawImage(video, 0, 0, width, height);
        //     
        // }
    }

    // Save Canvas as Image
    const [img, saveImg] = useState();
    function savePhoto() {
        console.log("Saving Photo");
        const data = canvas.toDataURL('image/jpg');
        saveImg(data);
    }

    // Skill Testing Question on Image submit
    const [skillAnswer, setSkillAnswer] = useState("");
    const [skillError, setSkillError] = useState("");
    function skillTest() {
        if (photoTaken===true) {
            savePhoto();
            document.getElementById('skillQuestion').style.display="block";
        }
    }
    function checkAnswer() {
        if (skillAnswer==="4") {
            document.getElementById('skillQuestion').style.display="none";
            setSkillError("");
            checkWinner();
        } else {
            setSkillError("Try Again");
        }
    }

    // Function to check if they are a winner
    const [winnerMsg, changeWinnerMsg] = useState("Sorry, you didn't win.");
    const [winnerDetail, changeWinnerDetail] = useState("Try again next week!");
    function checkWinner() {
        // Everyone has a 2.5% chance to win
        const winChance = 0.025;
        let userRoll = Math.random();
        if (userRoll <= winChance) {
            changeWinnerMsg("Congrats! You are a winner!");
            changeWinnerDetail("Your image will be featured on our home page.");
            // Post on home page
            props.setWinningImg(img);
        }
        document.getElementById('photoSubmissionMsg').style.display = "block";
    }


    return (
        <main className="page-container">
            <div className="photoPageContainer">
                <section className="controlsSect">
                    <article id="photoboothInstructions">
                        <h2 className="photoBoothTitle">Instructions</h2>
                        <ol className={`instructions-list ${isHidden ? "" : "hidden"}`} >
                            <li>You must have a webcam and give your browser permission to access your webcam in order to use this page.</li>
                            <li>Click on a sticker to add it to, or remove it from, your image.</li>
                            <li>You can add text to your image by typing in the text field and this clicking the "Add Text" button.</li>
                            <li>To take your picture, click the "Take a Picture!" button.</li>
                            <li>When you are happy your image, click the "Submit" button to enter it into the contest!</li>
                        </ol>
                        <p className="instructions-hide" onClick={hideInstructions}>{isHidden ? "Hide" : "Show"}</p>
                    </article>
                    <article id="controls">
                        <form id="colorRangeHolder">
                            <fieldset className="customText">
                                <h2 className="photoBoothTitle">Add Text to Your Photo</h2>
                                <input type="text" id="text-input" placeholder="Add text here" onChange={(e) => setCustomTxt(e.target.value)} />
                            </fieldset>
                        </form>
                        <div className="stickerHolder">
                            <h2 className="photoBoothTitle">Select a sticker to add to your photo!</h2>
                            <div id="stickerTray">
                                <img src={sticker1} alt="daisy crown cow" data-id="sticker1" onClick={setImg1} />
                                <img src={sticker2} alt="moon farms moon" data-id="sticker2" onClick={setImg2} />
                                <img src={sticker4} alt="cow with milk" data-id="sticker4" onClick={setImg4} />
                                <img src={sticker5} alt="cow sleeping on moon" data-id="sticker5" onClick={setImg5} />
                                <img src={sticker3} alt="moon farms text graphic" data-id="sticker3" onClick={setImg3} />
                            </div>
                        </div>
                    </article>
                </section>
                <div className="feedSection">
                    <Feeds draw={draw} />
                    <section className="buttonHolder">
                        <button id="camButton" onClick={takePhoto}>Take a Picture!</button>
                        <button id="submitImgButton" onClick={skillTest}>Submit Photo</button>
                    </section>
                </div>
                <article className='modal' id="formCheck">
                    <div className='modalContent'>
                        <p>You must complete the form to participate in the contest.</p>
                        <input type="button" value="Go To Form" onClick={goToForm} />
                    </div>
                </article>
                <article className='modal' id="skillQuestion">
                    <div className='modalContent'>
                        <p>Answer the Question to Continue</p>
                        <label>
                            What is 2 + 2 = ?
                            <input type="text" id="skillInput" max="2" onChange={(e) => setSkillAnswer(e.target.value)} />
                        </label>
                        <p>{skillError}</p>
                        <input type="button" value="Continue" onClick={checkAnswer} />
                    </div>
                </article>
                <article className='modal' id="photoSubmissionMsg">
                    <div className='modalContent'>
                        <h3>{winnerMsg}</h3>
                        <p>{winnerDetail}</p>
                        <input type="button" value="Continue" onClick={goToHome} />
                    </div>
                </article>
            </div>
            <audio className="shutter" src={shutterAudio} hidden></audio>
        </main>
    )
}
export default PhotoPage;