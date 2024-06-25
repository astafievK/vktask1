import './App.css'
import {CounterButton} from "./components/Button.tsx";
import {useState} from "react";

function App() {
    const [buttonSize, setButtonSize] = useState(36)
    const [counterSize, setCounterSize] = useState(8)
    const [selectedStyle, setSelectedStyle] = useState('primary')
    const [isAnimationActive, setIsAnimationActive] = useState(true)
    const [isContentGroupBorderEnabled, setIsContentGroupBorderEnabled] = useState(true)

    const pulseChangeHandle = (value: string) => {
        setIsAnimationActive(value.toLowerCase() === 'true');
    };

    const contentGroupStrokeChangeHandle = (value: string) => {
        setIsContentGroupBorderEnabled(value.toLowerCase() === 'true');
    };

    return (
        <>
            <div className="filters">
                <div className="filters-elem filters-group">
                    <span className="filter-title">Content group</span>
                    <div className="filters-elem__group">
                        <span className="group-title">Stroke</span>
                        <form className={"form"}>
                            <p className={"filter"}>
                                <input type={"radio"} id={"contentGroupStrokeTrue"} value={'true'}
                                       checked={isContentGroupBorderEnabled}
                                       onChange={(e) => contentGroupStrokeChangeHandle(e.currentTarget.value)}
                                />
                                <label htmlFor={"contentGroupStrokeTrue"}>true</label>
                            </p>
                            <p className={"filter"}>
                                <input type={"radio"} id={"contentGroupStrokeFalse"} value={'false'}
                                       checked={!isContentGroupBorderEnabled}
                                       onChange={(e) => contentGroupStrokeChangeHandle(e.currentTarget.value)}
                                />
                                <label htmlFor={"contentGroupStrokeFalse"}>false</label>
                            </p>
                        </form>
                    </div>
                    <div className="filters-elem__group">
                        <span className="group-title">Style</span>
                        <form className={"form"}>
                            <p className={"filter"}>
                                <input type={"radio"} id={"counterStylePrimary"} value={'primary'}
                                       checked={selectedStyle === 'primary'}
                                       onChange={(e) => setSelectedStyle(e.target.value)}
                                />
                                <label htmlFor={"counterStylePrimary"}>primary</label>
                            </p>
                            <p className={"filter"}>
                                <input type={"radio"} id={"counterStyleSecondary"} value={'secondary'}
                                       checked={selectedStyle === 'secondary'}
                                       onChange={(e) => setSelectedStyle(e.target.value)}
                                />
                                <label htmlFor={"counterStyleSecondary"}>secondary</label>
                            </p>
                        </form>
                    </div>
                </div>
                <div className="filters-elem filters-button">
                    <span className="filter-title">ButtonCounter</span>
                    <div className="filters-elem__group">
                        <span className="group-title">Size</span>
                        <form className={"form"}>
                            <p className={"filter"}>
                                <input type={"radio"} id={"buttonSize28"} value={28}
                                       checked={buttonSize === 28}
                                       onChange={(e) => setButtonSize(parseInt(e.target.value))}
                                />
                                <label htmlFor={"buttonSize28"}>28</label>
                            </p>
                            <p className={"filter"}>
                                <input type={"radio"} id={"buttonSize36"} value={36}
                                       checked={buttonSize === 36}
                                       onChange={(e) => setButtonSize(parseInt(e.target.value))}
                                />
                                <label htmlFor={"buttonSize36"}>36</label>
                            </p>
                            <p className={"filter"}>
                                <input type={"radio"} id={"buttonSize56"} value={56}
                                       checked={buttonSize === 56}
                                       onChange={(e) => setButtonSize(parseInt(e.target.value))}
                                />
                                <label htmlFor={"buttonSize56"}>56</label>
                            </p>
                        </form>
                    </div>
                </div>
                <div className="filters-elem filters-counter">
                    <span className="filter-title">Counter</span>
                    <div className="filters-elem__group">
                        <span className="group-title">Size</span>
                        <form className={"form"}>
                            <p className={"filter"}>
                                <input type={"radio"} id={"counterSize8"} value={8}
                                       checked={counterSize === 8}
                                       onChange={(e) => setCounterSize(parseInt(e.target.value))}
                                />
                                <label htmlFor={"counterSize8"}>8</label>
                            </p>

                            <p className={"filter"}>
                                <input type={"radio"} id={"counterSize12"} value={12}
                                       checked={counterSize === 12}
                                       onChange={(e) => setCounterSize(parseInt(e.target.value))}
                                />
                                <label htmlFor={"counterSize12"}>12</label>
                            </p>

                            <p className={"filter"}>
                                <input type={"radio"} id={"counterSize16"} value={16}
                                       checked={counterSize === 16}
                                       onChange={(e) => setCounterSize(parseInt(e.target.value))}
                                />
                                <label htmlFor={"counterSize16"}>16</label>
                            </p>

                            <p className={"filter"}>
                                <input type={"radio"} id={"counterSize20"} value={20}
                                       checked={counterSize === 20}
                                       onChange={(e) => setCounterSize(parseInt(e.target.value))}
                                />
                                <label htmlFor={"counterSize20"}>20</label>
                            </p>

                            <p className={"filter"}>
                                <input type={"radio"} id={"counterSize24"} value={24}
                                       checked={counterSize === 24}
                                       onChange={(e) => setCounterSize(parseInt(e.target.value))}
                                />
                                <label htmlFor={"counterSize24"}>24</label>
                            </p>
                        </form>
                    </div>
                    <div className="filters-elem__group">
                        <span className="group-title">Pulse</span>
                        <form className={"form"}>
                            <p className={"filter"}>
                                <input type={"radio"} id={"counterPulseTrue"} value={'true'}
                                       checked={isAnimationActive}
                                       onChange={(e) => pulseChangeHandle(e.currentTarget.value)}
                                />
                                <label htmlFor={"counterPulseTrue"}>true</label>
                            </p>

                            <p className={"filter"}>
                                <input type={"radio"} id={"counterPulseFalse"} value={'false'}
                                       checked={!isAnimationActive}
                                       onChange={(e) => pulseChangeHandle(e.currentTarget.value)}
                                />
                                <label htmlFor={"counterPulseFalse"}>false</label>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            <div className={`content-group ${selectedStyle === 'secondary' ? 'color-secondary' : ''}`}
                 style={isContentGroupBorderEnabled ? {border: '1px dashed #FF7700'} : {}}>
                <CounterButton buttonSize={buttonSize} counterSize={counterSize} isPulseAnimationActive={isAnimationActive}/>
            </div>
        </>
    )
}

export default App
