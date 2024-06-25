import {FC} from "react";

interface ICounterProps{
    count: number
    size: number
    isAnimationActive: boolean
}

export const Counter: FC<ICounterProps> = (props) => {
    const shownCount = props.count > 99 ? "99+" : props.count

    const isAnimationWorking = (): boolean => {
        return (!(props.size === 8 || props.size === 12) && props.isAnimationActive)
    }

    return (
        <div className={`counter size-${props.size}`}>
            {
                !(props.size === 8 || props.size === 12) && <div className="dot">{shownCount}</div>
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
}

export default Counter
