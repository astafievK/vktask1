import {FC} from "react";
import appState from "../store.ts";
import {observer} from "mobx-react";

interface ICounterProps{
    count: number
}

export const Counter: FC<ICounterProps> = observer((props) => {
    const {
        counterSize,
        isAnimationActive
    } = appState;

    const shownCount = props.count > 99 ? "99+" : props.count

    const isAnimationWorking = (): boolean => {
        return (!(counterSize === 8 || counterSize === 12) && isAnimationActive)
    }

    return (
        <div className={`counter size-${counterSize}`}>
            {
                !(counterSize === 8 || counterSize === 12) && <div className="dot">{shownCount}</div>
            }
            {
                isAnimationWorking() &&
                <>
                    <div className="pulse first"></div>
                    <div className="pulse second"></div>
                </>
            }

        </div>
    )
})