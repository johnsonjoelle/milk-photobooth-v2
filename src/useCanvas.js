import { useRef, useEffect } from 'react';

const useCanvas = (draw) => {
    const canvasRef = useRef(null);

    useEffect(()=>{
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let frameCount = 0;
        let animationFrameId;// Default Variables
        const textPos = [ctx.canvas.width/2, ctx.canvas.height*0.8];
        let text_Pos = textPos;
        const render = () => {
            frameCount++;
            draw(ctx, frameCount, text_Pos);
            animationFrameId = window.requestAnimationFrame(render);
        }
        render();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        }
    }, [draw]);

    return canvasRef;
}

export default useCanvas;