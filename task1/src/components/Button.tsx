import {FC, useEffect, useState} from "react";
import Counter from "./Counter.tsx";

interface CounterButtonProps{
    buttonSize: number
    counterSize: number
    isPulseAnimationActive: boolean
}

export const CounterButton: FC<CounterButtonProps> = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [count, setCount] = useState(1)

    const handleButtonClick = () => {
        setIsLoading(true)
        setCount(count + 1);
    }

    const handleKeyPress = (event: KeyboardEvent) => {
        if (event.key.toLowerCase() === 'r') {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        window.addEventListener('keypress', handleKeyPress);

        return () => {
            window.removeEventListener('keypress', handleKeyPress);
        };

    }, [count]);

    return (
        <>
            <button className={"counter-btn" + (isLoading ? " loading" : "") + ` size-${props.buttonSize}`}
                    onClick={handleButtonClick}
                    disabled={isLoading}
            >
                <div className="content">
                    <span className={"title"}>Что сделать</span>
                    <Counter count={count} size={props.counterSize} isAnimationActive={props.isPulseAnimationActive}/>
                </div>
                <span className="overlay"></span>
                {
                    isLoading &&
                    <>
                        <div className="loader-circle"></div>
                        <div className="shimmer"></div>
                    </>
                }
            </button>
        </>
    )
}
