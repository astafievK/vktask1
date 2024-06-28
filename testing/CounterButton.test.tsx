import {render, screen} from "@testing-library/react";
import {CounterButton} from "../src/components/CounterButton";

//оно не работает
describe('CounterButton', () => {
    it('CounterButton renders', () => {
        render(<CounterButton/>)

        expect(screen.getByText('html')).toBeInTheDocument();
    })
})