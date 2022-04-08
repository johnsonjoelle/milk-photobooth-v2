import React from 'react';
import useCanvas from './useCanvas';

function Canvas(props) {
    const {draw, ...rest } = props;
    const canvasRef = useCanvas(draw);

    return(
        <section className="photoFeedSect">
            <article id="feeds">
                <div className="playerDiv">
                    <h2 className="photoBoothTitle centerText">Camera Feed</h2>
                    <video id="camera"className="player"></video>
                </div>
                <div className="playerDiv">
                    <h2 className="photoBoothTitle centerText">Effects Feed</h2>
                    <canvas id="canvas" className="photo"
                    ref={canvasRef} {...rest}
                    width="900px" height="600px"></canvas>
                </div>
            </article>
        </section>
    )
}

export default Canvas;