import { useRef, useEffect } from 'react';
// import usePhoto from './usePhoto';

const useCanvas = (draw) => {
    const canvasRef = useRef(null);
    // const videoRef = useRef(null);
    // const videoRef = usePhoto()

    useEffect(()=>{
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const textPos = [ctx.canvas.width/2, ctx.canvas.height*0.8];
        let text_Pos = textPos;
        const imgPos1 = [ctx.canvas.width*0.7, ctx.canvas.height*0.4];
        let img_Pos1 = imgPos1;
        const imgPos2 = [ctx.canvas.width*0.7, ctx.canvas.height*0.04];
        let img_Pos2 = imgPos2;
        const imgPos3 = [ctx.canvas.width*0.28, ctx.canvas.height*0.03];
        let img_Pos3 = imgPos3;
        const imgPos4 = [ctx.canvas.width*0.1, ctx.canvas.height*0.6];
        let img_Pos4 = imgPos4;
        const imgPos5 = [0, 0];
        let img_Pos5 = imgPos5;

        let imgPositions = {img_Pos1, img_Pos2, img_Pos3, img_Pos4, img_Pos5};

        const render = () => {
            draw(ctx, text_Pos, imgPositions);
        }
        render();
    }, [draw]);

    return canvasRef;
}

export default useCanvas;