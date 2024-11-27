import { render, screen } from "@testing-library/react";
import TestimonialItem from "../TestimonialItem";

describe("Testimonial Items", () => {

    const props = {
        id: 1,
        name: "Martha Stewart",
        image: "martha pfofile pic.jpg",
        rating: "martha rating pic.jpg",
        review: "This is basically a test review"
    }

    test("renders testimonial details correctly", () => {

        render(<TestimonialItem {...props} />);

        // check if the name is rendered
        expect(screen.getByText(props.name)).toBeInTheDocument();

        // verify the image and its alt text
        expect(screen.getByAltText(`${props.name}'s testimonial profile`)).toHaveAttribute("src", props.image);

        // verify the rating image and its alt text
        expect(screen.getByAltText(`${props.name}'s rating`)).toHaveAttribute("src", props.rating);

        // verify the review text
        expect(screen.getByTestId('review')).toHaveTextContent(props.review);
    })
})