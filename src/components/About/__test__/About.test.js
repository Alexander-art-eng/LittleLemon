import { render, screen } from "@testing-library/react";
import About from "../About";

describe("About component", () => {

    test("renders the about section", () => {

        // test if the texts is rendered
        render(<About />);
        const heading = screen.getByText("Little Lemon");
        const paragraph = screen.getByText(/chicago/i);
        const aboutText = screen.getByText(/We are a family-owned Mediterranean restaurant/i);
        expect(heading).toBeInTheDocument();
        expect(paragraph).toBeInTheDocument();
        expect(aboutText).toBeInTheDocument();
    });

    // test if the images are rendered
    test("renders the images", () => {

        render(<About />);
        const image = screen.getByRole("img", { name: /little lemon sous chef pic/i });
        const images = screen.getByRole("img", { name: /little lemon chefs pic/i });
        expect(image).toBeInTheDocument();
        expect(images).toBeInTheDocument();
    });
});
