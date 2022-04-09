import React from 'react';
import { useRef, useEffect, useState } from 'react';
import useCanvas from './useCanvas';

function Canvas(props) {
    const {draw, ...rest } = props;
    const canvasRef = useCanvas(draw);

    // ! To Move
    const videoRef = useRef(null);
    const getVideo = () => {
        // Get stream from webcam
        navigator.mediaDevices.getUserMedia({ video: {width: 800, height: 450}})
        .then(stream => {
            let video = videoRef.current;
            video.srcObject = stream;
            video.play();
        })
        .catch(err => {
            console.error(err);
        });
    }
    
    const takePhoto = () => {
        let width = 800;
        let height = 450;
        let video = videoRef.current;
        let canvas = canvasRef.current;
        let ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, width, height);
    }
    useEffect(() => {
        getVideo()
    }, [videoRef]);

    return(
        <div className="feedSection">
            <section className="photoFeedSect">
                <article id="feeds">
                    <div className="playerDiv">
                        <h2 className="photoBoothTitle centerText">Camera Feed</h2>
                        <video id="camera"className="player"
                        ref={videoRef}></video>
                    </div>
                    <div className="playerDiv">
                        <h2 className="photoBoothTitle centerText">Effects Feed</h2>
                        <canvas id="canvas" className="photo"
                        width="800" height="450"
                        ref={canvasRef} {...rest}></canvas>
                    </div>
                </article>
            </section>
            <section className="buttonHolder">
                <button id="camButton" onClick={takePhoto}>Take a Picture!</button>
            </section>
        </div>
    )
}

export default Canvas;