import { observer } from 'mobx-react';
import appState from "../store.tsx";

const data = [
    {
        value: 28
    },
    {
        value: 36
    },
    {
        value: 56
    },
]

export const FilterButton = observer(() => {
    const {
        buttonSize,
        setButtonSize,
    } = appState;

    return (
        <>
            <div className="filters-elem filters-button">
                <span className="filter-title">ButtonCounter</span>
                <div className="filters-elem__group">
                    <span className="group-title">Size</span>
                    <form className={"form"}>
                        {data.map((filter) => (
                            <p className={"filter"} key={filter.value}>
                                <input
                                    type="radio"
                                    id={`buttonSize${filter.value}`}
                                    value={filter.value}
                                    checked={buttonSize === filter.value}
                                    onChange={() => setButtonSize(filter.value)}
                                />
                                <label htmlFor={`buttonSize${filter.value}`}>{filter.value}</label>
                            </p>
                        ))}
                    </form>
                </div>
            </div>
        </>
    )
})