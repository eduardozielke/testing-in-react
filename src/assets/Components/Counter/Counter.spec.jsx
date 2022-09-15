import userEvent from '@testing-library/user-event'
import { render, waitFor } from "@testing-library/react";
import Counter from "./Counter";

describe(Counter, () => {
    it('counter displays correct initial value', async () => {

        const { getByTestId, getByText } = render(<Counter initialValue={5}/>)
        const countValue = getByTestId('count').textContent
        const incrementButton = getByText('Increment')
        const decrementButton = getByText('Decrement')

        expect(countValue).toEqual("5")

        userEvent.click(incrementButton);
        
        await waitFor(()=> {
            expect(getByTestId('count').textContent).toEqual("6")
        })

        userEvent.click(decrementButton);

        await waitFor(()=> {
            expect(getByTestId('count').textContent).toEqual("5")
        })
    })
})