import { observer } from 'mobx-react';
import appState from "../store.ts";

export const FilterContentGroup = observer(() => {
    const {
        isContentGroupBorderEnabled,
        selectedStyle,
        setIsContentGroupBorderEnabled,
        setSelectedStyle,
    } = appState;

    return (
        <>
            <div className="filters-elem filters-group">
                <span className="filter-title">Content group</span>
                <div className="filters-elem__group">
                    <span className="group-title">Stroke</span>
                    <form className={"form"}>
                        <p className={"filter"}>
                            <input type={"radio"} id={"contentGroupStrokeTrue"} value={'true'}
                                   checked={isContentGroupBorderEnabled}
                                   onChange={() => setIsContentGroupBorderEnabled(true)}
                            />
                            <label htmlFor={"contentGroupStrokeTrue"}>true</label>
                        </p>
                        <p className={"filter"}>
                            <input type={"radio"} id={"contentGroupStrokeFalse"} value={'false'}
                                   checked={!isContentGroupBorderEnabled}
                                   onChange={() => setIsContentGroupBorderEnabled(false)}
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
                                   onChange={() => setSelectedStyle('primary')}
                            />
                            <label htmlFor={"counterStylePrimary"}>primary</label>
                        </p>
                        <p className={"filter"}>
                            <input type={"radio"} id={"counterStyleSecondary"} value={'secondary'}
                                   checked={selectedStyle === 'secondary'}
                                   onChange={() => setSelectedStyle('secondary')}
                            />
                            <label htmlFor={"counterStyleSecondary"}>secondary</label>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
})