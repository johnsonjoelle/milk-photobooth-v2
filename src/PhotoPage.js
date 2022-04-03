function PhotoPage(){
    return (
        <main className="page-container">
            <div className="photoPageContainer">
                <section className="controlsSect">
                    <article id="photoboothInstructions">
                        <h2>Instructions</h2>
                    </article>
                    <article id="controls">
                        <form id="colorRangeHolder">
                            <h2 className="photoBoothTitle">Add Colour Effects To Your Photo!</h2>
                            <fieldset className="rgb">
                                <label className="colorLabel" htmlFor="rmin">Red Min:</label>
                                <input type="range" min="0" max="255" name="rmin" />
                                <label className="colorLabel" htmlFor="rmax">Red Max:</label>
                                <input type="range" min="0" max="255" name="rmax" />
                            </fieldset>
                        
                            <fieldset className="rgb">
                                <label className="colorLabel" htmlFor="gmin">Green Min:</label>
                                <input type="range" min="0" max="255" name="gmin" />
                                <label className="colorLabel" htmlFor="gmax">Green Max:</label>
                                <input type="range" min="0" max="255" name="gmax" />
                            </fieldset>
                        
                            <fieldset className="rgb">
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
                            <div id="stickerTray"></div>
                        </div>
                    </article>
                </section>
                <section className="photoFeedSect">
                    <article id="feeds">
                        <div className="playerDiv">
                            <h2 className="photoBoothTitle centerText">Camera Feed</h2>
                            <video className="player"></video>
                        </div>
                        <div className="playerDiv">
                            <h2 className="photoBoothTitle centerText">Effected Feed</h2>
                            <canvas className="photo"></canvas>
                        </div>
                    </article>
                </section>
                <section className="buttonHolder">
                    <button id="camButton">Take a Picture!</button>
                    <button id="resetButton">Clear Effects</button>
                    <button id="submitImgButton">Submit Photo</button>
                </section>
                <section className="stripHolder"> 
                    <h2 className="photoBoothTitle">Select your chosen photo and click submit!</h2>
                    <div className="strip"></div>
                </section>
            </div>
            {/* <audio className="snap" src="images/snap.mp3" hidden></audio> */}
        </main>
    )
}
export default PhotoPage;