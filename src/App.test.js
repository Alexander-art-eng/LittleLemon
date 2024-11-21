import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';

test('BookingForm renders correctly and allows form interaction', () => {

  // Mock props
  const mockProps = {
    availableTimes: { availableTimes: ['17:00', '18:00', '19:00']},
    dispatch: jest.fn(), // Mock dispatch function
    submitForm: jest.fn()  // Mock submition form
  };

  render(<BookingForm {...mockProps} />);
  const dateLabel = screen.getByLabelText('Choose Date:');
  expect(dateLabel).toBeInTheDocument();
})

