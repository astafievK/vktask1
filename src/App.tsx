import './App.css';
import {CounterButton} from "./components/Button.tsx";
import {FilterButton} from "./components/FilterButton.tsx";
import {FilterCounter} from "./components/FilterCounter.tsx";
import appState from "./store.tsx";
import {observer} from "mobx-react";
import React from "react";
import {FilterContentGroup} from "./components/FilterContentGroup.tsx";

const App: React.FC = observer(() => {
    const {
        isContentGroupBorderEnabled,
        selectedStyle
    } = appState;


    return (
        <>
            <div className="filters">
                <FilterContentGroup/>
                <FilterButton/>
                <FilterCounter/>
            </div>
            <div className={`content-group ${selectedStyle === 'secondary' ? 'color-secondary' : ''}`}
                 style={isContentGroupBorderEnabled ? {border: '1px dashed #FF7700'} : {}}>
                <CounterButton/>
            </div>
        </>
    )
})

export default App