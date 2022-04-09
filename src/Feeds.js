import React from 'react';
import { useRef, useEffect } from 'react';
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
    useEffect(() => {
        getVideo();
    }, [videoRef]);

    // const[vid, setVideo] = useState();
    // const takePhoto = () => {
    //     let video = videoRef.current;
    //     // setVideo(video);
    //     // const width = 800;
    //     // const height = 450;
    //     // ctx.canvas.width = width;
    //     //     ctx.canvas.height = height;
    //     // ctx.drawImage(video, 0, 0, width, height);
    //     // vid = video;
    // }

    return(
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
    )
}

export default Canvas;