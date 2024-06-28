import { makeAutoObservable } from "mobx";

class AppState {
    buttonSize = 36;
    counterSize = 8;
    selectedStyle = 'primary';
    isAnimationActive = true;
    isContentGroupBorderEnabled = true;
    isCounterVisibilityEnabled = true;

    constructor() {
        makeAutoObservable(this);
    }

    setButtonSize = (size: number) => {
        this.buttonSize = size;
    }

    setCounterSize = (size: number) => {
        this.counterSize = size;
    }

    setSelectedStyle = (style: string) => {
        this.selectedStyle = style;
    }

    setIsAnimationActive = (isActive: boolean) => {
        this.isAnimationActive = isActive;
    }

    setIsContentGroupBorderEnabled = (isEnabled: boolean) => {
        this.isContentGroupBorderEnabled = isEnabled;
    }

    setIsCounterVisibilityEnabled = (isEnabled: boolean) => {
        this.isCounterVisibilityEnabled = isEnabled;
    }
}

const appState = new AppState();
export default appState;