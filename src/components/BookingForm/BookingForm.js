import React, { useState, useEffect } from "react";

const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [formValid, setFormValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      props.submitForm(e);
    }
  };

  const validateForm = () => {
    return date && time && guests >= 1 && guests <= 10 && occasion;
  };

  useEffect(() => {
    setFormValid(validateForm());
  }, [date, time, guests, occasion]);

  const handleChange = (e) => {
    setDate(e);
    const selectedDate = new Date(e);
    props.dispatch({ type: "UPDATE_TIMES", payload: selectedDate });
  };

  return (
    <header>
      <section>
        <form onSubmit={handleSubmit} role="form" aria-label="Reservation Form">
          <fieldset>
            <legend>Reservation Form Details</legend>

            {/* for date field*/}
            <div className="form-field">
              <label htmlFor="book-date" className="label-text">
                Choose Date <span className="required" aria-label="required">*</span>
              </label>
              <input
                type="date"
                id="book-date"
                aria-label="Choose Date"
                aria-required="true"
                aria-describedby="date-error"
                aria-invalid={!date}
                value={date}
                onChange={(e) => handleChange(e.target.value)}
                name="book-date"
                min={new Date().toISOString().split("T")[0]}
                required
              />
              {!date && <span id="date-error" className="error-message" role="alert">Please select a date</span>}
            </div>

            {/* for time field*/}
            <div className="form-field">
              <label htmlFor="book-time" className="label-text">
                Choose Time <span className="required" aria-label="required">*</span>
              </label>
              <select
                id="book-time"
                aria-label="Choose Time"
                aria-required="true"
                aria-invalid={!time}
                aria-describedby="time-error"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              >
                <option value="">Select a time</option>
                {props.availableTimes.availableTimes.map((timeSlot) => (
                  <option key={timeSlot} value={timeSlot}>
                    {timeSlot}
                  </option>
                ))}
              </select>
              {!time && <span id="time-error" className="error-message" role="alert">Please select a time</span>}
            </div>

            {/* for guest field*/}
            <div className="form-field">
              <label htmlFor="book-guests" className="label-text">
                Number of Guests <span className="required" aria-label="required">*</span>
              </label>
              <input
                type="number"
                id="book-guests"
                aria-label="Number of Guests"
                aria-required="true"
                aria-describedby="guests-error"
                aria-invalid={!guests}
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                min="1"
                max="10"
                required
              />
              {(!guests || guests < 1 || guests > 10) && <span id="guests-error" className="error-message" role="alert">Please enter a valid number of guests (1 - 10)</span>}
            </div>

            {/* for occasion field*/}
            <div className="form-field">
              <label htmlFor="book-occasion" className="label-text">
                Occasion <span className="required" aria-label="required">*</span>
              </label>
              <select
                id="book-occasion"
                aria-label="Occasion"
                aria-required="true"
                aria-describedby="occasion-error"
                aria-invalid={!occasion}
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                required
              >
                <option value="">Select an occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Engagement">Engagement</option>
                <option value="Anniversary">Anniversary</option>
              </select>
              {!occasion && <span id="occasion-error" className="error-message" role="alert" >Please select an occasion</span> }
            </div>

            {/* submit button */}
            <div className="btnReceive">
              <input
                type="submit"
                value="Make Your Reservation"
                aria-label="Submit reservation request"
                disabled={!formValid}
                aria-disabled={!formValid}
              />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
