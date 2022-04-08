import React from 'react';
import { useRef, useEffect, useState } from 'react';
import useCanvas from './useCanvas';
import testVid from './test_Vid/gameplay.mp4';

function Canvas(props) {
    const {draw, ...rest } = props;
    const canvasRef = useCanvas(draw);

    // ! To Move
    const videoRef = useRef(null);
    // const photoRef = useRef(null);
    const [hasPhoto, setHasPhoto] = useState(false);
    const getVideo = () => {
        // navigator.mediaDevices.getUserMedia({ video: {width: 800, height: 450}})
        // .then(stream => {
        //     let video = videoRef.current;
        //     video.srcObject = stream;
        //     video.play()
        // })
        // .catch(err => {
        //     console.error(err);
        // });
        let video = videoRef.current;
        video.src = testVid;
        video.play();
    }
    useEffect(() => {
        getVideo();
    }, [videoRef]);

    // const takePhoto = () => {
    //     const width = 800;
    //     const height = 450;
    //     let video = videoRef.current;
    //     let photo = photoRef.current;
    //     photo.width = width;
    //     photo.height = height;

    // }

    return(
        <section className="photoFeedSect">
            <article id="feeds">
                <div className="playerDiv">
                    <h2 className="photoBoothTitle centerText">Camera Feed</h2>
                    <video id="camera"className="player"
                    // width="800" height="450" autoPlay muted loop
                    ref={videoRef}></video>
                </div>
                <div className={"playerDiv" + (hasPhoto ? "hasPhoto" : "")}>
                    <h2 className="photoBoothTitle centerText">Effects Feed</h2>
                    <canvas id="canvas" className="photo"
                    ref={canvasRef} {...rest}></canvas>
                </div>
            </article>
        </section>
    )
}

export default Canvas;