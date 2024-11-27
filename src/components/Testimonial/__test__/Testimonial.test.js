import { render, screen } from "@testing-library/react";
import Testimonial from "../Testimonial";

describe("Testimonial", () => {

    test("renders the heading testimonials", () => {
        render(<Testimonial />);
        
        const heading = screen.getByRole("heading", {level: 2});
        expect(heading).toBeInTheDocument();
    });

    test("renders all testimonials", () => {
        
        render(<Testimonial />);

        // check if the section tile is rendered
        expect(screen.getByText(/testimonials/i)).toBeInTheDocument();

        // check if the right number of testimonial are rendered
        expect(screen.getAllByRole("heading", {level: 3})).toHaveLength(4);
        expect(screen.getAllByRole("img", {name: /testimonial profile/i})).toHaveLength(4);
    });

    test("renders the correct testimonial content", () => {

        render(<Testimonial />);

        // check if the testimonial content is rendered (at least one)
        expect(screen.getByText(/martha stewart/i)).toBeInTheDocument();
        expect(screen.getByText(/A perfect family-friendly spot!/i)).toBeInTheDocument();
        expect(screen.getByAltText(/martha stewart's rating/i)).toBeInTheDocument();
        expect(screen.getByAltText(/martha stewart's testimonial profile/i)).toBeInTheDocument();
    });
});