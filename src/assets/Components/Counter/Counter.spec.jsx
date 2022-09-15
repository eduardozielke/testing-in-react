import { render } from "@testing-library/react";
import Counter from "./Counter";
import * as React from "react";

describe(Counter, () => {
    it('counter displays correct initial value', () => {

        const { getByTestId } = render(<Counter initialValue={5}/>)
        const countValue = getByTestId('count').textContent

        expect(countValue).toEqual("5")
    })
})