import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "../BookingForm";

describe("BookingForm", () => {
    // Test 1: Static text rendering
    test('Renders the BookingForm heading', () => {
        render(<BookingForm availableTimes={{ availableTimes: [] }} />);
        
        // Test for static labels
        const dateLabel = screen.getByText("Choose Date");
        const timeLabel = screen.getByText("Choose Time");
        const guestsLabel = screen.getByText("Number of Guests");
        const occasionLabel = screen.getByText("Occasion");
        
        expect(dateLabel).toBeInTheDocument();
        expect(timeLabel).toBeInTheDocument();
        expect(guestsLabel).toBeInTheDocument();
        expect(occasionLabel).toBeInTheDocument();
    });
});

describe("Booking Form component", () => {
    const mockProps = {
        availableTimes: { availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'] },
        dispatch: jest.fn(),
        submitForm: jest.fn()
    };

    test('date input has required attribute and min date', () => {
        render(<BookingForm {...mockProps} />);

        const dateInput = screen.getByLabelText(/choose date/i);
        expect(dateInput).toHaveAttribute('required');
        expect(dateInput).toHaveAttribute('min', new Date().toISOString().split('T')[0]);
    })

    test('time select has required attribute', () => {
        render(<BookingForm {...mockProps} />);

        const timeSelect = screen.getByLabelText(/choose time/i);
        expect(timeSelect).toHaveAttribute('required');
    });

    test('guests input has required attribute and correct min/max values', () => {
        render(<BookingForm {...mockProps}/>);

        const guestInput = screen.getByLabelText(/number of guests/i);
        expect(guestInput).toHaveAttribute('required');
        expect(guestInput).toHaveAttribute('min', '1');
        expect(guestInput).toHaveAttribute('max', '10');
    });

    test('occasion select has required attribute', () => {
        render(<BookingForm {...mockProps}/>);

        const occasionSelect = screen.getByLabelText(/^occasion$/i);
        expect(occasionSelect).toHaveAttribute('required');
    });

    // Form validation tests
    test('submit button is disabled when form is invalid', () => {
        render(<BookingForm {...mockProps} />);

        fireEvent.change(screen.getByLabelText(/choose date/i), {
            target: {value: '2024-12-25'}
        });

        fireEvent.change(screen.getByLabelText(/choose time/i), {
            target: {value: '17:00'}
        });

        fireEvent.change(screen.getByLabelText(/number of guests/i), {
            target: {value: '5'}
        });

        fireEvent.change(screen.getByLabelText(/^occasion$/i), {
            target: {value: 'Birthday'}
        });

        const submitButton = screen.getByDisplayValue(/make your reservation/i);
        expect(submitButton).not.toBeDisabled();
    });

    // Form submission tests
    test('form submission with valid data calls submitForm', ()  => {
        render(<BookingForm {...mockProps}/>);

        // Fill out the form
        fireEvent.change(screen.getByLabelText(/choose date/i), {
            target: {value: '2024-12-25'}
        });

        fireEvent.change(screen.getByLabelText(/choose time/i), {
            target: {value: '17:00'}
        });

        fireEvent.change(screen.getByLabelText(/number of guests/i), {
            target: {value: '5'}
        });

        fireEvent.change(screen.getByLabelText(/^occasion$/i), {
            target: {value: 'Birthday'}
        });

        // submit the form
        fireEvent.submit(screen.getByRole('form'));

        expect(mockProps.submitForm).toHaveBeenCalled();
    });

    // Invalid form submit
    test('form validation fails with invalid guests number', () => {
        render(<BookingForm {...mockProps}/>);

        fireEvent.change(screen.getByLabelText(/choose date/i), {
            target: {value: '2024-12-25'}
        });

        fireEvent.change(screen.getByLabelText(/choose time/i), {
            target: {value: '17:00'}
        });

        fireEvent.change(screen.getByLabelText(/number of guests/i), {
            target: {value: '11'}
        });

        fireEvent.change(screen.getByLabelText(/^occasion$/i), {
            target: {value: 'Birthday'}
        });
        
        const submitButton = screen.getByDisplayValue(/make your reservation/i);
        expect(submitButton).toBeDisabled();
    });

    test('date change triggers available time update', () => {
        render(<BookingForm {...mockProps}/>);

            fireEvent.change(screen.getByLabelText(/choose date/i), {
                target: {value: '2024-12-25'}
            });

            expect(mockProps.dispatch).toHaveBeenCalledWith({
                type: 'UPDATE_TIMES',
                payload: new Date('2024-12-25')
            });
    });
}); 
