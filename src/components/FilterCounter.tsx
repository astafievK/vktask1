import { observer } from 'mobx-react';
import appState from "../store.ts";

const data = [
    {
        value: 8
    },
    {
        value: 12
    },
    {
        value: 16
    },
    {
        value: 20
    },
    {
        value: 24
    }
]

export const FilterCounter = observer(() => {
    const {
        counterSize,
        setCounterSize,
        isAnimationActive,
        isCounterVisibilityEnabled,
        setIsAnimationActive,
        setIsCounterVisibilityEnabled
    } = appState;

    return (
        <>
            <div className="filters-elem filters-counter">
                <span className="filter-title">Counter</span>
                <div className="filters-elem__group">
                    <span className="group-title">Size</span>
                    <form className={"form"}>
                        {
                            data.map((filter) => (
                                <p className={"filter"}>
                                    <input type={"radio"} id={`counterSize${filter.value}`} value={filter.value}
                                           checked={counterSize === filter.value}
                                           onChange={(e) => setCounterSize(parseInt(e.target.value))}
                                    />
                                    <label htmlFor={`counterSize${filter.value}`}>{filter.value}</label>
                                </p>
                            ))
                        }
                    </form>
                </div>
                <div className="filters-elem__group">
                    <span className="group-title">Pulse</span>
                    <form className={"form"}>
                        <p className={"filter"}>
                            <input type={"radio"} id={"counterPulseTrue"} value={'true'}
                                   checked={isAnimationActive}
                                   onChange={() => setIsAnimationActive(true)}
                            />
                            <label htmlFor={"counterPulseTrue"}>true</label>
                        </p>

                        <p className={"filter"}>
                            <input type={"radio"} id={"counterPulseFalse"} value={'false'}
                                   checked={!isAnimationActive}
                                   onChange={() => setIsAnimationActive(false)}
                            />
                            <label htmlFor={"counterPulseFalse"}>false</label>
                        </p>
                    </form>
                </div>
                <div className="filters-elem__group">
                    <span className="group-title">Visibility</span>
                    <form className={"form"}>
                        <p className={"filter"}>
                            <input type={"radio"} id={"counterVisibilityTrue"} value={'true'}
                                   checked={isCounterVisibilityEnabled}
                                   onChange={() => setIsCounterVisibilityEnabled(true)}
                            />
                            <label htmlFor={"counterVisibilityTrue"}>true</label>
                        </p>

                        <p className={"filter"}>
                            <input type={"radio"} id={"counterVisibilityFalse"} value={'false'}
                                   checked={!isCounterVisibilityEnabled}
                                   onChange={() => setIsCounterVisibilityEnabled(false)}
                            />
                            <label htmlFor={"counterVisibilityFalse"}>false</label>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
})