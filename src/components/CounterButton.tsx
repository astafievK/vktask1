import {useEffect, useState} from "react";
import {Counter} from "./Counter.tsx";
import {Loading} from "./Loading.tsx";
import appState from "../store.ts";
import {observer} from "mobx-react";

export const CounterButton = observer(() => {
    const {
        buttonSize,
        isCounterVisibilityEnabled
    } = appState;

    const [isLoading, setIsLoading] = useState(false);
    const [count, setCount] = useState(1)

    const handleButtonClick = () => {
        setIsLoading(true)
        setCount(count => count + 1);
    }

    const handleKeyPress = (e: KeyboardEvent) => {
        if (e.key.toLowerCase() === 'r' || e.key.toLowerCase() === 'к') {
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
            <button className={"counter-btn" + (isLoading ? " loading" : "") + ` size-${buttonSize}`}
                    onClick={handleButtonClick}
                    disabled={isLoading}
            >
                <div className="content">
                    <span className={"title"}>Что сделать</span>
                    {
                        isCounterVisibilityEnabled && <Counter count={count}/>
                    }
                </div>
                <span className="overlay"></span>
                {
                    isLoading && <Loading/>
                }
            </button>
        </>
    )
})
