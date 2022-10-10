import React from "react";
import { render, screen } from "@testing-library/react"
import { renderer } from "react-test-renderer";

import App from "./App";

describe("App", () => {
    test ('renders App Component', () => {
        const tree = renderer
        .create(<App />)
        .toJSON()
        // render(<App />);
        // screen.getByText('Search:');
        // screen.debug();
        // expect(screen.getByText('Tombol')).toBeInTheDocument();
        expect(tree).toMatchSnapshot();
    })
})