function PhotoPage(){
    return (
        <main className="page-container">
            <div class="controlsSect">
                <article id="controls">
                    <form id="colorRangeHolder">
                        <h2 class="photoBoothTitle">Add Colour Effects To Your Photo!</h2>
                        <fieldset class="rgb">
                            <label class="colorLabel" for="rmin">Red Min:</label>
                            <input type="range" min="0" max="255" name="rmin" />
                            <label class="colorLabel" for="rmax">Red Max:</label>
                            <input type="range" min="0" max="255" name="rmax" />
                        </fieldset>
                    
                        <fieldset class="rgb">
                            <label class="colorLabel" for="gmin">Green Min:</label>
                            <input type="range" min="0" max="255" name="gmin" />
                            <label class="colorLabel" for="gmax">Green Max:</label>
                            <input type="range" min="0" max="255" name="gmax" />
                        </fieldset>
                    
                        <fieldset class="rgb">
                            <label class="colorLabel" for="bmin">Blue Min:</label>
                            <input type="range" min="0" max="255" name="bmin" />
                            <label class="colorLabel" for="bmax">Blue Max:</label>
                            <input type="range" min="0" max="255" name="bmax" />
                        </fieldset>
                        <fieldset>
                            <h2 class="photoBoothTitle fullWidth">Effects Selection</h2>
                            <div class="effectBtns">
                                <input type="button" id="redEffect" value="red filter" />
                                <input type="button" id="splitEffect" value="split filter" />
                                <input type="button" id="greenScreenEffect" value="green screen" />
                            </div>
                        </fieldset>
                    </form>
                    <button id="camButton">Take a Picture!</button>
                </article>
            </div>
            <div class="photoFeedSect">
                <article id="feeds">
                    <div class="playerVideoDiv">
                        <h2 class="photoBoothTitle centerText">Camera Feed</h2>
                        <video class="player"></video>
                    </div>
                    <div class="playerPhotoDiv">
                        <h2 class="photoBoothTitle centerText">Effected Feed</h2>
                        <canvas class="photo"></canvas>
                    </div>
                </article>
            </div>
            <div class="stripHolder"> 
                <h1 class="photoBoothTitle"> Take a Picture and see it appear here!</h1>
                <div class="strip"></div>
            </div>
    
            {/* <audio class="snap" src="images/snap.mp3" hidden></audio> */}
        </main>
    )
}
export default PhotoPage;