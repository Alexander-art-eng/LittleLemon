import { render, screen } from "@testing-library/react";
import BookingForm from "../BookingForm";

describe("BookingForm", () => {
    // Test 1: Static text rendering
    test('Renders the BookingForm heading', () => {
        render(<BookingForm availableTimes={{ availableTimes: [] }} />);
        
        // Test for static labels
        const dateLabel = screen.getByText("Choose Date:");
        const timeLabel = screen.getByText("Choose Time:");
        const guestsLabel = screen.getByText("Number of Guests:");
        const occasionLabel = screen.getByText("Occasion:");
        
        expect(dateLabel).toBeInTheDocument();
        expect(timeLabel).toBeInTheDocument();
        expect(guestsLabel).toBeInTheDocument();
        expect(occasionLabel).toBeInTheDocument();
    });
});
