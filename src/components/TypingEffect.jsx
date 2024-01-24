import React, { useEffect, useRef, useState } from 'react';

function TypingEffect(textForEffect, typingIntervalTime) {
    const [currentPos, setCurrentPos] = useState(0);
    const currentPosRef = useRef(0);

    useEffect(() => {
        const textLength = textForEffect ? textForEffect.length : 0;

        const intervalID = setInterval(() => {
            setCurrentPos((value) => value + 1);
            currentPosRef.current += 1;
            if (currentPosRef.current > textLength) {
                clearInterval(intervalID);
            }
        }, typingIntervalTime);

        return () => {
            clearInterval(intervalID);
            currentPosRef.current = 0;
            setCurrentPos(0);
        };
    }, [typingIntervalTime, textForEffect]);

    return <span>{textForEffect.substring(0, currentPos)}</span>;
}

export default TypingEffect;
